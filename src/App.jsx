import { BrowserRouter , Routes , Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Dish from "./pages/Dish"
import { useEffect } from "react"
import Aos from "aos"
import Plate from "./pages/Plate"
import NavBar from "./components/NavBar"
export default function App() {
  useEffect(() => {
    Aos.init({
        // offset: 200,
        duration: 600,
        // easing: 'ease-in-sine',
        // delay: 100,
    });
}, [])
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/all-plates" exact element={<h1>hi</h1>}/>
          <Route path="/dish/:type" element={<Dish/>}/>
          <Route path="/:id" element={<Plate/>}/>
        </Routes>
    </BrowserRouter>
  )
}