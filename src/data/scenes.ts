export interface ServiceItem {
  title: string;
  note?: string;
}

export interface TourNavItem {
  id: string;
  number: string;
  shortLabel: string;
  navLabel: string;
  surface: 'light' | 'ivory' | 'dark';
}

export interface SceneVisualSpec {
  id: 'entrada' | 'fiscal' | 'contable' | 'laboral' | 'nosotros' | 'contacto';
  code: string;
  roomLabel: string;
  alt: string;
  imageDesktop: string;
  imageMobile: string;
  width: number;
  height: number;
  focalPoint: string;
  /** Subtle desktop camera trajectory (pure GPU transform: scale, xPercent, yPercent) */
  cameraFrom: { scale: number; xPercent: number; yPercent: number };
  cameraTo: { scale: number; xPercent: number; yPercent: number };
}

export const SITE_META = {
  brandName: 'Valero',
  brandDescriptor: 'Asesoría Familiar',
  title: 'Valero · Asesoría Familiar — Fiscal, Contable y Laboral',
  description:
    'Recorrido arquitectónico por nuestra pequeña asesoría familiar. Asesoramiento fiscal, contable y laboral con trato directo, explicaciones claras y acompañamiento cercano.',
  demoNotice:
    'Proyecto conceptual de demostración. Recorrido fotográfico basado en un único espacio arquitectónico de referencia.',
};

export const TOUR_NAV: TourNavItem[] = [
  { id: 'entrada', number: '01', shortLabel: 'ENTRADA', navLabel: 'Inicio', surface: 'dark' },
  { id: 'fiscal', number: '02', shortLabel: 'FISCAL', navLabel: 'Fiscal', surface: 'dark' },
  { id: 'contable', number: '03', shortLabel: 'CONTABLE', navLabel: 'Contable', surface: 'dark' },
  { id: 'laboral', number: '04', shortLabel: 'LABORAL', navLabel: 'Laboral', surface: 'dark' },
  { id: 'nosotros', number: '05', shortLabel: 'NOSOTROS', navLabel: 'Nosotros', surface: 'dark' },
  { id: 'contacto', number: '06', shortLabel: 'CONTACTO', navLabel: 'Contacto', surface: 'dark' },
];

export const SCENE_VISUALS: Record<SceneVisualSpec['id'], SceneVisualSpec> = {
  entrada: {
    id: 'entrada',
    code: '01 / ENTRADA',
    roomLabel: 'Umbral de acceso y recepción',
    alt: 'Entrada de la asesoría familiar con suelo de roble natural mate, paredes marfil bañadas por luz de mañana, mostrador de piedra, celosía de listones de roble y zona de trabajo al fondo',
    imageDesktop: '/images/scenes/scene-01-entrada.webp',
    imageMobile: '/images/scenes/scene-01-entrada-mobile.webp',
    width: 1586,
    height: 992,
    focalPoint: '56% 50%',
    cameraFrom: { scale: 1.0, xPercent: 0, yPercent: 0 },
    cameraTo: { scale: 1.07, xPercent: -1.5, yPercent: -1.0 },
  },
  fiscal: {
    id: 'fiscal',
    code: '02 / ÁREA FISCAL',
    roomLabel: 'Primeros puestos de trabajo y archivo',
    alt: 'Zona de asesoría fiscal en el interior del mismo despacho: mesa de roble natural con monitores, ventanales a fachada urbana española y estantería con archivadores en piedra y grafito',
    imageDesktop: '/images/scenes/scene-02-fiscal.webp',
    imageMobile: '/images/scenes/scene-02-fiscal-mobile.webp',
    width: 1586,
    height: 992,
    focalPoint: '50% 50%',
    cameraFrom: { scale: 1.02, xPercent: -1.2, yPercent: 0.5 },
    cameraTo: { scale: 1.07, xPercent: 1.4, yPercent: -0.8 },
  },
  contable: {
    id: 'contable',
    code: '03 / ÁREA CONTABLE',
    roomLabel: 'Puesto contable y documentación',
    alt: 'Detalle del puesto contable en la misma sala: escritorio de roble con calculadora, teclado, archivadores ordenados, silla ergonómica y pared marfil soleada',
    imageDesktop: '/images/scenes/scene-03-contable.webp',
    imageMobile: '/images/scenes/scene-03-contable-mobile.webp',
    width: 1586,
    height: 992,
    focalPoint: '42% 52%',
    cameraFrom: { scale: 1.02, xPercent: 1.2, yPercent: 0.5 },
    cameraTo: { scale: 1.06, xPercent: -1.6, yPercent: -0.6 },
  },
  laboral: {
    id: 'laboral',
    code: '04 / ÁREA LABORAL',
    roomLabel: 'Vista panorámica hacia el puesto laboral',
    alt: 'Vista panorámica de la asesoría recorriendo la celosía de roble y el aparador grafito hasta el tercer puesto de asesoramiento laboral junto al ventanal',
    imageDesktop: '/images/scenes/scene-04-laboral.webp',
    imageMobile: '/images/scenes/scene-04-laboral-mobile.webp',
    width: 1817,
    height: 866,
    focalPoint: '68% 50%',
    cameraFrom: { scale: 1.09, xPercent: 3.2, yPercent: 0 },
    cameraTo: { scale: 1.09, xPercent: -3.2, yPercent: 0 },
  },
  nosotros: {
    id: 'nosotros',
    code: '05 / MESA DE REUNIONES',
    roomLabel: 'Rincón de reuniones y trato cercano',
    alt: 'Mesa de reuniones de madera de roble con cuatro sillas tapizadas en tono piedra junto al ventanal y la celosía de listones de madera del mismo despacho',
    imageDesktop: '/images/scenes/scene-05-reuniones.webp',
    imageMobile: '/images/scenes/scene-05-reuniones-mobile.webp',
    width: 1586,
    height: 992,
    focalPoint: '54% 52%',
    cameraFrom: { scale: 1.01, xPercent: -0.8, yPercent: 0.4 },
    cameraTo: { scale: 1.045, xPercent: 0.8, yPercent: -0.4 },
  },
  contacto: {
    id: 'contacto',
    code: '06 / DESPACHO PRIVADO',
    roomLabel: 'Mesa de atención personalizada',
    alt: 'Despacho privado de atención al cliente visto desde las dos sillas de visitante frente a la mesa de roble con jarra de agua, luz natural de ventana y celosía de madera',
    imageDesktop: '/images/scenes/scene-06-despacho.webp',
    imageMobile: '/images/scenes/scene-06-despacho-mobile.webp',
    width: 1586,
    height: 992,
    focalPoint: '54% 50%',
    cameraFrom: { scale: 1.0, xPercent: 0.6, yPercent: 0.4 },
    cameraTo: { scale: 1.05, xPercent: -0.6, yPercent: -0.6 },
  },
};

export const SCENE_LIST: SceneVisualSpec[] = [
  SCENE_VISUALS.entrada,
  SCENE_VISUALS.fiscal,
  SCENE_VISUALS.contable,
  SCENE_VISUALS.laboral,
  SCENE_VISUALS.nosotros,
  SCENE_VISUALS.contacto,
];

export const FISCAL_SERVICES: ServiceItem[] = [
  {
    title: 'Impuestos y declaraciones',
    note: 'Presentación puntual de modelos trimestrales y anuales con revisión previa.',
  },
  {
    title: 'Planificación fiscal',
    note: 'Anticipación de escenarios antes del cierre de ejercicio para evitar imprevistos.',
  },
  {
    title: 'Gestión de obligaciones tributarias',
    note: 'Seguimiento de notificaciones, requerimientos y calendario ante la Agencia Tributaria.',
  },
];

export const CONTABLE_SERVICES: ServiceItem[] = [
  { title: 'Contabilidad de autónomos y empresas' },
  { title: 'Libros contables' },
  { title: 'Cuentas anuales' },
  { title: 'Seguimiento económico' },
];

export const LABORAL_SERVICES: ServiceItem[] = [
  { title: 'Nóminas' },
  { title: 'Contratos' },
  { title: 'Altas y bajas' },
  { title: 'Seguridad Social' },
  { title: 'Consultas laborales' },
];

export const WORK_PILLARS = [
  {
    roman: 'I',
    title: 'Trato directo',
    body: 'Hablas con las personas que gestionan tu negocio.',
  },
  {
    roman: 'II',
    title: 'Explicaciones claras',
    body: 'Sin complicaciones innecesarias ni lenguaje difícil.',
  },
  {
    roman: 'III',
    title: 'Acompañamiento',
    body: 'Estamos a tu lado cuando necesitas tomar decisiones.',
  },
];
