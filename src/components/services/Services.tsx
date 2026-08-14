import { Fragment, useEffect, useRef, useState } from "react"
import { servicesData } from "../../db/servicesData.ts";
import "./Services.css"

export function Services() {
    const [expandedId, setExpandedId] = useState<number | null>(null)
    const detailRef = useRef<HTMLDivElement>(null)

    const handleToggle = (id: number) => {
        setExpandedId((prev) => (prev === id ? null : id))
    }

    useEffect(() => {
        if (expandedId !== null && detailRef.current) {
            detailRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }, [expandedId])

    return (
        <>
            <section className="services" id="servicios">
                <div className="services__header">
                    <h2>NUESTROS SERVICIOS</h2>
                    <p>SOLUCIONES JURÍDICAS INTEGRALES PARA CADA DESAFÍO.</p>
                </div>

                <div className="services__grid">
                    {servicesData.map((service, index) => {
                        const isSelected = expandedId === service.id

                        return (
                            <Fragment key={service.id}>
                                <article
                                    className={`service-card ${index >= 6 ? "service-card--wide" : ""
                                        }${isSelected ? " service-card--selected" : ""}`}
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={isSelected}
                                    onClick={() => handleToggle(service.id)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault()
                                            handleToggle(service.id)
                                        }
                                    }}
                                >
                                    <img
                                        className="service-card__icon"
                                        src={service.image}
                                        alt=""
                                    />

                                    <h3>{service.title}</h3>

                                    <p>{service.description}</p>

                                    <span
                                        className={`service-card__toggle${isSelected ? " service-card__toggle--open" : ""}`}
                                        aria-hidden="true"
                                    >
                                        {isSelected ? "Cerrar" : "Ver más"}
                                    </span>
                                </article>

                                {isSelected && (
                                    <div className="services__detail" ref={detailRef}>
                                        <button
                                            type="button"
                                            className="services__detail-close"
                                            onClick={() => setExpandedId(null)}
                                            aria-label="Cerrar detalle"
                                        >
                                            &#10005;
                                        </button>

                                        <h3 className="services__detail-title">
                                            {service.title}
                                        </h3>

                                        {service.detail.intro && (
                                            <p className="services__detail-intro">
                                                {service.detail.intro}
                                            </p>
                                        )}

                                        {service.detail.heading && (
                                            <h4 className="services__detail-heading">
                                                {service.detail.heading}
                                            </h4>
                                        )}

                                        <ul className="services__detail-list">
                                            {service.detail.items.map((item) => (
                                                <li key={item.title}>
                                                    <strong>{item.title}</strong>
                                                    <span>{item.text}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {service.detail.outro && (
                                            <p className="services__detail-outro">
                                                {service.detail.outro}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </Fragment>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
