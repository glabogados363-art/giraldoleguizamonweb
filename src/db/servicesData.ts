import accidente from "../assets/icons/colision-de-coche.png";
import derechoSanitario from "../assets/icons/derecho-sanitario.png";
import lesiones from "../assets/icons/lesiones-personales.png";
import demandasJudicial from "../assets/icons/demanda-judicial.png"
import derechoLaboral from "../assets/icons/derecho-laboral.png"
import derechoEmpresa from "../assets/icons/derecho-laboral(1).png"
import familia from "../assets/icons/familia.png"
import multas from "../assets/icons/multa-por-exceso-de-velocidad.png"

export interface ServiceDetailItem {
    title: string;
    text: string;
}

export interface ServiceDetail {
    intro?: string;
    heading?: string;
    items: ServiceDetailItem[];
    outro?: string;
}

export interface Service {
    id: number;
    image: string;
    title: string;
    description: string;
    detail: ServiceDetail;
}

export const servicesData: Service[] = [
    {
        id: 1,
        image: accidente,
        title: "ACCIDENTES DE TRÁNSITO",
        description:
            "Te acompañamos en reclamaciones administrativas, procesos de responsabilidad civil y representación penal derivados de accidentes de tránsito.",
        detail: {
            intro:
                "Un accidente de tránsito cambia el rumbo de tu vida o tu empresa en segundos. Más allá del trámite administrativo, sabemos que la tranquilidad depende de una estrategia jurídica que abarque todos los frentes. En nuestra firma, entendemos que cada caso es único, por lo que integramos nuestra experiencia en derecho civil, contable y penal para proteger tus intereses de principio a fin.",
            heading: "¿Cómo te respaldamos?",
            items: [
                {
                    title: "Gestión Administrativa (SOAT y ADRES)",
                    text: "Facilitamos la reclamación oportuna de beneficios, gastos médicos, transporte y compensaciones económicas, eliminando las barreras burocráticas con aseguradoras.",
                },
                {
                    title: "Responsabilidad Civil (Contractual y Extracontractual)",
                    text: "Representamos tus intereses en demandas por daños y perjuicios. Ya sea que el accidente derive de una falla en un contrato de transporte o un daño causado por un tercero, estructuramos la demanda técnica necesaria para obtener la indemnización justa por daños materiales y morales.",
                },
                {
                    title: "Representación Penal",
                    text: "Si el siniestro ha derivado en procesos de carácter penal (lesiones personales, homicidio culposo, entre otros), nuestro equipo asume tu defensa técnica o representación de víctimas con el rigor y la estrategia que el proceso requiere, garantizando el respeto al debido proceso.",
                },
            ],
            outro:
                "Nuestro compromiso contigo es la tranquilidad. Mientras nosotros nos encargamos de la complejidad legal —desde la conciliación hasta el litigio en instancias judiciales—, tú puedes enfocarte en tu recuperación y bienestar.",
        },
    },
    {
        id: 2,
        image: derechoSanitario,
        title: "DERECHO MÉDICO PARA PACIENTES",
        description:
            "Defendemos tus derechos frente a posibles negligencias, fallas en la atención médica y situaciones que generen responsabilidad de los prestadores de salud.",
        detail: {
            intro:
                "Defensa ante la negligencia médica. Si has sido víctima de una falla en la atención, impericia o falta de oportunidad, estamos contigo. Analizamos la viabilidad de tu caso con rigor técnico para buscar la reparación integral de los perjuicios.",
            items: [
                {
                    title: "Representación judicial",
                    text: "Demandas por responsabilidad civil y administrativa.",
                },
                {
                    title: "Gestión de reclamaciones",
                    text: "Acompañamiento en procesos administrativos contra prestadores de salud.",
                },
            ],
        },
    },
    {
        id: 3,
        image: lesiones,
        title: "DERECHO MÉDICO PARA IPS Y EPS",
        description:
            "Brindamos defensa jurídica y gestión del riesgo médico-legal para instituciones y profesionales del sector salud, promoviendo el cumplimiento y la protección institucional.",
        detail: {
            intro:
                "Blindaje jurídico y gestión institucional. Convertimos el riesgo legal en un proceso gestionado para garantizar la sostenibilidad y el cumplimiento normativo de tu institución.",
            items: [
                {
                    title: "Defensa Jurídica Integral",
                    text: "Asumimos tu representación en procesos de responsabilidad médica (civiles, administrativos y penales), acciones de repetición ante el Estado, y defensa especializada ante el Tribunal de Ética Médica y la Superintendencia Nacional de Salud.",
                },
                {
                    title: "Gestión de Riesgo Médico-Legal",
                    text: "Blindaje institucional ante eventos adversos, estructuración de protocolos de consentimiento informado, acompañamiento en juntas médicas y defensa técnica estratégica en acciones de tutela para evitar fallos desfavorables.",
                },
                {
                    title: "Derecho Laboral para el sector salud",
                    text: "Asesoría integral en contratación de personal y representación en procesos laborales ante jueces de la República.",
                },
                {
                    title: "Formación y Capacitación",
                    text: "\"La mejor defensa empieza en el conocimiento\". Diseñamos charlas y talleres adaptables (presenciales o virtuales) para equipos de salud sobre documentación clínica, manejo de eventos adversos y derechos del paciente.",
                },
            ],
        },
    },
    {
        id: 4,
        image: demandasJudicial,
        title: "DEMANDAS CONTRA EL ESTADO",
        description:
            "Representamos a ciudadanos afectados por actuaciones u omisiones de entidades públicas, buscando la reparación integral de los daños ocasionados.",
        detail: {
            intro:
                "Las actuaciones de las entidades públicas pueden, en ocasiones, vulnerar derechos fundamentales o causar daños irreparables. En Giraldo Leguizamón Abogados y Asociados, contamos con la experiencia necesaria para enfrentar la complejidad del litigio contra el Estado. Evaluamos la responsabilidad de la administración frente a fallas en el servicio, daños antijurídicos y excesos en el uso de la fuerza, garantizando que el ciudadano reciba la reparación integral que le corresponde.",
            heading: "¿En qué situaciones te representamos?",
            items: [
                {
                    title: "Fallas en el Servicio",
                    text: "Reclamamos por negligencias, omisiones o errores de las entidades estatales que hayan derivado en perjuicios materiales o morales.",
                },
                {
                    title: "Responsabilidad Militar y Policial",
                    text: "Asumimos la defensa en casos de lesiones, homicidios o daños causados por miembros de la Fuerza Pública en ejercicio de sus funciones o por abuso de autoridad.",
                },
                {
                    title: "Incumplimiento de Medidas",
                    text: "Procesos derivados de la falta de ejecución de órdenes judiciales, actos administrativos o medidas de protección que el Estado estaba obligado a garantizar.",
                },
                {
                    title: "Daño Antijurídico",
                    text: "Estructuramos demandas de reparación directa para compensar cualquier daño causado por la acción u omisión de agentes estatales, asegurando un análisis riguroso de la responsabilidad extracontractual del Estado.",
                },
            ],
            outro:
                "Nuestro objetivo es equilibrar la balanza, utilizando todas las herramientas legales para que el Estado responda cuando su actuar ha afectado tu vida, tu integridad o tu patrimonio.",
        },
    },
    {
        id: 5,
        image: derechoLaboral,
        title: "DERECHO LABORAL Y PENSIONES",
        description:
            "Acompañamos a trabajadores en el reconocimiento de sus derechos laborales y pensionales, desde reclamaciones administrativas hasta procesos judiciales.",
        detail: {
            intro:
                "Para trabajadores: si buscas el reconocimiento de tu pensión, la corrección de tu historia laboral o el pago de salarios y prestaciones que te corresponden, nosotros te acompañamos en cada etapa, desde la reclamación administrativa hasta la instancia judicial.",
            items: [
                {
                    title: "Derecho Pensional",
                    text: "Gestión integral para el reconocimiento de pensiones de invalidez, sobrevivientes y vejez. Tramitamos correcciones de historia laboral y reliquidaciones ante fondos públicos y privados.",
                },
                {
                    title: "Reclamaciones Laborales",
                    text: "Representación en procesos para el cobro de diferencias salariales, nivelaciones salariales, pago de prestaciones sociales e indemnizaciones por terminación del contrato.",
                },
                {
                    title: "Defensa ante despidos injustos",
                    text: "Asesoría técnica en procesos disciplinarios y representación judicial en demandas por despido sin justa causa o violación de fueros laborales.",
                },
                {
                    title: "Culpa Patronal",
                    text: "Representación en procesos de responsabilidad civil por culpa patronal, buscando la indemnización plena de perjuicios cuando el accidente o enfermedad laboral es consecuencia de la negligencia del empleador en la implementación de medidas de seguridad.",
                },
            ],
        },
    },
    {
        id: 6,
        image: derechoEmpresa,
        title: "DERECHO LABORAL PARA EMPRESAS",
        description:
            "Asesoramos a empresas en contratación, prevención de riesgos laborales, procesos disciplinarios y defensa jurídica frente a conflictos laborales.",
        detail: {
            intro:
                "Gestión laboral estratégica y cumplimiento: asesoramos a empleadores en la correcta estructuración de sus relaciones laborales, previniendo riesgos legales y brindando una defensa sólida ante conflictos.",
            items: [
                {
                    title: "Consultoría en Contratación",
                    text: "Revisión y elaboración de contratos de trabajo, reglamentos internos (RIT) y modalidades de vinculación legal, asegurando el cumplimiento de la normativa vigente.",
                },
                {
                    title: "Defensa Jurídica",
                    text: "Representación técnica en procesos laborales ante jueces de la República y gestión de audiencias administrativas.",
                },
                {
                    title: "Gestión de Riesgos",
                    text: "Asesoría preventiva en procesos disciplinarios, manejo de nómina desde la perspectiva legal y solución de conflictos con trabajadores para evitar litigios innecesarios.",
                },
            ],
        },
    },
    {
        id: 7,
        image: familia,
        title: "FAMILIA Y SUCESIONES",
        description:
            "Ofrecemos acompañamiento jurídico en asuntos de familia, alimentos, divorcios, custodia, visitas y procesos sucesorales.",
        detail: {
            items: [
                {
                    title: "Regulación de Alimentos",
                    text: "Asesoría experta en procesos de fijación, aumento o disminución de cuotas alimentarias. Buscamos el equilibrio necesario para garantizar el bienestar de los menores y el cumplimiento de las obligaciones legales.",
                },
                {
                    title: "Derecho de Familia",
                    text: "Representación en procesos de divorcios, custodia y régimen de visitas, buscando siempre soluciones que minimicen el impacto emocional para los involucrados.",
                },
                {
                    title: "Nuestros servicios en sucesiones",
                    text: "Gestión completa de procesos sucesorales, tanto de mutuo acuerdo ante notaría como mediante trámite judicial. Nos encargamos de la liquidación de la sociedad conyugal o patrimonial, la elaboración de inventarios y avalúos, y la partición de bienes.",
                },
            ],
        },
    },
    {
        id: 8,
        image: multas,
        title: "MULTAS DE TRÁNSITO Y SANCIONES VIALES",
        description:
            "Defendemos tus derechos frente a fotomultas, multas, inmovilizaciones, suspensión de licencias y demás sanciones relacionadas con tránsito.",
        detail: {
            intro:
                "Las infracciones de tránsito pueden afectar tu movilidad, tu patrimonio y hasta tu licencia de conducción. En Giraldo Leguizamón Abogados y Asociados, defendemos tus derechos frente a cobros indebidos, inmovilizaciones injustas o sanciones desproporcionadas.",
            items: [
                {
                    title: "Fotodetecciones",
                    text: "Analizamos la validez legal de tus fotomultas y te representamos en las audiencias necesarias para solicitar su revocatoria o reducción.",
                },
                {
                    title: "Prescripción de Multas",
                    text: "Gestionamos la declaración de prescripción de multas antiguas para liberar tu patrimonio de cargas innecesarias.",
                },
                {
                    title: "Acuerdos de Pago",
                    text: "Estructuramos acuerdos de pago viables y ajustados a tu capacidad económica para proteger tu bolsillo y tu paz financiera.",
                },
                {
                    title: "Defensa Integral",
                    text: "Te asesoramos en el trámite técnico y jurídico para la liberación de vehículos inmovilizados y representación en procesos por suspensión o cancelación de la licencia de conducción, asegurando el debido proceso.",
                },
            ],
        },
    },
];
