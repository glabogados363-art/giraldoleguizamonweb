import "./AboutUs.css"
import Img2569 from "../../assets/IMG_2569.jpg"

export function AboutUs() {
    return (
        <>
            <section className="nosotros" id="nosotros">
                <div className="nosotros__container">

                    <div className="nosotros__image">
                        <img
                            className="nosotros__image-img"
                            src={Img2569}
                            alt="Giraldo Leguizamón"
                        />
                    </div>

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
