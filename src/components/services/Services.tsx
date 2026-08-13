import { servicesData } from "../../db/servicesData.ts";
import "./Services.css"

export function Services() {
    return (
        <>
            <section className="services" id="servicios">
                <div className="services__header">
                    <h2>NUESTROS SERVICIOS</h2>
                    <p>SOLUCIONES JURÍDICAS INTEGRALES PARA CADA DESAFÍO.</p>
                </div>

                <div className="services__grid">
                    {servicesData.map((service, index) => (
                        <article
                            className={`service-card ${index >= 6 ? "service-card--wide" : ""
                                }`}
                            key={service.id}
                        >
                            <img
                                className="service-card__icon"
                                src={service.image}
                                alt=""
                            />

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}