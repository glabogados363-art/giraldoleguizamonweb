import Logo from "../../../public/logo.png"
import "./Hero.css"

export function Hero() {
    return (
        <>
            <section className="hero" id="inicio">
                <div className="hero__top-line"></div>
                <div className="hero__left-line"></div>

                <div className="hero__container">

                    <div className="hero__content">
                        <h1 className="hero__title">
                            EXCELENCIA JURÍDICA,
                            <br />
                            ESTRATEGIA Y
                            <br />
                            <span>CONFIANZA</span>
                        </h1>

                        <div className="hero__bottom">
                            <div className="hero__divider-top"></div>

                            <div className="hero__text">
                                <div className="hero__divider-right"></div>
                                <p>
                                    Somos un equipo multidisciplinario que transforma procesos
                                    complejos en soluciones claras, con honestidad, transparencia
                                    y compromiso en cada paso de tu camino legal.
                                </p>
                            </div>

                            <div className="hero__button-container">
                                <a href="#servicios" className="hero__button">
                                    Conoce nuestros servicios
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="hero__image">
                    <img src={Logo} alt="Giraldo Leguizamón" />
                </div>
            </section>
        </>
    )
}
