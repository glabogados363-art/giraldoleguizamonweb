import "./Footer.css"
import Direccion from "../../assets/icons/map-pin.png"
import Telefono from "../../assets/icons/phone.png"
import Correo from "../../assets/icons/mail.png"
import Horario from "../../assets/icons/clock.png"
// import Linkedin from "../../assets/icons/linkedin.png"
// import Instagram from "../../assets/icons/instagram.png"
// import Facebook from "../../assets/icons/facebook.png"
// import Twitter from "../../assets/icons/twitter.png"
const WhatsappIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="#25D366"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
)
import LogoPhoto from "../../../public/photoLogoAbogadoYAsociados.png"
import Logo from "../../../public/logo.png"

const contactInfo = [
  {
    icon: Direccion,
    title: "DIRECCIÓN",
    text: "Carrera 9 N° 13-48, La Tebaida, Quindío",
  },
  {
    icon: Telefono,
    title: "TELÉFONO",
    text: "321 669 8430",
  },
  {
    icon: Correo,
    title: "CORREO",
    text: "glabogados363@gmail.com",
  },
  {
    icon: Horario,
    title: "HORARIOS DE ATENCIÓN",
    text: "Lunes a Viernes 8:00 a.m. – 5:30 p.m.",
  },
];

export function Footer() {
    return (
        <>
            <section className="contact">
                <div className="contact__container">

                    {/* CONTENIDO IZQUIERDO */}
                    <div className="contact__left">
                        <span className="contact__eyebrow">
                            CONTÁCTENOS
                        </span>

                        <h2 className="contact__title">
                            ESTAMOS PARA
                            <br />
                            AYUDARTE
                        </h2>

                        <p className="contact__description">
                            Entendemos que cada situación legal es un compromiso importante.
                            En GIRALDO LEGUIZAMÓN ABOGADOS Y ASOCIADOS, escuchamos para actuar
                            con exactitud. Unimos excelencia jurídica y visión técnica para
                            acompañarte con transparencia. Cuéntanos tu caso y construyamos
                            juntos la solución que mereces.
                        </p>

                        <div className="contact__coverage">
                            <div className="contact__coverage-icon">
                                <img src={Logo} alt="GIRALDO LEGUIZAMÓN ABOGADOS Y ASOCIADOS" />
                            </div>

                            <p>
                                <strong>Cobertura:</strong>{" "}
                                Presencia en el Eje Cafetero y atención a nivel nacional
                            </p>
                        </div>
                    </div>

                    {/* INFORMACIÓN DERECHA */}
                    <div className="contact__right">
                        {contactInfo.map((item, index) => (
                            <div
                                className="contact__item"
                                key={index}
                            >
                                <div className="contact__icon">
                                    <img src={item.icon} alt={item.title} />
                                </div>

                                <div className="contact__item-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* PARTE INFERIOR */}
                <div className="contact__bottom">

                    <div className="contact__logo">
                        <div className="contact__logo-text">
                            <img src={LogoPhoto} alt="GIRALDO LEGUIZAMÓN ABOGADOS Y ASOCIADOS" />
                        </div>
                    </div>

                    <div className="contact__social">
                        <span>CONTÁCTENOS</span>

                        {/* <a href="#" aria-label="LinkedIn">
                            <img src={Linkedin} alt="LinkedIn" />
                        </a>

                        <a href="#" aria-label="Instagram">
                            <img src={Instagram} alt="Instagram" />
                        </a>

                        <a href="#" aria-label="Facebook">
                            <img src={Facebook} alt="Facebook" />
                        </a>

                        <a href="#" aria-label="Twitter">
                            <img src={Twitter} alt="Twitter" />
                        </a> */}

                        <a
                            href="https://wa.me/573216698430"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <WhatsappIcon />
                        </a>
                    </div>

                </div>
            </section>
        </>
    )
}
