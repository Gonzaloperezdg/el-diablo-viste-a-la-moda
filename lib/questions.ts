export type AnswerKey = 'A' | 'B' | 'C' | 'D'
export type TypeKey = 'E' | 'T' | 'A' | 'C'

export interface Option {
  id: AnswerKey
  text: string
  scores: Partial<Record<TypeKey, number>>
}

export interface Question {
  id: number
  scene: string
  text: string
  options: Option[]
}

export const questions: Question[] = [
  {
    id: 1,
    scene: "La invitación",
    text: "Te invitan, sin tu pedirlo, a un evento donde sabés que vas a estar entre las cinco personas menos importantes de la sala. ¿Vas?",
    options: [
      { id: 'A', text: "Sí. Es exactamente donde necesito estar.", scores: { E: 2, A: 1 } },
      { id: 'B', text: "Sí, pero tengo que repensar el outfit tres veces.", scores: { A: 2, E: 1 } },
      { id: 'C', text: "Solo si voy con alguien con quien pueda comentar lo que veo.", scores: { T: 2, C: 1 } },
      { id: 'D', text: "Probablemente no. No me convence el sistema de jerarquía del evento.", scores: { C: 2, T: 1 } },
    ]
  },
  {
    id: 2,
    scene: "La crítica",
    text: "Alguien con autoridad real te hace una crítica directa, en público, sobre tu trabajo. Tu primer pensamiento honesto.",
    options: [
      { id: 'A', text: "\"¿Tiene razón? Si tiene razón, lo soluciono mañana.\"", scores: { E: 2, T: 1 } },
      { id: 'B', text: "Repetí mentalmente la frase exacta. Después decidí cómo me sentía.", scores: { A: 2, E: 1 } },
      { id: 'C', text: "Esto se va a quedar conmigo más tiempo del que debería.", scores: { T: 2, A: 1 } },
      { id: 'D', text: "Anoté el tono. La forma me dijo más que el contenido.", scores: { C: 2, E: 1 } },
    ]
  },
  {
    id: 3,
    scene: "La oficina nueva",
    text: "Empezás un trabajo nuevo. Primer día. ¿En qué te fijás antes de las nueve y media de la mañana?",
    options: [
      { id: 'A', text: "En el organigrama no oficial: quién le habla a quién, quién se queda callado cuando entra alguien.", scores: { E: 2, A: 1 } },
      { id: 'B', text: "En cómo está vestido el equipo. Eso te dice todo.", scores: { A: 2, C: 1 } },
      { id: 'C', text: "En el tono del email del onboarding y en la manera en que la gente saluda.", scores: { T: 2, C: 1 } },
      { id: 'D', text: "En la calidad del café, los muebles y la luz natural. Eso predice el resto.", scores: { C: 2, T: 1 } },
    ]
  },
  {
    id: 4,
    scene: "La amiga famosa",
    text: "Una amiga tuya, que conocés desde antes que lo fuera, se vuelve genuinamente exitosa. ¿Cómo lo procesás?",
    options: [
      { id: 'A', text: "Sinceramente: lo celebro, y también pienso \"yo tendría que estar moviéndome más rápido\".", scores: { E: 2, A: 1 } },
      { id: 'B', text: "Lo proceso comparándome durante una semana. Después lo guardo.", scores: { A: 2, T: 1 } },
      { id: 'C', text: "Lo celebro de verdad. Y pienso si quiero el tipo de éxito que ella tiene o uno propio.", scores: { T: 2, C: 1 } },
      { id: 'D', text: "Le mando un mensaje específico y honesto. Después sigo con mi día.", scores: { C: 2, E: 1 } },
    ]
  },
  {
    id: 5,
    scene: "El uniforme",
    text: "Tu manera de vestirte para el trabajo es:",
    options: [
      { id: 'A', text: "Uniformada y precisa. La misma estructura, pequeñas variaciones. Eso me libera.", scores: { E: 2, C: 1 } },
      { id: 'B', text: "Pulida, actualizada, calibrada por contexto. La leo todos los días antes de salir.", scores: { A: 2, E: 1 } },
      { id: 'C', text: "Cómoda con identidad. Las cosas me tienen que servir, pero también tienen que ser mías.", scores: { T: 2, C: 1 } },
      { id: 'D', text: "Personal y específica. No me importa si la gente entiende lo que llevo puesto.", scores: { C: 2, T: 1 } },
    ]
  },
  {
    id: 6,
    scene: "La cena",
    text: "En una cena con personas que no conocés, sos:",
    options: [
      { id: 'A', text: "La que termina conduciendo la conversación sin haberlo planeado.", scores: { E: 2, A: 1 } },
      { id: 'B', text: "La que en algún momento se descubre haciendo networking sin querer.", scores: { A: 2, E: 1 } },
      { id: 'C', text: "La que se queda 45 minutos hablando con una sola persona y la conoce de verdad.", scores: { T: 2, C: 1 } },
      { id: 'D', text: "La que propone el lugar y, cuando llega, observa más de lo que habla.", scores: { C: 2, T: 1 } },
    ]
  },
  {
    id: 7,
    scene: "Cuando algo sale mal",
    text: "Algo importante salió mal por una decisión tuya. ¿Qué hacés en las primeras 12 horas?",
    options: [
      { id: 'A', text: "Hago el postmortem mental antes de que termine el día. Identifico qué falló y qué cambia mañana.", scores: { E: 2, C: 1 } },
      { id: 'B', text: "Repaso cada paso, busco dónde fui yo, pierdo dos horas de sueño.", scores: { A: 2, T: 1 } },
      { id: 'C', text: "Lo proceso emocionalmente primero. Llamo a alguien. Después actúo.", scores: { T: 2, A: 1 } },
      { id: 'D', text: "Acepto el costo, ajusto el plan en silencio y sigo adelante. Sin drama interno.", scores: { C: 2, E: 1 } },
    ]
  },
  {
    id: 8,
    scene: "El ascenso",
    text: "Te ofrecen una posición con más poder, más visibilidad, más dinero y casi cero margen para tu vida personal. Tu primer impulso real:",
    options: [
      { id: 'A', text: "Aceptar. Las oportunidades de este nivel no se negocian.", scores: { E: 2, A: 1 } },
      { id: 'B', text: "Aceptar y averiguar después qué tengo que sacrificar.", scores: { A: 2, E: 1 } },
      { id: 'C', text: "Negociar el cómo antes de decir sí. El cargo no me define.", scores: { T: 2, C: 1 } },
      { id: 'D', text: "Pensarlo. La visibilidad sin libertad creativa no me sirve.", scores: { C: 2, T: 1 } },
    ]
  },
  {
    id: 9,
    scene: "La autoridad",
    text: "Tu jefe te dice que algo que vos tenés clarísimo está mal. Vos no creés que esté mal. ¿Qué hacés?",
    options: [
      { id: 'A', text: "Lo defiendo, con datos, y pongo el desacuerdo sobre la mesa.", scores: { E: 2, T: 1 } },
      { id: 'B', text: "Cedo. Esa pelea no la quiero dar hoy. Probablemente nunca.", scores: { A: 2, C: 1 } },
      { id: 'C', text: "Le pregunto desde dónde lo dice. Mi lectura puede estar incompleta y la suya también.", scores: { T: 2, C: 1 } },
      { id: 'D', text: "Lo escucho con cuidado, no peleo, y después hago lo que tengo que hacer.", scores: { C: 2, E: 1 } },
    ]
  },
  {
    id: 10,
    scene: "La invitación incómoda",
    text: "Te invitan a un grupo donde sabés que vas a tener que performar para pertenecer. ¿Entrás?",
    options: [
      { id: 'A', text: "Sí. Y voy a performar mejor que el promedio.", scores: { E: 2, A: 1 } },
      { id: 'B', text: "Sí. Y voy a sufrir un poco. Pero entro.", scores: { A: 2, T: 1 } },
      { id: 'C', text: "Entro un rato. Veo si me sirve. Si no, salgo sin culpa.", scores: { T: 2, C: 1 } },
      { id: 'D', text: "No. Los grupos donde hay que performar para pertenecer no tienen el oxígeno que necesito.", scores: { C: 2, E: 1 } },
    ]
  },
  {
    id: 11,
    scene: "La ambición ajena",
    text: "Una persona cercana te confiesa una ambición que te parece desproporcionada para su nivel actual. ¿Qué hacés?",
    options: [
      { id: 'A', text: "Le digo qué le falta. Si es seria, va a agradecer la franqueza.", scores: { E: 2, A: 1 } },
      { id: 'B', text: "Le hago preguntas hasta que ella misma vea lo que yo veo.", scores: { T: 2, C: 1 } },
      { id: 'C', text: "La acompaño. La ambición no se discute en el primer round.", scores: { A: 2, T: 1 } },
      { id: 'D', text: "Le devuelvo una versión más precisa de lo que está intentando hacer.", scores: { C: 2, E: 1 } },
    ]
  },
  {
    id: 12,
    scene: "El descanso",
    text: "Tenés un fin de semana entero libre, sin compromisos, sin culpa. ¿Qué hacés primero?",
    options: [
      { id: 'A', text: "Adelanto trabajo o planifico la semana. El tiempo libre también se diseña.", scores: { E: 2, A: 1 } },
      { id: 'B', text: "Hago las cosas que pospuse: gimnasio, mails, tareas pendientes. Recupero control.", scores: { A: 2, T: 1 } },
      { id: 'C', text: "Duermo. Dejo que el día arme su propio plan. No fuerzo nada.", scores: { T: 2, C: 1 } },
      { id: 'D', text: "Salgo a explorar algo nuevo: una librería, una galería, un barrio que no conozco.", scores: { C: 2, T: 1 } },
    ]
  },
  {
    id: 13,
    scene: "Lo que más te molesta",
    text: "¿Qué actitud te genera, honestamente, más rechazo en el trabajo o en lo social?",
    options: [
      { id: 'A', text: "La mediocridad asumida. Gente que no tiene estándar y lo defiende.", scores: { E: 2, C: 1 } },
      { id: 'B', text: "El desorden. La falta de detalle. La sensación de que no importa que las cosas estén bien hechas.", scores: { A: 2, E: 1 } },
      { id: 'C', text: "La crueldad gratuita. Personas que dañan porque pueden.", scores: { T: 2, C: 1 } },
      { id: 'D', text: "La superficialidad. Gente que confunde gusto con tendencia.", scores: { C: 2, T: 1 } },
    ]
  },
  {
    id: 14,
    scene: "La validación que importa",
    text: "¿De qué tipo de persona necesitás, realmente, que tu trabajo sea reconocido?",
    options: [
      { id: 'A', text: "De alguien con autoridad reconocida en mi campo.", scores: { E: 2, A: 1 } },
      { id: 'B', text: "De varias personas. Necesito saber que el círculo me ve.", scores: { A: 2, T: 1 } },
      { id: 'C', text: "De una o dos personas cuya opinión respeto profundamente.", scores: { T: 2, C: 1 } },
      { id: 'D', text: "De mí misma. Si la cosa está bien hecha, eso ya es suficiente la mayoría de los días.", scores: { C: 2, E: 1 } },
    ]
  },
  {
    id: 15,
    scene: "La pregunta final",
    text: "Si hoy te dijeran que el trabajo en el que pusiste todo no va a ser recordado, ¿qué cambia para vos?",
    options: [
      { id: 'A', text: "No mucho. Hago el trabajo porque tiene que existir, no porque alguien lo recuerde.", scores: { E: 2, C: 1 } },
      { id: 'B', text: "Cambia bastante. Una parte importante de mí trabaja para ser recordada.", scores: { A: 2, E: 1 } },
      { id: 'C', text: "Cambia algo. Pero descubro que la mayor parte del valor estaba en hacerlo, no en que se vea.", scores: { T: 2, C: 1 } },
      { id: 'D', text: "No cambia nada. Mi nombre nunca fue lo importante.", scores: { C: 2, T: 1 } },
    ]
  },
  {
    id: 16,
    scene: "La reunión",
    text: "Estás en una reunión donde la mayoría habla sin decir nada. ¿Qué hacés?",
    options: [
      { id: 'A', text: "Intervengo cuando veo que la conversación se está yendo de tema.", scores: { E: 2, C: 1 } },
      { id: 'B', text: "Observo el dinamismo: quién convence, quién cede, quién actúa.", scores: { C: 2, E: 1 } },
      { id: 'C', text: "Participo activamente aunque no sea siempre necesario. Aporta estar presente.", scores: { A: 2, T: 1 } },
      { id: 'D', text: "Digo lo que tengo que decir. Cuando no hay nada para sumar, no hablo.", scores: { T: 2, A: 1 } },
    ]
  },
  {
    id: 17,
    scene: "El feedback",
    text: "Alguien de tu círculo te pide retroalimentación honesta sobre algo que hizo mal.",
    options: [
      { id: 'A', text: "Lo doy directo, sin suavizarlo. El respeto real es decir la verdad.", scores: { E: 2, A: 1 } },
      { id: 'B', text: "Lo doy con cuidado. No quiero que deje de intentarlo.", scores: { T: 2, C: 1 } },
      { id: 'C', text: "Pienso cómo decirlo para que no sea destructivo. La forma importa tanto como el contenido.", scores: { C: 2, E: 1 } },
      { id: 'D', text: "Lo doy de inmediato, pero después me pregunto si fui demasiado directa/o.", scores: { A: 2, T: 1 } },
    ]
  },
  {
    id: 18,
    scene: "El fracaso ajeno",
    text: "Una persona con la que competís comete un error importante y público. ¿Cómo lo vivís?",
    options: [
      { id: 'A', text: "Con discreción. No celebro el fracaso ajeno, pero tampoco finjo que no pasó.", scores: { C: 2, T: 1 } },
      { id: 'B', text: "Con alivio que intento no mostrar. Después me arrepiento del alivio.", scores: { A: 2, E: 1 } },
      { id: 'C', text: "Con curiosidad analítica. Me pregunto qué falló y qué debería haber hecho distinto.", scores: { E: 2, C: 1 } },
      { id: 'D', text: "Con empatía. El fracaso ajeno me recuerda que todos estamos expuestos.", scores: { T: 2, A: 1 } },
    ]
  },
  {
    id: 19,
    scene: "La comparación",
    text: "Alguien te compara directamente con otra persona — en tu cara — como si fuera un cumplido. ¿Cómo lo procesás?",
    options: [
      { id: 'A', text: "Me irrita. No soy una referencia relativa.", scores: { E: 2, C: 1 } },
      { id: 'B', text: "Me pregunto si la comparación tiene razón y en qué medida.", scores: { T: 2, A: 1 } },
      { id: 'C', text: "Depende de con quién me comparan. Si es alguien que admiro, lo proceso bien.", scores: { A: 2, E: 1 } },
      { id: 'D', text: "La registro como información sobre quien me está hablando, no sobre mí.", scores: { C: 2, T: 1 } },
    ]
  },
  {
    id: 20,
    scene: "La agenda",
    text: "Tu manera de gestionar el tiempo y las prioridades es:",
    options: [
      { id: 'A', text: "Tengo un sistema propio, no negociable. Lo que no entra en la agenda, no existe.", scores: { E: 2, A: 1 } },
      { id: 'B', text: "Priorizo según lo que siento que realmente importa, aunque no siempre sea lo urgente.", scores: { C: 2, T: 1 } },
      { id: 'C', text: "Reviso mis listas constantemente. La idea de olvidarme algo me genera ansiedad real.", scores: { A: 2, E: 1 } },
      { id: 'D', text: "Flexible pero con criterio. Sé cuándo ceder el tiempo y cuándo no.", scores: { T: 2, C: 1 } },
    ]
  },
  {
    id: 21,
    scene: "El reconocimiento inesperado",
    text: "Alguien con autoridad te reconoce públicamente por algo que hiciste. Tu primera reacción:",
    options: [
      { id: 'A', text: "Satisfacción. Sabía que el trabajo estaba bien hecho. Que lo vean es el orden natural.", scores: { E: 2, T: 1 } },
      { id: 'B', text: "Alivio y orgullo al mismo tiempo. Era lo que necesitaba para saber que valió la pena.", scores: { A: 2, E: 1 } },
      { id: 'C', text: "Incomodidad. No me siento del todo cómoda/o siendo el centro de la atención.", scores: { C: 2, A: 1 } },
      { id: 'D', text: "Gratitud genuina, pero también una pregunta: ¿qué espera ahora de mí?", scores: { T: 2, C: 1 } },
    ]
  },
  {
    id: 22,
    scene: "El conflicto",
    text: "Tenés un conflicto con alguien que te importa. ¿Qué hacés en las primeras horas?",
    options: [
      { id: 'A', text: "Analizo qué pasó y qué tiene que ocurrir para resolverlo. Después hablo.", scores: { E: 2, C: 1 } },
      { id: 'B', text: "Hablo apenas puedo. El conflicto sin resolver me consume.", scores: { A: 2, T: 1 } },
      { id: 'C', text: "Espero tener claridad antes de decir algo que no puedo deshacer.", scores: { C: 2, E: 1 } },
      { id: 'D', text: "Hablo pronto, pero primero escucho. Quiero entender la otra versión antes de dar la mía.", scores: { T: 2, A: 1 } },
    ]
  },
  {
    id: 23,
    scene: "La decisión difícil",
    text: "Tenés que tomar una decisión importante con información incompleta y sin tiempo. ¿Cómo decidís?",
    options: [
      { id: 'A', text: "Confío en mi criterio. Tengo suficiente información interna acumulada para saber.", scores: { E: 2, C: 1 } },
      { id: 'B', text: "Busco a alguien con una perspectiva que yo no tengo, aunque sea rápido.", scores: { T: 2, A: 1 } },
      { id: 'C', text: "Me paralizo un momento y después actúo. La indecisión me produce más ansiedad que el error.", scores: { A: 2, E: 1 } },
      { id: 'D', text: "Elijo la opción que minimiza el daño irreversible. Lo demás se puede ajustar.", scores: { C: 2, T: 1 } },
    ]
  },
  {
    id: 24,
    scene: "La imagen pública",
    text: "La versión que el mundo ve de vos en redes o en contextos profesionales:",
    options: [
      { id: 'A', text: "Es calculada. Muestro lo que sirve para el contexto.", scores: { E: 2, A: 1 } },
      { id: 'B', text: "Es más o menos la misma que en privado. No tengo energía para mantener dos versiones.", scores: { T: 2, C: 1 } },
      { id: 'C', text: "Es lo mejor de mí, amplificado. Quiero que me vean en mi mejor versión posible.", scores: { A: 2, E: 1 } },
      { id: 'D', text: "Es una selección cuidadosa de lo que vale la pena mostrar, no lo que me hace ver bien.", scores: { C: 2, T: 1 } },
    ]
  },
  {
    id: 25,
    scene: "El proyecto personal",
    text: "Tenés un proyecto personal que empezaste pero nunca terminaste. ¿Qué pasó?",
    options: [
      { id: 'A', text: "Perdió prioridad cuando llegó algo más urgente. Pienso que algún día lo retomo.", scores: { T: 2, A: 1 } },
      { id: 'B', text: "Lo dejé porque no llegaba al estándar que me había propuesto. Mejor nada que algo mediocre.", scores: { E: 2, C: 1 } },
      { id: 'C', text: "Lo abandoné cuando el contexto que lo motivaba cambió. Sin ese contexto, perdió sentido.", scores: { C: 2, T: 1 } },
      { id: 'D', text: "Lo pausé por miedo a que no fuera suficientemente bueno. Todavía me pesa.", scores: { A: 2, E: 1 } },
    ]
  },
  {
    id: 26,
    scene: "El límite",
    text: "Alguien que te importa cruza un límite que vos tenés claro. ¿Cómo respondés?",
    options: [
      { id: 'A', text: "Lo digo, sin drama pero sin ambigüedad. El límite no se negocia.", scores: { E: 2, T: 1 } },
      { id: 'B', text: "Lo digo, pero me lleva tiempo encontrar las palabras para hacerlo bien.", scores: { T: 2, A: 1 } },
      { id: 'C', text: "Lo aguanto más de lo que debería. El conflicto me cuesta más que el límite cruzado.", scores: { A: 2, C: 1 } },
      { id: 'D', text: "Tomo distancia sin nombrarlo. Los actos dicen más que la conversación.", scores: { C: 2, E: 1 } },
    ]
  },
  {
    id: 27,
    scene: "La lealtad",
    text: "Una persona de tu círculo comete algo cuestionable. Vos lo sabés. ¿Qué hacés?",
    options: [
      { id: 'A', text: "Depende de la gravedad. Si es grave, no puedo callarme aunque me cueste la relación.", scores: { E: 2, A: 1 } },
      { id: 'B', text: "Lo hablo con ella/él primero, antes de hacer nada. Quiero entender qué pasó.", scores: { T: 2, C: 1 } },
      { id: 'C', text: "Lo proceso en silencio. No soy quién para juzgar y el costo social de hablar es alto.", scores: { A: 2, T: 1 } },
      { id: 'D', text: "Guardo la información. No la comparto ni la confronto, pero la tengo.", scores: { C: 2, E: 1 } },
    ]
  },
  {
    id: 28,
    scene: "La tendencia",
    text: "Algo se vuelve viral o muy popular en tu industria. Tu primera reacción:",
    options: [
      { id: 'A', text: "La analizo para entender si hay algo real ahí o es solo ruido.", scores: { E: 2, C: 1 } },
      { id: 'B', text: "La pruebo o la investigo. No quiero quedarme fuera de algo que puede ser útil.", scores: { A: 2, T: 1 } },
      { id: 'C', text: "Espero a que baje el ruido. Las tendencias revelan más sobre quien las adopta que sobre ellas mismas.", scores: { C: 2, E: 1 } },
      { id: 'D', text: "La registro, evalúo si me sirve y decido sin presión del hype.", scores: { T: 2, A: 1 } },
    ]
  },
  {
    id: 29,
    scene: "El error ajeno",
    text: "Un colega comete un error que te afecta directamente. ¿Cómo lo manejás?",
    options: [
      { id: 'A', text: "Lo señalo, sin dramatismo. Necesito que sepa qué pasó para que no se repita.", scores: { E: 2, A: 1 } },
      { id: 'B', text: "Lo resuelvo primero, y hablo cuando hay tiempo y calma.", scores: { C: 2, T: 1 } },
      { id: 'C', text: "Me cuesta no mostrar la irritación, pero trato. No siempre lo logro.", scores: { A: 2, E: 1 } },
      { id: 'D', text: "Escucho su versión antes de concluir nada. Probablemente hay algo que yo no vi.", scores: { T: 2, C: 1 } },
    ]
  },
  {
    id: 30,
    scene: "El cierre",
    text: "Si alguien que te conoce bien tuviera que describir cómo sos realmente — no cómo te presentás — ¿qué palabra no debería faltar?",
    options: [
      { id: 'A', text: "Exigente. Conmigo y con todo lo que me importa.", scores: { E: 2, C: 1 } },
      { id: 'B', text: "Honesta/o. A veces incómodamente.", scores: { T: 2, E: 1 } },
      { id: 'C', text: "Dedicada/o. A veces hasta el límite de lo sano.", scores: { A: 2, T: 1 } },
      { id: 'D', text: "Observador/a. Siempre veo más de lo que muestro.", scores: { C: 2, A: 1 } },
    ]
  },
]

export function selectRandomQuestions(count: number): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5)
  const selected = shuffled.slice(0, count)
  return selected.map(q => ({
    ...q,
    options: [...q.options].sort(() => Math.random() - 0.5),
  }))
}
