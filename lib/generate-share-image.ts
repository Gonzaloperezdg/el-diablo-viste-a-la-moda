import { PersonalityType } from './types-data'

export type ShareFormat = 'square' | 'story'

const APP_URL = 'eldiablovistealamodabygpdg.vercel.app'
const APP_URL_FULL = `https://${APP_URL}`

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

function drawCroppedTop(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  dx: number, dy: number, dw: number, dh: number,
) {
  const srcRatio = img.naturalWidth / img.naturalHeight
  const dstRatio = dw / dh
  let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight
  if (srcRatio > dstRatio) {
    sw = img.naturalHeight * dstRatio
    sx = (img.naturalWidth - sw) / 2
  } else {
    sh = img.naturalWidth / dstRatio
    sy = 0
  }
  ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(' ')
  const lines: string[] = []
  let line = words[0]
  for (let i = 1; i < words.length; i++) {
    const test = line + ' ' + words[i]
    if (ctx.measureText(test).width <= maxWidth) {
      line = test
    } else {
      lines.push(line)
      line = words[i]
    }
  }
  lines.push(line)
  return lines
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.replace('#', '')
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  }
}

export async function generateShareImage(
  type: PersonalityType,
  format: ShareFormat,
): Promise<Blob> {
  await document.fonts.ready

  const W = 1080
  const H = format === 'square' ? 1080 : 1920

  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')!

  // Get loaded font families from CSS variables
  const style = getComputedStyle(document.documentElement)
  const displayFont = style.getPropertyValue('--font-cormorant').trim() || 'Georgia, serif'
  const uiFont = style.getPropertyValue('--font-jost').trim() || 'system-ui, sans-serif'

  const PAD = 80

  // ── Background ──
  ctx.fillStyle = '#0A0A0B'
  ctx.fillRect(0, 0, W, H)

  // ── Character image ──
  const imgH = format === 'square' ? Math.round(H * 0.55) : Math.round(H * 0.50)
  try {
    const img = await loadImage(type.image)
    drawCroppedTop(ctx, img, 0, 0, W, imgH)

    // Gradient fade to dark
    const grad = ctx.createLinearGradient(0, imgH * 0.30, 0, imgH + 40)
    grad.addColorStop(0, 'rgba(10,10,11,0)')
    grad.addColorStop(1, 'rgba(10,10,11,1)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, W, imgH + 40)
  } catch {
    // Image failed — dark gradient fallback
    const grad = ctx.createLinearGradient(0, 0, 0, imgH)
    grad.addColorStop(0, 'rgba(30,28,32,1)')
    grad.addColorStop(1, 'rgba(10,10,11,1)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, W, imgH)
  }

  // Solid fill below image
  ctx.fillStyle = '#0A0A0B'
  ctx.fillRect(0, imgH, W, H - imgH)

  // ── Text block ──
  ctx.textAlign = 'center'
  const accent = hexToRgb(type.accentColor)

  let y = imgH + (format === 'square' ? 64 : 80)

  // RUNWAY masthead
  ctx.fillStyle = 'rgba(92,88,82,0.7)'
  ctx.font = `300 22px ${uiFont}`
  try { (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '6px' } catch { /* */ }
  ctx.fillText('RUNWAY  ·  No. 01', W / 2, y)
  try { (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '0px' } catch { /* */ }
  y += format === 'square' ? 76 : 100

  // Type name — large
  const nameSize = format === 'square' ? 86 : 108
  ctx.fillStyle = '#F4F2EE'
  ctx.font = `300 ${nameSize}px ${displayFont}`
  const nameLines = wrapText(ctx, type.name, W - PAD * 2)
  const nameLineH = Math.round(nameSize * 1.05)
  nameLines.forEach((line, i) => ctx.fillText(line, W / 2, y + i * nameLineH))
  y += nameLines.length * nameLineH + (format === 'square' ? 20 : 28)

  // Character name
  ctx.fillStyle = 'rgba(92,88,82,0.8)'
  ctx.font = `300 20px ${uiFont}`
  try { (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '5px' } catch { /* */ }
  ctx.fillText(type.characterName.toUpperCase(), W / 2, y)
  try { (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '0px' } catch { /* */ }
  y += format === 'square' ? 44 : 56

  // Accent line
  const lineW = 140
  ctx.save()
  ctx.globalAlpha = 0.35
  ctx.fillStyle = type.accentColor
  ctx.fillRect((W - lineW) / 2, y, lineW, 2)
  ctx.restore()
  y += format === 'square' ? 46 : 60

  // Tagline
  const tagSize = format === 'square' ? 30 : 38
  ctx.fillStyle = 'rgba(166,162,155,0.85)'
  ctx.font = `300 italic ${tagSize}px ${displayFont}`
  const tagLines = wrapText(ctx, type.tagline, W - PAD * 2.5)
  const tagLineH = Math.round(tagSize * 1.5)
  tagLines.forEach((line, i) => ctx.fillText(line, W / 2, y + i * tagLineH))
  y += tagLines.length * tagLineH + (format === 'square' ? 36 : 56)

  // Cover line — only in story format (has more space)
  if (format === 'story') {
    const coverSize = 50
    ctx.fillStyle = 'rgba(244,242,238,0.6)'
    ctx.font = `300 italic ${coverSize}px ${displayFont}`
    const coverLines = wrapText(ctx, type.coverLine, W - PAD * 2)
    const coverLineH = Math.round(coverSize * 1.3)
    coverLines.forEach((line, i) => ctx.fillText(line, W / 2, y + i * coverLineH))
  }

  // ── URL / CTA at bottom ──
  if (format === 'square') {
    // WhatsApp: subtle CTA with URL
    ctx.fillStyle = 'rgba(92,88,82,0.5)'
    ctx.font = `300 17px ${uiFont}`
    try { (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '2px' } catch { /* */ }
    ctx.fillText(`Hacé el test  ·  ${APP_URL}`, W / 2, H - 52)
    try { (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '0px' } catch { /* */ }
  } else {
    // Instagram Stories: URL elegante, casi como una firma
    ctx.fillStyle = 'rgba(92,88,82,0.35)'
    ctx.font = `300 18px ${uiFont}`
    try { (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '3px' } catch { /* */ }
    ctx.fillText(APP_URL, W / 2, H - 64)
    try { (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '0px' } catch { /* */ }

    // Thin rule above URL
    ctx.save()
    ctx.globalAlpha = 0.15
    ctx.fillStyle = '#F4F2EE'
    ctx.fillRect((W - 300) / 2, H - 90, 300, 1)
    ctx.restore()
  }

  // Accent color micro-detail: top-left corner line
  ctx.save()
  ctx.globalAlpha = 0.6
  ctx.fillStyle = type.accentColor
  ctx.fillRect(0, 0, 4, Math.round(H * 0.08))
  ctx.restore()

  return new Promise<Blob>((resolve, reject) =>
    canvas.toBlob(
      b => b ? resolve(b) : reject(new Error('toBlob failed')),
      'image/jpeg',
      0.92,
    )
  )
}
