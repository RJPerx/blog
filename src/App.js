import Header from "./components/Header"
import About from "./components/About"
import Services from "./components/Services"
import MainLayout from "./components/MainLayout"
import Home from "./components/Home"
import Contact from "./components/Contact"
import { Routes, Route } from 'react-router-dom'


function App() {
  return(
    <>
      <Routes>
          <Route element={<MainLayout />}>
              <Route path="/Services" element={ <Services />}/>
              <Route path="/" element={ <Home />}/>
              <Route path="/about" element={ <About />} />
              <Route path="/contact" element={ <Contact />} />
          </Route>
      </Routes>
    </>
  )
}
export default App;