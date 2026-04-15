import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Home } from './components/Home'
import { Problema } from './pages/Problema'
import { Capitulos } from './pages/Capitulos'
import { Personajes } from './pages/Personajes'
import "./App.css"
import { SobreNosotros } from './pages/SobreNosotros'
import Equipo from './pages/Equipo'
import Footer from "./components/Footer"

export const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problema" element={<Problema />} />
        <Route path="/capitulos" element={<Capitulos />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/capituloModal" element={<Capitulos />} />
        <Route path="/sobreNosotros" element={<SobreNosotros />} />
        <Route path="/equipo" element={<Equipo />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}