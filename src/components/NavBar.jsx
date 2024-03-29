import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaXmark , FaBars } from "react-icons/fa6";

const NavBar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [lastBtn, setBtn] = useState(null)
    const [isHidden, setIsHidden] = useState(false)
    const [isDisplay, setIsDisplay] = useState(false)
    const [isLoading,setIsLoading]=useState(false)
    const [data, setData] = useState({
        dishType: "",
        name: "",
        desc: "",
        image: "",
        ingredients: "",
        instructions: "",

    })
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

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
        setIsHidden(false)
    }


    const uploadImages = async (e) => {
        // alert("")
        setIsLoading(true)
        try {

            const formData = new FormData()
            formData.append("file", e.target.files.item(0))
            formData.append("upload_preset", "fpjad1ud")
            await axios.post("https://api.cloudinary.com/v1_1/dhlxoefrk/image/upload", formData).then(res => setData({ ...data, image: res.data.secure_url }))
            console.log(data.image);
            setIsLoading(false)
        }

        catch (error) {
            console.log(error)
        }
    }


    const handelSave = async (e) => {
        e.preventDefault()
        try {
            if (data.image == "" || data.desc == "" || data.dishType == "" || data.ingredients == "" || data.instructions == "") {

                setIsDisplay(true)
            } else {

                await axios.post("http://localhost:3000/recipes", data).then(setIsHidden(false)).then(setData({
                    dishType: "",
                    name: "",
                    desc: "",
                    image: "",
                    ingredients: "",
                    instructions: "",
                })).then(window.location.reload())

            }

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        Aos.init({
            // offset: 200,
            duration: 200,
            // easing: 'ease-in-sine',
            // delay: 100,
        });
    }, [isHidden])
    return (
        <div className="text-xl transition-all duration-300 px-14 flex justify-between items-center top-0 bg-[rgb(255,242,213,.7)] w-full fixed p-2 z-10 h-min">
            <Link to="/"><img src="/img/logo.png" className="w-20" alt="" /></Link>
            <div className="gap-x-11 hidden md:flex ">
                <Link to="/all-plates"><div className="first-letter:capitalize transition-all duration-300 p-2 hover:bg-slate-600 hover:text-white rounded" onClick={handelClick}>all the plates</div></Link>
                <Link to="/"><div className="first-letter:capitalize transition-all duration-300 p-2 hover:bg-slate-600 hover:text-white rounded" onClick={handelClick}>by category</div></Link>
            </div>
            <div>
                <button className="first-letter:capitalize transition-all duration-300 p-3 w-16 hover:bg-slate-600 hover:text-white rounded" onClick={() => setIsHidden(!isHidden)}>add</button>
            </div>

            <div className="md:hidden">
                     <button onClick={toggleMenu} className="text-NeutralDGrey focus:outline-none focus:text-gray-500">
                        {
                            isMenuOpen ? (<FaXmark className="h-6 w-6 "/>) : (<FaBars className="h-6 w-6 "/>)
                        }
                     </button>
                </div>
                <div className={`${isMenuOpen ? "fixed top-[100px] left-0 right-0  text-center block bg-[rgb(255,242,213,.7)]" : "hidden"}`}>
                <Link to="/all-plates"><div className="first-letter:capitalize transition-all duration-300 p-2 hover:bg-slate-600 hover:text-white rounded" onClick={handelClick}>all the plates</div></Link>
                <Link to="/"><div className="first-letter:capitalize transition-all duration-300 p-2 hover:bg-slate-600 hover:text-white rounded" onClick={handelClick}>by category</div></Link>
              </div>    
            <div className={`pb-16 mt-0 absolute top-24  left-0 backdrop-blur-sm bg-black/30 h-screen w-screen ${isHidden == false ? "hidden" : "flex"} flex-col justify-start items-center gap-2`} data-aos="zoom-in">
                <form className="w-[90%] h-[70%] grid grid-cols-1  " >
                    <div className="grid-cols-1 grid h-[90%]">
                        <div className="flex h-[90%]">

                            <div className="w-full">

                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 capitalize outline-none" onChange={(e) => setData({ ...data, dishType: e.target.value })}>
                                    <option >Choose a category</option>
                                    <option defaultValue="appetizer">appetizer</option>
                                    <option defaultValue="main">main course</option>
                                    <option defaultValue="dessert">dessert</option>
                                </select>

                            </div>
                            <div className="w-full">
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900  capitalize">image</label>
                                <input type="file" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  outline-none" placeholder="image" onChange={(e) => uploadImages(e)} multiple={false} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900  capitalize">name</label>
                            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  outline-none" placeholder="Pizza" onChange={(e) => setData({ ...data, name: e.target.value })} />
                        </div>
                        <div className="flex justify-around gap-x-5">
                            <div className="w-full">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                                <textarea id="description" rows="4" className="w-full outline-none block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your a Description here..." onChange={(e) => setData({ ...data, desc: e.target.value })}></textarea>

                            </div>
                            <div className="w-full">
                                <label htmlFor="ingredients" className="block mb-2 text-sm font-medium text-gray-900 ">Ingredients</label>
                                <textarea id="ingredients" rows="4" className="w-full outline-none block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " placeholder="Write your a Ingredients here..." onChange={(e) => setData({ ...data, ingredients: e.target.value.trim().replace(/\r\n/g, "\n").split("\n") })}></textarea>

                            </div>
                        </div>

                        <div>
                            <label htmlFor="instructions" className="block mb-2 text-sm font-medium text-gray-900 ">Instructions</label>
                            <textarea id="instructions" rows="4" className="w-full outline-none block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " placeholder="Write your Instructions here..." onChange={(e) => setData({ ...data, instructions: e.target.value.replace(/\r\n/g, "\n").split("\n") })}></textarea>

                        </div>
                    </div>
                    <div className=" mt-2 grid grid-cols-1 justify-center w-full">
                        <p className={`text-red-700 ${!isDisplay && "hidden"}`}>please fill the fields</p>
                        <button className={`text-white  p-3 bg-green-400 hover:bg-green-700 transition-all rounded-md ${isLoading && "cursor-wait"}`}
                        disabled={isLoading && true}
                            onClick={handelSave}>save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NavBar;
