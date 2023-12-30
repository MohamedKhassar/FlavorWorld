import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [lastBtn,setBtn]=useState(null)
    const handelClick = (e) => {
        if (lastBtn == null) {
        
            setBtn(e)
            e.target.classList.add("bg-slate-600")
            e.target.classList.add("text-white")
        } else {
            lastBtn.target.classList.remove("bg-slate-600")
            lastBtn.target.classList.remove("text-white")
            e.target.classList.add("bg-slate-600")
            e.target.classList.add("text-white")
            setBtn(e)
        }
    }

    return (
        <div className="text-xl transition-all duration-300 px-14 flex justify-between items-center top-0 bg-[rgb(255,242,213,.7)] w-full fixed p-2 z-10 h-min">
            <Link to="/"><img src="/img/logo.png" className="w-20" alt="" /></Link>
            <div className="flex gap-x-11">
                <Link to="/all-plates"><div className="first-letter:capitalize transition-all duration-300 p-2 hover:bg-slate-600 hover:text-white rounded"  onClick={handelClick}>all the plates</div></Link>
                <Link to="/"><div className="first-letter:capitalize transition-all duration-300 p-2 hover:bg-slate-600 hover:text-white rounded"  onClick={handelClick}>by category</div></Link>
            </div>
            <div>
                <button className="first-letter:capitalize transition-all duration-300 p-3 w-16 hover:bg-slate-600 hover:text-white rounded">add</button>
            </div>
        </div>
    );
}

export default NavBar;
