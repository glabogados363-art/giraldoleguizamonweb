import { useState } from "react"
import { Header } from "./components/header/Header"
import { Hero } from "./components/hero/Hero"
import { AboutUs } from "./components/aboutUs/AboutUs"
import { Services } from "./components/services/Services"
import { Team } from "./components/team/Team"
import { Contact } from "./components/contact/Contact"
import { Modal } from "./components/modal/Modal"
import { Footer } from "./components/footer/Footer"

type ModalMode = "consulta" | "pqrs" | "mensaje"

function App() {
  const [modalMode, setModalMode] = useState<ModalMode | null>(null)

  return (
    <>
      <Header onOpenConsulta={() => setModalMode("consulta")} />
      <Hero />
      <AboutUs />
      <Services />
      <Team />
      <Contact
        onOpenPqrs={() => setModalMode("pqrs")}
        onOpenMensaje={() => setModalMode("mensaje")}
      />
      <Modal mode={modalMode} onClose={() => setModalMode(null)} />
      <Footer />
    </>
  )
}

export default App
