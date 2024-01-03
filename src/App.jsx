import { BrowserRouter , Routes , Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Dish from "./pages/Dish"
import { useEffect } from "react"
import Aos from "aos"
import Plate from "./pages/Plate"
import NavBar from "./components/NavBar"
import GetPlates from "./pages/GetPlates"
import Edit from "./pages/Edit"
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
          <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}