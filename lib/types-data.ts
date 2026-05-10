export type TypeKey = 'E' | 'T' | 'A' | 'C'

export interface PersonalityType {
  key: TypeKey
  name: string
  slug: string
  tagline: string
  accentColor: string
  accentName: string
  characterName: string
  characterActor: string
  image: string
  verdict: string[]
  whatItCosts: string[]
  shadowKey: TypeKey
  shadowText: string
  whoReadWell: { type: string; text: string }
  whoChallenges: { type: string; text: string }
  whoAdmire: { type: string; text: string }
  coverLine: string
  shareCaption: string
  restartCta: string
  closingLine: string
}

export const typesData: Record<TypeKey, PersonalityType> = {
  E: {
    key: 'E',
    name: 'LA EDITORA',
    slug: 'editora',
    tagline: 'La que define el estándar — y quien lo paga.',
    accentColor: '#F4F2EE',
    accentName: 'editor',
    characterName: 'Miranda Priestly',
    characterActor: 'interpretada por Meryl Streep',
    image: '/characters/miranda.jpg',
    verdict: [
      'Operás desde la autoridad. No la pediste; la sostenés. Definís el marco contra el que el resto se mide, y eso te ahorra una conversación que el resto todavía está teniendo.',
      'No querés ser admirada. Querés ser correcta. Y descubriste, en algún momento que ya no recordás, que esas dos cosas no siempre coinciden — y que vos elegiste la segunda.',
      'Lo que la gente lee como frialdad es claridad. Lo que la gente lee como exigencia es estándar. Lo que la gente lee como distancia es disciplina. No vas a corregir esa lectura. La economía emocional de explicarse es algo que hace mucho dejaste de poder pagar.',
    ],
    whatItCosts: [
      'Esto es lo que tu estrategia te cuesta: la mayoría de tus relaciones son administradas, no habitadas. La gente te respeta antes de quererte, y vos te acostumbraste a que eso fuera suficiente.',
      'La soledad no te asusta, pero a veces te encuentra desprevenida en momentos donde el resto del mundo está pidiendo ayuda y vos no recordás cómo se hace.',
      'Sabés exactamente qué te costó llegar acá. Y a la pregunta de si valió la pena, todavía no terminaste de responder.',
    ],
    shadowKey: 'C',
    shadowText: 'Cuando algo de tu armadura se afloja, lo que aparece debajo es el deseo de hacer que las cosas queden bien hechas, sin necesitar el crédito. Esa parte tuya existe. La administrás con cuidado.',
    whoReadWell: { type: 'El Curador', text: 'Reconocés la inteligencia lateral cuando la ves. Sabés distinguir el gusto real del gusto performativo.' },
    whoChallenges: { type: 'La Acólita', text: 'Su devoción te parece un desperdicio de energía. No entendés la lealtad al sistema por encima de la lealtad al estándar.' },
    whoAdmire: { type: 'otra Editora', text: 'La única persona cuya opinión te importa sin que lo admitas es la que tiene tu mismo nivel de exigencia.' },
    coverLine: '"No pido dos veces."',
    shareCaption: 'Me salió La Editora. No me sorprende. A vos tampoco debería.',
    restartCta: '¿Inconforme? Podés intentarlo de nuevo.',
    closingLine: 'Esta es solo una lectura. Es honesta. No es total.',
  },
  T: {
    key: 'T',
    name: 'LA TRADUCTORA',
    slug: 'traductora',
    tagline: 'La que atraviesa mundos sin perder ninguno del todo.',
    accentColor: '#8B6F4E',
    accentName: 'translator',
    characterName: 'Andy Sachs',
    characterActor: 'interpretada por Anne Hathaway',
    image: '/characters/andy.jpg',
    verdict: [
      'Te movés bien entre sistemas. Aprendés idiomas culturales rápido — el idioma del trabajo, el idioma de tus amigos, el idioma de la familia. Eso te hace útil, querida y, cuando estás cansada, levemente extranjera en todos lados.',
      'Tu integridad no es rigidez: es brújula. Tomás decisiones según un código personal que rara vez explicás en voz alta porque te da pudor. Te admirás de la gente que es lo suficientemente directa como para incomodarse.',
      'Lo que la gente lee como adaptabilidad es ambivalencia productiva. Lo que la gente lee como empatía es lectura emocional aguda. Lo que la gente lee como ingenuidad es una decisión consciente de no perder ciertas formas de mirar el mundo.',
    ],
    whatItCosts: [
      'Esto es lo que tu estrategia te cuesta: nunca estás del todo adentro y nunca estás del todo afuera. Cada vez que decidís salir de un sistema descubrís que algo de ese sistema ya está adentro tuyo y que no se va a ir.',
      'La gente cree que tu salida fue un acto puro y vos sabés que fue un acto privilegiado, posible gracias a recursos que no nombrás.',
      'A veces sospechás que tu honestidad es también una forma de no comprometerte del todo con ningún lugar.',
    ],
    shadowKey: 'C',
    shadowText: 'Cuando dejás de explicar, lo que aparece es el gusto: la capacidad de elegir, ordenar y elegir de nuevo. Esa parte tuya pesa más de lo que te das cuenta.',
    whoReadWell: { type: 'El Curador', text: 'Reconocés la sabiduría silenciosa. Sabés que la influencia real no necesita megáfono.' },
    whoChallenges: { type: 'La Editora', text: 'Su frialdad estructural te incomoda. No porque la juzgues — porque sabés que parte de vos la admira.' },
    whoAdmire: { type: 'La Editora', text: 'Querés la claridad que tiene. No el costo que paga. Esa tensión te define.' },
    coverLine: '"Aprendí el idioma. Elegí dónde vivir."',
    shareCaption: 'La Traductora. Creo que está bien. También creo que es educado de su parte.',
    restartCta: '¿Otra perspectiva? Podés volver a empezar.',
    closingLine: 'Una lectura es solo un punto de partida. Lo demás lo escribís vos.',
  },
  A: {
    key: 'A',
    name: 'LA ACÓLITA',
    slug: 'acolita',
    tagline: 'La que cree en el sistema más de lo que el sistema cree en ella.',
    accentColor: '#A8252A',
    accentName: 'acolyte',
    characterName: 'Emily Charlton',
    characterActor: 'interpretada por Emily Blunt',
    image: '/characters/emily.jpg',
    verdict: [
      'Sos la persona más preparada de cualquier sala. Conocés las reglas, los nombres, las jerarquías invisibles, los detalles que el resto no ve hasta que vos los señalás. Esa precisión es tu firma profesional.',
      'Tu identidad y tu trabajo conviven sin separación clara. Cuando rendís, sos. Cuando no rendís, no sabés qué hacer con vos. Por eso descansás mal, te enojás con el ocio, y el domingo a la tarde te encuentra mirando el techo con una ansiedad que no podés nombrar.',
      'Lo que la gente lee como rigidez es defensa. Lo que la gente lee como arrogancia es miedo bien vestido. Lo que la gente lee como obsesión es la manera en que aprendiste a sostenerte adentro de espacios que nunca te garantizaron pertenencia.',
    ],
    whatItCosts: [
      'Esto es lo que tu estrategia te cuesta: tu autoestima vive afuera de vos. La administra el sistema en el que estás, y eso significa que cualquier cambio en la temperatura de ese sistema te baja la presión.',
      'Cuando alguien te dice que descanses, una parte tuya escucha desaparecé. Sos consciente de esto. Eso no lo hace más fácil de cambiar.',
      'Tu sacrificio es real, y casi nadie lo nombra. Esto sí.',
    ],
    shadowKey: 'E',
    shadowText: 'Hay una versión tuya que ya no necesita pedir permiso para estar. Esa versión existe. Está más cerca de lo que creés.',
    whoReadWell: { type: 'La Editora', text: 'Admirás su autoridad y entendés lo que cuesta. Mejor que nadie, sabés el precio de sostener un estándar.' },
    whoChallenges: { type: 'La Traductora', text: 'Su salida elegante del sistema te parece un privilegio que vos no te podés permitir. Eso te enoja. No siempre es injusto.' },
    whoAdmire: { type: 'El Curador', text: 'Su paz con la invisibilidad es lo que más querés y menos entendés cómo conseguir.' },
    coverLine: '"Lo di todo. No sé bien a quién."',
    shareCaption: 'Salió La Acólita. Devastador. Preciso.',
    restartCta: 'Dale otra vez. Aunque probablemente salga igual.',
    closingLine: 'Esta es solo una lectura. Lo que no vio tampoco es menor.',
  },
  C: {
    key: 'C',
    name: 'EL CURADOR',
    slug: 'curador',
    tagline: 'El que refina sin pelear. El que sabe sin necesitar demostrarlo.',
    accentColor: '#3D4A3F',
    accentName: 'curator',
    characterName: 'Nigel Kipling',
    characterActor: 'interpretado por Stanley Tucci',
    image: '/characters/nigel.jpg',
    verdict: [
      'Tu inteligencia es lateral. Influís sin ocupar el centro, y la mayoría de las decisiones importantes que te rodean tienen tus huellas digitales en algún lado, aunque tu nombre no aparezca en el documento final.',
      'Hace tiempo aceptaste que el reconocimiento institucional no se reparte de manera justa, y dejaste de organizar tu vida alrededor de él. Eso te dio una libertad rara: hacés lo que hacés porque te interesa hacerlo, no porque te lo vayan a agradecer.',
      'Lo que la gente lee como discreción es elección. Lo que la gente lee como humildad es claridad sobre cómo funciona el sistema. Lo que la gente lee como paciencia es lo que te queda después de haber dejado de esperar.',
    ],
    whatItCosts: [
      'Esto es lo que tu estrategia te cuesta: a veces tu integridad se mezcla con tu invisibilidad y vos mismo no sabés dónde termina una y empieza la otra.',
      'Tu lealtad a la calidad del trabajo te ha dejado, en más de una ocasión, sosteniendo una institución que no te sostuvo de vuelta. Y tu generosidad con la mediocridad ajena ha sido, ocasionalmente, complicidad.',
      'Sabés esto. Lo procesás con elegancia. Eso no significa que no pese.',
    ],
    shadowKey: 'E',
    shadowText: 'Hay una decisión que no estás tomando, no porque no podés, sino porque todavía no decidiste si querés. Esa decisión está esperando.',
    whoReadWell: { type: 'La Traductora', text: 'Reconocés la ambivalencia productiva cuando la ves. Sabés que la persona que atraviesa sistemas es más compleja de lo que parece.' },
    whoChallenges: { type: 'La Acólita', text: 'Su ansiedad de pertenencia te parece innecesaria. No siempre con razón.' },
    whoAdmire: { type: 'La Editora', text: 'Su capacidad de decidir sin justificarse es lo que nunca terminás de alcanzar. Eso no es una debilidad tuya. Es una elección.' },
    coverLine: '"Nunca pedí el crédito. Solo me aseguré de que el trabajo sobreviviera."',
    shareCaption: 'El Curador. En silencio, siempre.',
    restartCta: 'Podés intentarlo de nuevo, si eso te dice algo.',
    closingLine: 'Una buena lectura no responde todo. Solo organiza algunas preguntas.',
  },
}

export const typeOrder: TypeKey[] = ['E', 'T', 'A', 'C']
