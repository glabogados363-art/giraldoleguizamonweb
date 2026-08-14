import "./Contact.css"
import photoPalacioDeJusticia from "../../assets/photoPalacioDeJusticia.png"

interface ContactProps {
    onOpenContact: () => void
}

export function Contact({ onOpenContact }: ContactProps) {
    return (
        <>
            <section
                className="contact-section"
                id="contacto"
                style={{ backgroundImage: `url(${photoPalacioDeJusticia})` }}
            >
                <div className="contact-overlay"></div>

                <div className="contact-container">
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

                    <button
                        type="button"
                        className="contact-cta"
                        onClick={onOpenContact}
                    >
                        CONSULTAR MI CASO
                    </button>
                </div>
            </section>
        </>
    )
}
