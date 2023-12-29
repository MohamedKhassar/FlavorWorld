import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./Components/Home"
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="*" element ={<h1>page not Found</h1>}/>
      </Routes>
   </BrowserRouter>
  )
}