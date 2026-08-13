import { useState, useEffect } from "react"
import "./AboutUs.css"
import Img2549 from "../../assets/IMG_2549.jpg"
import Img2555 from "../../assets/IMG_2555.jpg"
import Img2562 from "../../assets/IMG_2562.jpg"
import Img2564 from "../../assets/IMG_2564.jpg"
import Img2565 from "../../assets/IMG_2565.jpg"
import Img2569 from "../../assets/IMG_2569.jpg"
import Img2570 from "../../assets/IMG_2570.jpg"
import Img2571 from "../../assets/IMG_2571.jpg"
import Img2593 from "../../assets/IMG_2593.jpg"
import Img2605 from "../../assets/IMG_2605.jpg"
import Img2614 from "../../assets/IMG_2614.jpg"
import PhotoHero from "../../assets/photoHero.png"
import PhotoLaws from "../../assets/photoLaws.png"

const aboutUsImages = [
    Img2549,
    Img2555,
    Img2562,
    Img2564,
    Img2565,
    Img2569,
    Img2570,
    Img2571,
    Img2593,
    Img2605,
    Img2614,
    PhotoHero,
    PhotoLaws,
];

export function AboutUs() {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % aboutUsImages.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <section className="nosotros" id="nosotros">
                <div className="nosotros__container">

                    {/* Imagen - carrusel */}
                    <div className="nosotros__image">
                        {aboutUsImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Giraldo Leguizamón ${index + 1}`}
                                className={`nosotros__slide${activeIndex === index ? " nosotros__slide--active" : ""}`}
                            />
                        ))}
                    </div>

                    {/* Contenido */}
                    <div className="nosotros__content">
                        <h2 className="nosotros__title">
                            NOSOTROS
                        </h2>

                        <div className="nosotros__text">
                            <p>
                                En  ABOGADOS Y ASOCIADOS, somos un equipo de personas apasionadas por lo que hacemos. Nos unimos para estar cerca de ti, ofreciéndote soluciones creativas y honestas con la calidez humana que te mereces. Creemos firmemente que la excelencia nace del respeto y el compromiso, por eso trabajamos con puntualidad y transparencia para acompañarte en cada paso de tu camino legal.
                            </p>

                            <p>
                                Somos un equipo multidisciplinario que comprende que el éxito empresarial se fundamenta en el respeto y la escucha activa. Por ello, hemos integrado a expertos en derecho, contabilidad, administración de empresas e ingeniería industrial, garantizando una asesoría jurídica integral que va más allá de lo convencional. Nuestro compromiso es que te sientas siempre acompañado y plenamente informado; transformamos procesos complejos en soluciones claras, combinando excelencia técnica con la calidez humana que nos distingue. Te invitamos a explorar nuestra web y descubrir cómo podemos impulsar tu crecimiento con honestidad y profesionalismo.
                            </p>
                        </div>

                        <a href="#equipo" className="nosotros__button">
                            Conoce nuestro equipo
                        </a>
                    </div>

                </div>
            </section>
        </>
    )
}
