import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import "./Modal.css"
import { servicesData } from "../../db/servicesData"

const WhatsappIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#25D366"
        xmlns="http://www.w3.org/2000/svg"
        className="modal__whatsapp-icon"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
)

type ModalStatus = "idle" | "loading" | "success" | "error"

interface ModalProps {
    open: boolean
    onClose: () => void
}

const asuntoOptions = [
    ...servicesData.map((service) => service.title),
    "Otro / No estoy seguro",
]

export function Modal({ open, onClose }: ModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null)
    const [status, setStatus] = useState<ModalStatus>("idle")

    const handleClose = useCallback(() => {
        setStatus("idle")
        onClose()
    }, [onClose])

    useEffect(() => {
        if (!open) return

        document.body.style.overflow = "hidden"

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose()
        }
        document.addEventListener("keydown", handleEsc)

        return () => {
            document.body.style.overflow = ""
            document.removeEventListener("keydown", handleEsc)
        }
    }, [open, handleClose])

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === overlayRef.current) handleClose()
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const data = new FormData(form)

        const payload = {
            nombre: data.get("nombre"),
            correo: data.get("correo"),
            telefono: data.get("telefono"),
            asunto: data.get("asunto"),
            mensaje: data.get("mensaje"),
        }

        setStatus("loading")

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            })

            if (!res.ok) throw new Error("Error al enviar")

            setStatus("success")
        } catch {
            setStatus("error")
        }
    }

    if (!open) return null

    return createPortal(
        <div
            className="modal-overlay"
            ref={overlayRef}
            onClick={handleOverlayClick}
        >
            <div className="modal-card">
                <button
                    type="button"
                    className="modal__close"
                    onClick={handleClose}
                    aria-label="Cerrar"
                >
                    &#10005;
                </button>

                <h2 className="modal__title">Cuéntanos tu caso</h2>
                <p className="modal__subtitle">
                    Déjanos tus datos y descríbenos brevemente tu situación.
                    Nuestro equipo te contactará a la mayor brevedad posible.
                </p>
                <div className="modal__divider" />

                {status === "success" ? (
                    <div className="modal__status modal__status--success">
                        <h3 className="modal__status-title">¡Consulta enviada!</h3>
                        <p>
                            Hemos recibido tu información correctamente. Nuestro equipo
                            se pondrá en contacto contigo a la mayor brevedad posible.
                        </p>
                        <button
                            type="button"
                            className="modal__submit"
                            onClick={handleClose}
                        >
                            CERRAR
                        </button>

                        <a
                            href="https://wa.me/573216698430"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modal__whatsapp"
                        >
                            <WhatsappIcon />
                            Escríbenos por WhatsApp
                        </a>
                    </div>
                ) : (
                    <form className="modal__form" onSubmit={handleSubmit}>
                        <div className="modal__row">
                            <label className="modal__field">
                                <span className="modal__label">Nombre completo *</span>
                                <input type="text" name="nombre" required />
                            </label>
                            <label className="modal__field">
                                <span className="modal__label">Correo electrónico *</span>
                                <input type="email" name="correo" required />
                            </label>
                        </div>

                        <div className="modal__row">
                            <label className="modal__field">
                                <span className="modal__label">Teléfono / WhatsApp</span>
                                <input type="tel" name="telefono" />
                            </label>
                            <label className="modal__field">
                                <span className="modal__label">Tipo de asunto</span>
                                <select name="asunto" defaultValue="">
                                    <option value="">Selecciona una opción</option>
                                    {asuntoOptions.map((opcion) => (
                                        <option key={opcion} value={opcion}>
                                            {opcion}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        <label className="modal__field">
                            <span className="modal__label">Descripción del caso *</span>
                            <textarea name="mensaje" required />
                        </label>

                        <label className="modal__checkbox">
                            <input type="checkbox" required />
                            <span className="modal__checkbox-mark" />
                            <span className="modal__checkbox-text">
                                Acepto el tratamiento de mis datos personales.{" "}
                                <a href="#privacidad" className="modal__privacy-link">
                                    Ver política de privacidad
                                </a>
                            </span>
                        </label>

                        {status === "error" && (
                            <p className="modal__status modal__status--error">
                                No pudimos enviar tu consulta. Inténtalo de nuevo.
                            </p>
                        )}

                        <button
                            type="submit"
                            className="modal__submit"
                            disabled={status === "loading"}
                        >
                            {status === "loading" ? "ENVIANDO..." : "ENVIAR CONSULTA"}
                        </button>

                        <a
                            href="https://wa.me/573216698430"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modal__whatsapp"
                        >
                            <WhatsappIcon />
                            Escríbenos por WhatsApp
                        </a>
                    </form>
                )}
            </div>
        </div>,
        document.body,
    )
}
