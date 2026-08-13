import { useState, useEffect, useCallback } from "react"
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

    useEffect(() => {
        const interval = setInterval(() => {
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
        }, 3500)
        return () => clearInterval(interval)
    }, [])

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

            <div className="team__carousel">
                <div
                    className="team__carousel-track"
                    style={{
                        transform: `translateX(${trackOffset}%)`,
                        transition: smooth
                            ? "transform 0.5s ease"
                            : "none",
                    }}
                >
                    {EXTENDED.map((member, i) => (
                        <div
                            className={`team-card${i % TOTAL === activeMemberIndex ? " team-card--active" : ""}`}
                            key={`${member.id}-${i}`}
                            style={{ flex: `0 0 calc(100% / ${itemsToShow})` }}
                        >
                            <div className="team-card__image-wrapper">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="team-card__image"
                                />
                            </div>
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
