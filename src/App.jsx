
import { BrowserRouter } from 'react-router-dom'
import Header  from './components/Header'
import { Home } from './components/Home'
import { Problema } from './pages/Problema'
import { CardSolucion } from './components/CardSolucion'


export const App = () => {
  return (
    <>
    <BrowserRouter>

    <Header/>
    <Home/>

    <Problema/>
    
    
    
    
    </BrowserRouter>
    </>
  )
}
