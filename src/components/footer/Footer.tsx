import "./Footer.css"
import Direccion from "../../assets/icons/map-pin.png"
import Telefono from "../../assets/icons/phone.png"
import Correo from "../../assets/icons/mail.png"
import Horario from "../../assets/icons/clock.png"
// import Linkedin from "../../assets/icons/linkedin.png"
// import Instagram from "../../assets/icons/instagram.png"
// import Facebook from "../../assets/icons/facebook.png"
// import Twitter from "../../assets/icons/twitter.png"
import Whatsapp from "../../assets/icons/whatsapp.png"
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
                                Presencia en todo el Eje Cafetero
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
                        <span>SÍGUENOS</span>

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
                            <img src={Whatsapp} alt="WhatsApp" />
                        </a>
                    </div>

                </div>
            </section>
        </>
    )
}
