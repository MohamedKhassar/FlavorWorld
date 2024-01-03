import { BrowserRouter , Routes , Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import UploadImg from "./pages/UploadImg"
export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/upload" element={<UploadImg/>}/>
        </Routes>
    </BrowserRouter>
  )
}