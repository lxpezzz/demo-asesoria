export interface FaqItem {
  question: string;
  answer: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface DetailBlock {
  code?: string;
  title: string;
  description: string;
}

export interface RelatedLink {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
}

export const FISCAL_PAGE = {
  meta: {
    title: 'Asesoría Fiscal — Valero · Asesoría Familiar',
    description:
      'Asesoramiento fiscal cercano para autónomos, pequeñas empresas y sociedades familiares. Declaraciones, IVA, IRPF, Impuesto de Sociedades y planificación tributaria.',
  },
  hero: {
    eyebrow: '01 / ASESORÍA FISCAL',
    title: 'Nos ocupamos de tus impuestos. Tú, de tu negocio.',
    lead: 'Llevamos tus obligaciones fiscales al día con rigor, antelación y explicaciones claras, para que cada trimestre sea previsible y puedas centrarte en tu actividad.',
    primaryCta: { label: 'Solicitar asesoramiento', href: '/contacto?servicio=fiscal' },
    secondaryCta: { label: 'Hablar con nosotros', href: '/contacto' },
  },
  whatWeDo: {
    eyebrow: '01 · QUÉ HACEMOS',
    title: 'Rigor técnico explicado en un lenguaje comprensible.',
    statement:
      'Entendemos el asesoramiento fiscal como un acompañamiento continuo, no como un trámite apresurado los últimos días de cada trimestre.',
    items: [
      {
        title: 'Declaraciones e impuestos',
        description:
          'Preparamos, revisamos y presentamos tus modelos periódicos y anuales con tiempo suficiente para comentarlos contigo antes del cargo.',
      },
      {
        title: 'Obligaciones fiscales al día',
        description:
          'Controlamos el calendario tributario, las altas censales y las comunicaciones electrónicas para que no se escape ningún plazo.',
      },
      {
        title: 'Planificación tributaria',
        description:
          'Analizamos la evolución de tu actividad antes del cierre del ejercicio para valorar escenarios y evitar sobresaltos innecesarios.',
      },
      {
        title: 'Acompañamiento a autónomos y pymes',
        description:
          'Resolvemos dudas cotidianas sobre facturación, gastos deducibles o cambios de actividad con trato directo y respuesta clara.',
      },
    ] satisfies DetailBlock[],
  },
  services: {
    eyebrow: '02 · EN QUÉ TE AYUDAMOS',
    title: 'Gestión completa de tu calendario tributario',
    items: [
      {
        code: '01',
        title: 'IVA',
        description: 'Liquidaciones trimestrales, resumen anual, operaciones intracomunitarias y revisión de deducibilidad.',
      },
      {
        code: '02',
        title: 'IRPF',
        description: 'Pagos fraccionados, retenciones de alquileres y profesionales, y declaración anual de la renta.',
      },
      {
        code: '03',
        title: 'Impuesto de Sociedades',
        description: 'Cierre fiscal del ejercicio, pagos a cuenta y revisión coordinada con la contabilidad de la sociedad.',
      },
      {
        code: '04',
        title: 'Declaraciones trimestrales y anuales',
        description: 'Modelos informativos, resúmenes anuales y comprobación de coherencia antes de cada presentación.',
      },
      {
        code: '05',
        title: 'Requerimientos y notificaciones',
        description: 'Seguimiento de avisos de la Agencia Tributaria, contestación de requerimientos y acompañamiento en comprobaciones.',
      },
      {
        code: '06',
        title: 'Planificación fiscal',
        description: 'Revisiones previas al cierre del año para estimar el resultado fiscal y tomar decisiones con margen.',
      },
    ] satisfies DetailBlock[],
  },
  audience: {
    eyebrow: '03 · PARA QUIÉN ES',
    title: 'Acompañamos negocios reales con necesidades concretas',
    items: [
      {
        title: 'Autónomos',
        description: 'Profesionales y trabajadores por cuenta propia que quieren orden y claridad en sus trimestres.',
      },
      {
        title: 'Pequeñas empresas',
        description: 'Sociedades que necesitan coordinación constante entre su facturación diaria y sus obligaciones fiscales.',
      },
      {
        title: 'Sociedades familiares',
        description: 'Empresas con recorrido que valoran la confianza, la discreción y una relación estable a largo plazo.',
      },
      {
        title: 'Negocios locales',
        description: 'Comercios, talleres y servicios de proximidad que buscan una asesoría accesible cuando surge una duda.',
      },
    ] satisfies DetailBlock[],
  },
  process: {
    eyebrow: '04 · CÓMO TRABAJAMOS',
    title: 'Un proceso claro desde el primer día',
    steps: [
      {
        number: '01',
        title: 'Conocemos tu actividad',
        description:
          'Revisamos tu situación actual, tu forma jurídica y tus obligaciones para partir de una foto ordenada y realista.',
      },
      {
        number: '02',
        title: 'Organizamos la información',
        description:
          'Establecemos una rutina sencilla de entrega de documentación para trabajar con previsión y sin prisas de última hora.',
      },
      {
        number: '03',
        title: 'Te acompañamos en el día a día',
        description:
          'Antes de presentar cada impuesto revisamos contigo los importes y resolvemos cualquier consulta que surja durante el año.',
      },
    ] satisfies StepItem[],
  },
  faqs: [
    {
      question: '¿Cuándo es buen momento para cambiar de asesoría fiscal?',
      answer:
        'Aunque suele resultar muy cómodo al inicio de un trimestre o de un nuevo ejercicio, podemos coordinar el cambio en cualquier momento del año revisando la documentación ya presentada para garantizar continuidad.',
    },
    {
      question: '¿Me avisáis antes de presentar los impuestos trimestrales?',
      answer:
        'Sí. Revisamos los resultados contigo con antelación suficiente para que conozcas el importe previsto y puedas resolver cualquier duda antes del vencimiento.',
    },
    {
      question: '¿Trabajáis tanto con autónomos como con sociedades?',
      answer:
        'Sí. Adaptamos el seguimiento a las obligaciones de cada caso, desde un profesional autónomo que acaba de empezar hasta una pyme o sociedad familiar consolidada.',
    },
    {
      question: '¿Qué ocurre si recibo una notificación o requerimiento de Hacienda?',
      answer:
        'La revisamos contigo, te explicamos con claridad qué solicita la Administración y preparamos la documentación o respuesta necesaria dentro del plazo establecido.',
    },
  ] satisfies FaqItem[],
  related: [
    {
      eyebrow: '02 / ASESORÍA CONTABLE',
      title: 'Tus números, siempre claros.',
      description: 'Contabilidad ordenada y seguimiento económico coordinado con tus impuestos.',
      href: '/contable',
    },
    {
      eyebrow: '03 / ASESORÍA LABORAL',
      title: 'Tu equipo también es nuestra prioridad.',
      description: 'Nóminas, contratos, altas y bajas gestionados con cercanía y rigor.',
      href: '/laboral',
    },
  ] satisfies RelatedLink[],
  cta: {
    eyebrow: 'PRIMERA CONVERSACIÓN',
    title: 'Hablemos de tu situación fiscal.',
    description:
      'Cuéntanos brevemente tu actividad y revisaremos cómo podemos ayudarte a llevar tus impuestos con mayor tranquilidad.',
    primaryCta: { label: 'Solicitar asesoramiento', href: '/contacto?servicio=fiscal' },
    secondaryCta: { label: 'Conocer el despacho', href: '/nosotros' },
  },
};

export const CONTABLE_PAGE = {
  meta: {
    title: 'Asesoría Contable — Valero · Asesoría Familiar',
    description:
      'Contabilidad de autónomos y sociedades, libros contables, cuentas anuales y seguimiento económico para tomar decisiones con claridad.',
  },
  hero: {
    eyebrow: '02 / ASESORÍA CONTABLE',
    title: 'Tus números, siempre claros.',
    lead: 'Organizamos y supervisamos la contabilidad de tu actividad para que no sea solo una obligación formal, sino una herramienta útil para entender cómo evoluciona tu negocio.',
    primaryCta: { label: 'Solicitar asesoramiento', href: '/contacto?servicio=contable' },
    secondaryCta: { label: 'Hablar con nosotros', href: '/contacto' },
  },
  includes: {
    eyebrow: '01 · QUÉ INCLUYE LA ASESORÍA CONTABLE',
    title: 'Orden documental y visión real de tu actividad',
    lead: 'Mantenemos tus registros actualizados y en sintonía con el área fiscal para que cada cifra tenga sentido.',
    items: [
      {
        code: '02.1',
        title: 'Contabilidad de autónomos',
        description: 'Libros registro de ingresos, gastos y bienes de inversión mantenidos al día de forma ordenada.',
      },
      {
        code: '02.2',
        title: 'Contabilidad de sociedades',
        description: 'Contabilidad ajustada al Plan General Contable, conciliaciones y control periódico de saldos.',
      },
      {
        code: '02.3',
        title: 'Libros contables',
        description: 'Preparación y legalización anual de los libros obligatorios ante el Registro Mercantil.',
      },
      {
        code: '02.4',
        title: 'Cuentas anuales',
        description: 'Elaboración, revisión y depósito de balance, cuenta de pérdidas y ganancias y memoria del ejercicio.',
      },
      {
        code: '02.5',
        title: 'Seguimiento económico',
        description: 'Revisión periódica de resultados, márgenes y evolución del negocio explicada en lenguaje claro.',
      },
    ] satisfies DetailBlock[],
  },
  whyItMatters: {
    eyebrow: '02 · LO IMPORTANTE',
    title: 'Una contabilidad bien llevada te ayuda a decidir mejor.',
    paragraphs: [
      'Cuando los números llegan tarde o resultan difíciles de interpretar, tomar decisiones sobre inversiones, precios o contrataciones se convierte en una intuición arriesgada.',
      'Nuestro trabajo consiste en mantener la información ordenada durante todo el año y traducir los balances a una conversación clara, para que sepas en qué punto está tu negocio en cada momento.',
    ],
    highlights: [
      { label: 'Claridad', value: 'Información comprensible, sin tecnicismos innecesarios.' },
      { label: 'Previsión', value: 'Seguimiento durante el año, no solo al cierre del ejercicio.' },
      { label: 'Coherencia', value: 'Contabilidad y fiscalidad alineadas en el mismo despacho.' },
    ],
  },
  process: {
    eyebrow: '03 · CÓMO TRABAJAMOS',
    title: 'Una rutina sencilla que mantiene todo en su sitio',
    steps: [
      {
        number: '01',
        title: 'Recepción de documentación',
        description: 'Acordamos una forma cómoda y periódica de enviarnos facturas, extractos y justificantes.',
      },
      {
        number: '02',
        title: 'Registro y supervisión',
        description: 'Contabilizamos cada movimiento comprobando su correspondencia fiscal y documental.',
      },
      {
        number: '03',
        title: 'Revisión periódica',
        description: 'Contrastamos los resultados contigo de forma regular para detectar desviaciones a tiempo.',
      },
      {
        number: '04',
        title: 'Visión clara del negocio',
        description: 'Al cierre y durante el año dispones de una fotografía fiel para planificar con seguridad.',
      },
    ] satisfies StepItem[],
  },
  audience: {
    eyebrow: '04 · A QUIÉN ACOMPAÑAMOS',
    title: 'Adaptamos el nivel de seguimiento a tu estructura',
    lead: 'No todas las actividades necesitan la misma complejidad, pero todas merecen rigor y orden.',
    items: [
      {
        title: 'Autónomos',
        description: 'Control limpio de ingresos y gastos para saber con certeza cuánto genera realmente tu actividad.',
      },
      {
        title: 'Pequeños negocios',
        description: 'Seguimiento cercano de tesorería, proveedores y resultados para trabajar con tranquilidad.',
      },
      {
        title: 'Pymes familiares',
        description: 'Contabilidad societaria completa, cierre anual y conversaciones claras sobre la marcha de la empresa.',
      },
    ] satisfies DetailBlock[],
  },
  faqs: [
    {
      question: '¿Cómo os hacemos llegar las facturas y documentos cada mes?',
      answer:
        'Nos adaptamos a lo que resulte más práctico para tu día a día, estableciendo una pauta clara y sencilla para que no se acumule documentación al final del trimestre.',
    },
    {
      question: '¿Solo revisáis la contabilidad al cerrar el año?',
      answer:
        'No. La contabilidad se actualiza de forma continua durante el ejercicio para que puedas conocer la evolución de tu actividad y anticipar decisiones antes del cierre.',
    },
    {
      question: '¿Coordináis la contabilidad con los impuestos?',
      answer:
        'Sí. Al gestionar ambas áreas en el mismo despacho, evitamos duplicidades y aseguramos que los libros contables y las declaraciones fiscales coincidan siempre.',
    },
    {
      question: '¿Me ayudáis a entender el balance y la cuenta de resultados?',
      answer:
        'Por supuesto. Parte esencial de nuestro trabajo es sentarnos contigo y explicar qué significan los números en términos prácticos para tu negocio.',
    },
  ] satisfies FaqItem[],
  related: [
    {
      eyebrow: '01 / ASESORÍA FISCAL',
      title: 'Nos ocupamos de tus impuestos.',
      description: 'Planificación tributaria y declaraciones coordinadas con tu contabilidad.',
      href: '/fiscal',
    },
    {
      eyebrow: '03 / ASESORÍA LABORAL',
      title: 'Tu equipo también es nuestra prioridad.',
      description: 'Gestión laboral cercana para que tu empresa funcione con tranquilidad.',
      href: '/laboral',
    },
  ] satisfies RelatedLink[],
  cta: {
    eyebrow: 'ASESORAMIENTO CONTABLE',
    title: 'Hablemos de cómo organizar tus números.',
    description:
      'Si buscas una contabilidad ordenada que realmente te ayude a entender tu negocio, estaremos encantados de escucharte.',
    primaryCta: { label: 'Solicitar asesoramiento', href: '/contacto?servicio=contable' },
    secondaryCta: { label: 'Contactar', href: '/contacto' },
  },
};

export const LABORAL_PAGE = {
  meta: {
    title: 'Asesoría Laboral — Valero · Asesoría Familiar',
    description:
      'Gestión laboral cercana para empresas y autónomos: nóminas, contratos, altas y bajas, seguros sociales y asesoramiento diario.',
  },
  hero: {
    eyebrow: '03 / ASESORÍA LABORAL',
    title: 'Tu equipo también es nuestra prioridad.',
    lead: 'Te acompañamos en la gestión laboral de tu empresa, desde la primera contratación hasta el día a día de nóminas, incidencias y obligaciones con la Seguridad Social.',
    primaryCta: { label: 'Solicitar asesoramiento', href: '/contacto?servicio=laboral' },
    secondaryCta: { label: 'Contactar', href: '/contacto' },
  },
  services: {
    eyebrow: '01 · SERVICIOS LABORALES',
    title: 'Gestión puntual y rigurosa de tus obligaciones laborales',
    lead: 'Cada trámite laboral afecta a personas concretas. Por eso cuidamos tanto el cumplimiento normativo como la claridad en cada paso.',
    items: [
      {
        code: '03.1',
        title: 'Nóminas',
        description: 'Confección mensual, pagas extraordinarias, finiquitos y cálculo de costes salariales.',
      },
      {
        code: '03.2',
        title: 'Contratos',
        description: 'Redacción, registro, prórrogas y orientación sobre la modalidad contractual adecuada en cada caso.',
      },
      {
        code: '03.3',
        title: 'Altas y bajas',
        description: 'Tramitación ágil en Seguridad Social de incorporaciones, ceses y variaciones de datos.',
      },
      {
        code: '03.4',
        title: 'Seguros sociales',
        description: 'Cálculo, envío y control mensual de cotizaciones y boletines ante la Tesorería General.',
      },
      {
        code: '03.5',
        title: 'Asesoramiento laboral',
        description: 'Resolución directa de consultas sobre convenios, jornadas, permisos e incidencias cotidianas.',
      },
    ] satisfies DetailBlock[],
  },
  howWeHelp: {
    eyebrow: '02 · EN QUÉ TE AYUDAMOS',
    title: 'Evitar errores a tiempo es la mejor forma de trabajar tranquilo.',
    paragraphs: [
      'La normativa laboral cambia con frecuencia y un pequeño descuido en un alta, un convenio o una baja médica puede generar problemas innecesarios tanto para la empresa como para el trabajador.',
      'Nos encargamos de revisar cada detalle antes de tramitarlo y de avisarte con claridad de lo que necesitas saber en cada situación, para que no tengas que descifrar boletines ni trámites por tu cuenta.',
    ],
  },
  situations: {
    eyebrow: '03 · SITUACIONES HABITUALES',
    title: 'Cuándo solemos acompañar a nuestros clientes',
    items: [
      {
        code: 'I',
        title: 'Tu primer empleado',
        description: 'Te explicamos costes reales, pasos previos, inscripción de empresa y alta inicial sin complicaciones.',
      },
      {
        code: 'II',
        title: 'Contratación y renovaciones',
        description: 'Valoramos contigo el contrato más adecuado según el convenio aplicable y las necesidades del puesto.',
      },
      {
        code: 'III',
        title: 'Incidencias del día a día',
        description: 'Resolvemos dudas rápidas sobre permisos retribuidos, ausencias, avisos o comunicaciones al equipo.',
      },
      {
        code: 'IV',
        title: 'Vacaciones, bajas y cambios de jornada',
        description: 'Gestionamos incapacidades temporales, ampliaciones o reducciones de jornada y su reflejo en nómina.',
      },
    ] satisfies DetailBlock[],
  },
  approach: {
    eyebrow: '04 · NUESTRA FORMA DE TRABAJAR',
    title: 'Trato directo y respuestas claras cuando las necesitas',
    items: [
      {
        number: '01',
        title: 'Contacto directo',
        description: 'Hablas con la persona que conoce tu empresa, tu convenio y el historial de tu equipo.',
      },
      {
        number: '02',
        title: 'Explicaciones sencillas',
        description: 'Te indicamos qué opciones tienes y qué implica cada una antes de dar un paso.',
      },
      {
        number: '03',
        title: 'Previsión y puntualidad',
        description: 'Trabajamos con plazos claros para que nóminas, seguros sociales y trámites salgan siempre a tiempo.',
      },
    ] satisfies StepItem[],
  },
  faqs: [
    {
      question: '¿Con cuánta antelación debo avisar para dar de alta a un trabajador?',
      answer:
        'Siempre antes de que comience su jornada laboral. Cuanto antes nos avises, con más margen podremos revisar el contrato, el convenio y toda la documentación necesaria.',
    },
    {
      question: '¿Podéis calcular cuánto me costará contratar a una persona antes de decidir?',
      answer:
        'Sí. Preparamos una estimación clara del salario bruto, las cotizaciones a la Seguridad Social y el coste total aproximado para que puedas valorar la decisión con seguridad.',
    },
    {
      question: '¿Qué hago si un trabajador causa baja médica?',
      answer:
        'Solo tienes que avisarnos en cuanto lo sepas. Nosotros hacemos el seguimiento de los partes y aplicamos correctamente la situación en la nómina y los seguros sociales.',
    },
    {
      question: '¿Atendéis consultas puntuales sobre convenios o vacaciones?',
      answer:
        'Sí. Resolver las dudas cotidianas de forma clara y rápida es una parte central de nuestro acompañamiento laboral.',
    },
  ] satisfies FaqItem[],
  related: [
    {
      eyebrow: '01 / ASESORÍA FISCAL',
      title: 'Nos ocupamos de tus impuestos.',
      description: 'Retenciones de nóminas, declaraciones trimestrales y planificación fiscal.',
      href: '/fiscal',
    },
    {
      eyebrow: '02 / ASESORÍA CONTABLE',
      title: 'Tus números, siempre claros.',
      description: 'Integración limpia de costes salariales en la contabilidad de tu empresa.',
      href: '/contable',
    },
  ] satisfies RelatedLink[],
  cta: {
    eyebrow: 'ASESORAMIENTO LABORAL',
    title: 'Hablemos de la gestión laboral de tu equipo.',
    description:
      'Tanto si vas a contratar por primera vez como si ya cuentas con equipo, estaremos encantados de ayudarte.',
    primaryCta: { label: 'Solicitar asesoramiento', href: '/contacto?servicio=laboral' },
    secondaryCta: { label: 'Ir a contacto', href: '/contacto' },
  },
};

export const NOSOTROS_PAGE = {
  meta: {
    title: 'Nosotros — Valero · Asesoría Familiar',
    description:
      'Conoce nuestra asesoría familiar: trato directo, explicaciones claras, cercanía real y acompañamiento continuo para autónomos y pymes.',
  },
  hero: {
    eyebrow: 'EL DESPACHO · ASESORÍA FAMILIAR',
    title: 'Una asesoría cercana, pensada para acompañarte.',
    lead: 'Creemos en un despacho tranquilo y accesible, donde conoces a las personas que llevan tus gestiones y puedes hablar de tu negocio con claridad.',
  },
  whoWeAre: {
    eyebrow: '01 · QUIÉNES SOMOS',
    title: 'Un despacho familiar centrado en relaciones duraderas.',
    paragraphs: [
      'Somos una pequeña asesoría familiar dedicada al acompañamiento fiscal, contable y laboral de autónomos, comercios y pequeñas empresas. Preferimos trabajar cerca de cada cliente antes que gestionar expedientes de forma impersonal.',
      'Detrás de cada impuesto, cada balance y cada nómina hay decisiones cotidianas que afectan a familias y proyectos reales. Por eso entendemos nuestro oficio desde la responsabilidad, la escucha y la constancia.',
    ],
  },
  howWeWork: {
    eyebrow: '02 · NUESTRA FORMA DE TRABAJAR',
    title: 'Cuatro principios sencillos que guían nuestro día a día',
    items: [
      {
        code: '01',
        title: 'Trato directo',
        description: 'Sin centralitas ni cadenas de intermediarios: hablas directamente con quien gestiona tu caso.',
      },
      {
        code: '02',
        title: 'Explicaciones claras',
        description: 'Traducimos normas, plazos y números a un lenguaje natural para que entiendas siempre qué se presenta y por qué.',
      },
      {
        code: '03',
        title: 'Cercanía real',
        description: 'Nos importa el contexto de tu actividad, no solo el formulario que toca entregar este mes.',
      },
      {
        code: '04',
        title: 'Acompañamiento continuo',
        description: 'Estamos disponibles durante todo el año para resolver dudas antes de que se conviertan en problemas.',
      },
    ] satisfies DetailBlock[],
  },
  office: {
    eyebrow: '03 · EL DESPACHO',
    title: 'Un espacio sereno pensado para conversar sin prisas.',
    lead: 'Nuestra oficina refleja cómo entendemos el asesoramiento: orden, luz natural, privacidad cuando hace falta y una mesa dispuesta para sentarnos a revisar tu negocio con calma.',
    captions: [
      {
        code: 'A',
        title: 'Recepción y puestos de trabajo',
        note: 'Un mismo espacio coherente donde conviven el área fiscal, contable y laboral.',
      },
      {
        code: 'B',
        title: 'Despacho privado de atención',
        note: 'Pensado para reuniones tranquilas, revisiones de cierre y primeras consultas.',
      },
    ],
  },
  differences: {
    eyebrow: '04 · QUÉ NOS DIFERENCIA',
    title: 'Lo que valoran quienes trabajan con nosotros',
    items: [
      {
        title: 'Relación cercana',
        description: 'Construimos una confianza estable que permite consultar cualquier duda con naturalidad.',
      },
      {
        title: 'Menos intermediarios',
        description: 'La persona que te atiende es la misma que revisa tu documentación y conoce tus plazos.',
      },
      {
        title: 'Comunicación clara',
        description: 'Preferimos una llamada o una reunión breve y comprensible a correos largos llenos de tecnicismos.',
      },
      {
        title: 'Conocimiento del negocio del cliente',
        description: 'Al acompañar tus áreas fiscal, contable y laboral juntas, tenemos una visión completa de tu actividad.',
      },
    ] satisfies DetailBlock[],
  },
  cta: {
    eyebrow: 'HABLEMOS',
    title: 'Si quieres una asesoría con la que hablar con claridad, estaremos encantados de escucharte.',
    description:
      'Podemos empezar con una primera conversación tranquila para conocer tu actividad y valorar cómo ayudarte.',
    primaryCta: { label: 'Hablemos', href: '/contacto' },
    secondaryCta: { label: 'Volver al inicio', href: '/' },
  },
};

export const CONTACTO_PAGE = {
  meta: {
    title: 'Contacto — Valero · Asesoría Familiar',
    description:
      'Ponte en contacto con nuestra asesoría familiar para consultas de asesoría fiscal, contable o laboral.',
  },
  hero: {
    eyebrow: 'CONTACTO · PRIMERA CONVERSACIÓN',
    title: 'Ahora, hablemos de tu negocio.',
    lead: 'Cuéntanos brevemente en qué punto estás o qué consulta quieres resolver. Te responderemos con claridad y sin compromiso.',
  },
  info: {
    eyebrow: 'DATOS DEL DESPACHO (ESTRUCTURA DEMO)',
    title: 'Cómo iniciar la conversación',
    intro:
      'Una primera toma de contacto nos sirve para conocer tu actividad, entender qué gestiones necesitas cubrir y explicarte de forma transparente cómo trabajamos.',
    demoNote:
      'Nota conceptual: los bloques de contacto siguientes son espacios estructurales de demostración preparados para incorporar los datos definitivos del despacho.',
    blocks: [
      {
        label: 'Teléfono',
        value: 'Bloque preparado para teléfono directo',
        note: 'Atención directa en horario de oficina',
      },
      {
        label: 'Correo electrónico',
        value: 'Bloque preparado para correo del despacho',
        note: 'Para consultas y envío inicial de documentación',
      },
      {
        label: 'Dirección',
        value: 'Bloque preparado para dirección física',
        note: 'Atención presencial con cita previa',
      },
      {
        label: 'Horario orientativo',
        value: 'Lunes a viernes · Mañanas y tardes según cita',
        note: 'Estructura de horario personalizable',
      },
    ],
  },
};
