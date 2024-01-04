import Home from "./pages/Home"
import Dish from "./pages/Dish"
import Welcome from "./components/Welcome"
import { useEffect } from "react"
import Aos from "aos"
import Plate from "./pages/Plate"
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
            <Welcome />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dish/:type" element={<Dish/>}/>
          <Route path="/:id" element={<Plate/>}/>
        </Routes>
    </BrowserRouter>
  )
}