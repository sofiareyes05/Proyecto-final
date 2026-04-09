
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Problema } from './pages/Problema'
import { CardProblema } from './components/CardProblema'


export const App = () => {
  return (
    <>
    <BrowserRouter>

    <Header/>
    <Home/>
    <CardProblema/>
    <Problema/>
    
    
    
    
    </BrowserRouter>
    </>
  )
}
