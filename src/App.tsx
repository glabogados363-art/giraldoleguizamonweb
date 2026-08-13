import { useState } from "react"
import { Header } from "./components/header/Header"
import { Hero } from "./components/hero/Hero"
import { AboutUs } from "./components/aboutUs/AboutUs"
import { Services } from "./components/services/Services"
import { Team } from "./components/team/Team"
import { Contact } from "./components/contact/Contact"
import { Modal } from "./components/modal/Modal"
import { Footer } from "./components/footer/Footer"

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header onOpenContact={() => setModalOpen(true)} />
      <Hero />
      <AboutUs />
      <Services />
      <Team />
      <Contact onOpenContact={() => setModalOpen(true)} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Footer />
    </>
  )
}

export default App
