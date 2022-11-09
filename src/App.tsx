import react from 'react'
import { ContainerBackground, ContainerMain } from "./App.styles"
import Head from "./Pages/Head/Head"
import Nav from './Pages/Nav/Nav'
import Pessoal from "./Pages/Themes-Nav/Pessoal/Pessoal"
import Profissional from "./Pages/Themes-Nav/Profissional/Profissional"
import Skills from "./Pages/Themes-Nav/Skills/Skills"
import Contato from "./Pages/Themes-Nav/Contato/Contato"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Shipping from './Pages/Shipping/Shipping'

const App = () => {

  return (
    <ContainerBackground>

      <Head />
      <ContainerMain>


        <Router>
          <Nav />
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Contato />} path='/contato' />
            <Route element={<Pessoal />} path='/pessoal' />
            <Route element={<Profissional />} path='/profissional' />
            <Route element={<Skills />} path='/skills' />
            <Route element={<Shipping/>} path='/envio'/>
          </Routes>
        </Router>
      
      </ContainerMain>






    </ContainerBackground>

  )
}

export default App
