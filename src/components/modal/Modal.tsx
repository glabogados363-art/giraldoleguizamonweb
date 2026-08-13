import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import "./Modal.css"

type ModalMode = "consulta" | "pqrs" | "mensaje"

interface ModalProps {
    mode: ModalMode | null
    onClose: () => void
}

export function Modal({ mode, onClose }: ModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mode) return

        document.body.style.overflow = "hidden"

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", handleEsc)

        return () => {
            document.body.style.overflow = ""
            document.removeEventListener("keydown", handleEsc)
        }
    }, [mode, onClose])

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === overlayRef.current) onClose()
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    if (!mode) return null

    const isConsulta = mode === "consulta"
    const isPqrs = mode === "pqrs"
    const title = isPqrs ? "RADICAR PQRS" : isConsulta ? "CONSULTA TU CASO" : "ENVÍANOS UN MENSAJE"
    const subtitle = isPqrs
        ? "Diligencia el formulario para radicar tu PQRS y nuestro equipo te responderá oportunamente."
        : isConsulta
            ? "Cuéntanos brevemente tu situación y nuestro equipo se pondrá en contacto contigo."
            : "Consultas generales, información de servicios."
    const buttonText = isPqrs ? "ENVIAR PQRS" : isConsulta ? "ENVIAR CONSULTA" : "ENVIAR MENSAJE"

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
                    onClick={onClose}
                    aria-label="Cerrar"
                >
                    &#10005;
                </button>

                <h2 className="modal__title">{title}</h2>
                <p className="modal__subtitle">{subtitle}</p>
                <div className="modal__divider" />

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
                            <span className="modal__label">Teléfono</span>
                            <input type="tel" name="telefono" />
                        </label>
                        <label className="modal__field">
                            <span className="modal__label">Asunto *</span>
                            <input type="text" name="asunto" required />
                        </label>
                    </div>

                    {isPqrs && (
                        <label className="modal__field">
                            <span className="modal__label">Tipo de solicitud *</span>
                            <select name="tipo" required>
                                <option value="">Selecciona una opción</option>
                                <option value="peticion">Petición</option>
                                <option value="queja">Queja</option>
                                <option value="reclamo">Reclamo</option>
                                <option value="sugerencia">Sugerencia</option>
                            </select>
                        </label>
                    )}

                    <label className="modal__field">
                        <span className="modal__label">Mensaje *</span>
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

                    <button type="submit" className="modal__submit">
                        {buttonText}
                    </button>
                </form>
            </div>
        </div>,
        document.body,
    )
}
