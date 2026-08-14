import Estafania from "../assets/photoESTEFANÍAVALENCIAGIRALDO.jpg";
import Maria from "../assets/photoMARÍAFERNANDALEGUIZAMÓNSÁNCHEZ.png";
import Leandro from "../assets/photoLEANDROPULGARÍNCANO.png";
import Cristian from "../assets/photoCRISTIANCAMILOBEDOYACORDOBA.png";
import Andrea from "../assets/photoANDREALEGUIZAMÓNGIRALDO.png";
import Victor from "../assets/photoVICTORMANUELPANTOJALOPEZ.png";
import Edwin from "../assets/photoEDWINVARGASBLANDON.png";
import Daniel from "../assets/photoDANIELALEJANDROGIRALDOQUINTERO.png";
import Juan from "../assets/photoJUANSEBASTIANLASSOSÁNCHEZ.png";

export interface TeamMember {
  id: number;
  image: string;
  name: string;
  position: string;
  description: string;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    image: Estafania,
    name: "ESTEFANÍA VALENCIA GIRALDO",
    position: "Gerente (Socia fundadora) y Abogada",
    description:
      "Abogada especialista en Derecho Administrativo y Responsabilidad Médica, con una trayectoria sólida en litigio estratégico y representación legal. Su práctica se centra en la gestión integral de procesos derivados de fallas en la prestación del servicio de salud y la responsabilidad patrimonial del Estado, liderando la defensa jurídica estratégica de pacientes, IPS y profesionales del sector salud (tribunales de ética médica). Cuenta con una formación académica robusta, destacando su especialización en Derecho Administrativo por la Universidad La Gran Colombia, su formación en liquidación de entidades por la Universidad Sapienza de Roma y su especialización en Responsabilidad Médica por la Universidad Libre. Es una litigante de campo, con amplia experiencia en la conducción de audiencias, conciliaciones y el enfrentamiento judicial directo, combinando un profundo conocimiento clínico-jurídico con una visión estratégica orientada a resultados, garantizando siempre la protección, blindaje y representación efectiva de los intereses de sus clientes.",
  },
  {
    id: 2,
    image: Maria,
    name: "MARÍA FERNANDA LEGUIZAMÓN SÁNCHEZ",
    position: "Gerente (Socia fundadora) y Abogada",
    description:
      "Abogada especialista en Responsabilidad y Daño Resarcible, con una trayectoria sólida en el litigio estratégico, el análisis de viabilidad y la representación legal de alta complejidad. Mi práctica profesional se centra en la gestión integral de procesos de responsabilidad patrimonial del Estado, derecho administrativo, laboral y civil, liderando la defensa jurídica y estructuración de argumentos en casos de reparación directa —incluyendo privación injusta de la libertad—, demandas de nulidad y restablecimiento del derecho, responsabilidad médica y accidentes de tránsito. Cuento con una formación académica robusta, destacando mi especialización por la Universidad Externado de Colombia, sumada a una consolidada experiencia práctica adquirida desde la Fiscalía General de la Nación hasta firmas especializadas de alto nivel. Soy una litigante de campo, con amplia experiencia en la redacción de demandas, la conducción de audiencias y el enfrentamiento judicial directo. Combino un profundo dominio de la legislación colombiana con el liderazgo, la autonomía y una visión estratégica orientada a resultados, garantizando siempre la protección, blindaje y representación efectiva de los intereses de mis clientes en la gestión simultánea de casos de alto impacto.",
  },
  {
    id: 3,
    image: Leandro,
    name: "LEANDRO PULGARÍN CANO",
    position: "Abogado",
    description:
      "Abogado especialista en Derecho Público, con experiencia sólida en la gestión administrativa y hospitalaria del sector público. Ha coordinado procesos estratégicos como el Modelo Integrado de Planeación y Gestión (MIPG), control interno, recuperación de cartera jurídica y sistemas de Seguridad y Salud en el Trabajo. Cuenta con formación complementaria en Contratación Estatal, Marketing Político, SG-SST e Insolvencia Empresarial. Posee amplia experiencia liderando equipos interdisciplinarios, optimizando procesos institucionales y garantizando cumplimiento normativo en entidades de salud y gobiernos locales. Su perfil está orientado a resultados, con visión estratégica y compromiso con la excelencia en la gestión pública.",
  },
  {
    id: 4,
    image: Cristian,
    name: "CRISTIAN CAMILO BEDOYA CORDOBA ",
    position: "Abogado (Dependiente Judicial)",
    description:
      "Abogado egresado de la Universidad Libre de Pereira, con experiencia en defensa y representación judicial de personas naturales y jurídicas en procesos de diversas áreas del derecho, especialmente en materia civil, procesal administrativo y empresarial. Cuento con trayectoria en el sector público, participando en la gestión jurídica y en la estructuración y seguimiento de procesos de contratación estatal, con enfoque en la prevención del daño antijurídico y la adecuada defensa de los intereses institucionales. Asimismo, cuento con conocimientos en derecho empresarial y corporativo, brindando acompañamiento en la toma de decisiones legales y en la solución de controversias. Me caracterizo por mi enfoque estratégico, capacidad argumentativa y orientación a resultados, con habilidades para el litigio, análisis jurídico y construcción de soluciones efectivas en escenarios judiciales.",
  },
  {
    id: 5,
    image: Andrea,
    name: "ANDREA LEGUIZAMÓN GIRALDO",
    position: "Contadora",
    description:
      "Contadora Pública egresada de la Universidad del Quindío, con amplia experiencia en análisis contable, conciliaciones, liquidación de impuestos y gestión administrativa. Se destaca por su alto sentido de responsabilidad, capacidad de aprendizaje rápido y un firme compromiso con la excelencia en su labor profesional.",
  },
  {
    id: 6,
    image: Victor,
    name: "VICTOR MANUEL PANTOJA LOPEZ",
    position: "Ingeniero Industrial",
    description:
      "Ingeniero Industrial con amplia experiencia en gestión operativa y optimización de procesos. En nuestra firma, lidera la mejora continua, asegurando que cada servicio jurídico se ejecute bajo los más altos estándares de calidad y eficiencia. Especialista en la automatización de procesos internos y el cumplimiento normativo en Seguridad y Salud en el Trabajo (SST), su labor garantiza que nuestra operación administrativa sea ágil, segura y orientada a resultados estratégicos para el éxito de nuestros clientes.",
  },
  {
    id: 7,
    image: Edwin,
    name: "EDWIN VARGAS BLANDON ",
    position: "Técnico en Gestión y Operatividad",
    description:
      "Técnico experto en gestión operativa y logística integral, con un rol fundamental en la fluidez de nuestros procesos administrativos. Se encarga de la gestión y radicación de documentos, asegurando el cumplimiento ágil de trámites y diligencias externas. Como enlace comercial estratégico, lidera la búsqueda y consolidación de alianzas, siendo un punto de contacto clave para nuestros clientes y aliados. Su enfoque técnico y proactivo garantiza que cada operación de la firma se ejecute con eficiencia, puntualidad y compromiso, fortaleciendo nuestra presencia y capacidad de respuesta en el mercado.",
  },
  {
    id: 8,
    image: Daniel,
    name: "DANIEL ALEJANDRO GIRALDO QUINTERO",
    position: "Administrador de Empresas",
    description:
      "Economista con sólida trayectoria en gestión financiera y análisis económico. Se especializa en la estructuración y seguimiento de contratos de la firma, así como en la gestión estratégica de cobro de carteras jurídicas. Su enfoque analítico y capacidad de gestión garantizan la optimización de los recursos financieros y la eficacia en los procesos de recuperación de activos, contribuyendo directamente a la sostenibilidad y solidez operativa de la firma.",
  },
  {
    id: 9,
    image: Juan,
    name: "JUAN SEBASTIAN LASSO SÁNCHEZ",
    position: "Estudiante de Administración de Empresas",
    description:
      "Estudiante de Administración de empresas con enfoque en apoyo administrativo y gestión operativa. Colabora activamente en el seguimiento de procesos de cobranza y brinda asistencia integral en la gestión administrativa interna de la firma. Se distingue por su capacidad organizativa, apoyo estratégico en las funciones corporativas y su compromiso con la eficiencia operativa del equipo.",
  },
];
