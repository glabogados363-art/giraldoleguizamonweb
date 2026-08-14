import { useState, useEffect, useCallback, useRef } from "react"
import "./Team.css"
import { teamData } from "../../db/teamData.ts"

function getItemsToShow(): number {
    if (typeof window === "undefined") return 3
    const w = window.innerWidth
    if (w <= 600) return 1
    if (w <= 900) return 2
    return 3
}

const TOTAL = teamData.length
const EXTENDED = [...teamData, ...teamData, ...teamData]

export function Team() {
    const [globalIndex, setGlobalIndex] = useState(TOTAL)
    const [itemsToShow, setItemsToShow] = useState(getItemsToShow)
    const [smooth, setSmooth] = useState(true)
    const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null)
    const detailRef = useRef<HTMLDivElement>(null)

    const selectedMember = teamData.find((member) => member.id === selectedMemberId)

    const handleResize = useCallback(() => {
        setItemsToShow(getItemsToShow())
    }, [])

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [handleResize])

    useEffect(() => {
        if (!smooth) {
            const id = requestAnimationFrame(() => {
                setSmooth(true)
            })
            return () => cancelAnimationFrame(id)
        }
    }, [smooth])

    const goNext = useCallback(() => {
        setGlobalIndex((prev) => {
            const next = prev + 1
            if (next >= 2 * TOTAL) {
                setTimeout(() => {
                    setSmooth(false)
                    setGlobalIndex(TOTAL)
                }, 500)
                return next
            }
            return next
        })
    }, [])

    const goPrev = useCallback(() => {
        setGlobalIndex((prev) => {
            const next = prev - 1
            if (next < TOTAL) {
                setTimeout(() => {
                    setSmooth(false)
                    setGlobalIndex(2 * TOTAL - 1)
                }, 500)
                return next
            }
            return next
        })
    }, [])

    useEffect(() => {
        if (selectedMemberId !== null) return

        const interval = setInterval(() => {
            goNext()
        }, 3500)
        return () => clearInterval(interval)
    }, [selectedMemberId, goNext])

    useEffect(() => {
        if (selectedMemberId !== null && detailRef.current) {
            detailRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }, [selectedMemberId])

    const handleToggle = (id: number) => {
        setSelectedMemberId((prev) => (prev === id ? null : id))
    }

    const activeMemberIndex = globalIndex % TOTAL
    const centerOffset = Math.floor((itemsToShow - 1) / 2)
    const startIndex = globalIndex - centerOffset
    const trackOffset = -(startIndex * (100 / itemsToShow))

    return (
        <section className="team" id="equipo">
            <div className="team__header">
                <h2>NUESTRO EQUIPO</h2>
                <p>PROFESIONALES COMPROMETIDOS CON ACOMPAÑARTE EN CADA DESAFÍO.</p>
            </div>

            <div className="team__slider">
                <button
                    type="button"
                    className="team__carousel-button team__carousel-button--prev"
                    onClick={goPrev}
                    aria-label="Anterior"
                >
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <div className="team__carousel">
                    <div
                        className="team__carousel-track"
                        style={{
                            transform: `translateX(${trackOffset}%)`,
                        transition: smooth
                            ? "transform 1s ease"
                            : "none",
                        }}
                    >
                        {EXTENDED.map((member, i) => (
                            <div
                                className={`team-card${i % TOTAL === activeMemberIndex ? " team-card--active" : ""}${member.id === selectedMemberId ? " team-card--selected" : ""}`}
                                key={`${member.id}-${i}`}
                                style={{ flex: `0 0 calc(100% / ${itemsToShow})` }}
                                role="button"
                                tabIndex={0}
                                aria-expanded={member.id === selectedMemberId}
                                onClick={() => handleToggle(member.id)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault()
                                        handleToggle(member.id)
                                    }
                                }}
                            >
                                <div className="team-card__image-wrapper">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="team-card__image"
                                    />
                                    <span className="team-card__overlay">Ver más</span>
                                </div>
                                <h3>{member.name}</h3>
                                <p>{member.position}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className="team__carousel-button team__carousel-button--next"
                    onClick={goNext}
                    aria-label="Siguiente"
                >
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>

            {selectedMember && (
                <div className="team__detail" ref={detailRef}>
                    <button
                        type="button"
                        className="team__detail-close"
                        onClick={() => setSelectedMemberId(null)}
                        aria-label="Cerrar detalle"
                    >
                        &#10005;
                    </button>

                    <div className="team__detail-photo">
                        <img src={selectedMember.image} alt={selectedMember.name} />
                    </div>

                    <div className="team__detail-body">
                        <h3 className="team__detail-name">{selectedMember.name}</h3>
                        <p className="team__detail-position">{selectedMember.position}</p>
                        <div className="team__detail-divider" />
                        <p className="team__detail-description">
                            {selectedMember.description}
                        </p>
                    </div>
                </div>
            )}
        </section>
    )
}
