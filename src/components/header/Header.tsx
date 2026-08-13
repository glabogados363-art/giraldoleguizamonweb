import { useState } from "react"
import "./Header.css"
import Logo from "../../../public/photoLogoAbogadoYAsociados.png"

interface HeaderProps {
    onOpenConsulta?: () => void
}

export function Header({ onOpenConsulta }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="header">
            <div className="container header-container">
                <a href="#inicio" className="logo">
                    <img src={Logo} alt="Giraldo Leguizamon" />
                </a>

                <button
                    type="button"
                    className={`nav-toggle${menuOpen ? " open" : ""}`}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    aria-controls="nav"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <span className="nav-toggle__line" />
                    <span className="nav-toggle__line" />
                    <span className="nav-toggle__line" />
                </button>

                <nav id="nav" className={`nav${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)}>
                    <a href="#inicio">Inicio</a>
                    <a href="#nosotros">Nosotros</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#equipo">Equipo</a>
                    <a href="#contacto">¿Cómo podemos ayudarte?</a>
                    <button
                        type="button"
                        className="btn-primary"
                        onClick={() => {
                            setMenuOpen(false)
                            onOpenConsulta?.()
                        }}
                    >
                        Consulta tu caso
                    </button>
                </nav>
            </div>
        </header>
    )
}