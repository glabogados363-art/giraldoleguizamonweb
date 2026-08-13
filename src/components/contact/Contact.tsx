import "./Contact.css"
import Documento from "../../assets/icons/documento.png"
import PhotoLaws from "../../assets/photoAboutUs.png"

interface ContactProps {
    onOpenContact: () => void
}

export function Contact({ onOpenContact }: ContactProps) {
    return (
        <>
            <section className="contact-section" id="contacto">
                <div className="contact-container">

                    <div className="contact-decoration">
                        <span></span>
                    </div>

                    <div className="contact-header">
                        <h2>
                            ¿CÓMO PODEMOS <span>AYUDARLE?</span>
                        </h2>
                        <p>
                            Cada situación legal requiere una estrategia adecuada.
                            Cuéntanos tu caso y nuestro equipo te orientará sobre el
                            camino jurídico más conveniente.
                        </p>
                    </div>

                    <div className="contact-content">

                        <div className="contact-image-wrapper">
                            <img
                                src={PhotoLaws}
                                alt="Atención jurídica"
                                className="contact-image"
                            />
                        </div>

                        <div className="contact-options-column">
                            <div className="contact-options">
                                <div
                                    className="contact-card"
                                    onClick={onOpenContact}
                                >
                                    <div className="contact-icon">
                                        <img src={Documento} alt="Cuéntanos tu caso" />
                                    </div>
                                    <div className="contact-card-text">
                                        <h3>Cuéntanos tu caso</h3>
                                        <p>
                                            Déjanos tus datos y descríbenos brevemente tu
                                            situación legal.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
