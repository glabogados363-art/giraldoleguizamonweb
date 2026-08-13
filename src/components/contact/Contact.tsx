import { useState, useEffect, useCallback } from "react"
import "./Contact.css"
import Email from "../../assets/icons/mail.png"
import Documento from "../../assets/icons/documento.png"
import PhotoLaws from "../../assets/photoAboutUs.png"

const contactOptions = [
  {
    icon: Email,
    title: "Envíanos un mensaje",
    description: "Consultas generales, información de servicios.",
  },
  {
    icon: Documento,
    title: "Radicar PQRS",
    description: "Peticiones, Quejas, Reclamos, Sugerencias.",
  },
];

interface ContactProps {
    onOpenPqrs?: () => void
    onOpenMensaje?: () => void
}

export function Contact({ onOpenPqrs, onOpenMensaje }: ContactProps) {
    const [showForm, setShowForm] = useState(false)
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 900)

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth <= 900)
    }, [])

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [handleResize])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

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
                            <div className={`contact-options${showForm ? " contact-options--hidden" : ""}`}>
                                {contactOptions.map((option, index) => (
                                    <div
                                        className="contact-card"
                                        key={index}
                                        onClick={
                                            index === 0
                                                ? () => {
                                                    if (isMobile) {
                                                        onOpenMensaje?.()
                                                    } else {
                                                        setShowForm(true)
                                                    }
                                                }
                                                : index === 1
                                                    ? () => onOpenPqrs?.()
                                                    : undefined
                                        }
                                    >
                                        <div className="contact-icon">
                                            <img src={option.icon} alt={option.title} />
                                        </div>
                                        <div className="contact-card-text">
                                            <h3>{option.title}</h3>
                                            <p>{option.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={`contact-form${showForm ? " contact-form--visible" : ""}`}>
                                <button
                                    type="button"
                                    className="contact-form__back"
                                    onClick={() => setShowForm(false)}
                                >
                                    ← Volver
                                </button>

                                <form onSubmit={handleSubmit} className="contact-form__card">
                                    <h3 className="contact-form__title">ENVÍANOS UN MENSAJE</h3>

                                    <div className="contact-form__fields">
                                        <div className="contact-form__row">
                                            <input
                                                type="text"
                                                name="nombre"
                                                placeholder="Nombre Completo"
                                                required
                                            />
                                            <input
                                                type="email"
                                                name="correo"
                                                placeholder="Correo Electrónico"
                                                required
                                            />
                                        </div>

                                        <input
                                            type="tel"
                                            name="telefono"
                                            placeholder="Teléfono"
                                        />

                                        <input
                                            type="text"
                                            name="asunto"
                                            placeholder="Asunto"
                                            required
                                        />

                                        <textarea
                                            name="mensaje"
                                            placeholder="Tu Mensaje"
                                            rows={5}
                                            required
                                        />

                                        <label className="contact-form__checkbox">
                                            <input type="checkbox" required />
                                            <span className="contact-form__checkbox-mark"></span>
                                            <span className="contact-form__checkbox-text">
                                                Acepto el tratamiento de mis datos personales.{" "}
                                                <a href="#privacidad" className="contact-form__privacy-link">
                                                    Ver política de privacidad
                                                </a>
                                            </span>
                                        </label>

                                        <button type="submit" className="contact-form__submit">
                                            ENVIAR MENSAJE &nbsp; &rarr;
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
