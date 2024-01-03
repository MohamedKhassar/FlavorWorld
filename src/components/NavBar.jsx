import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const [lastBtn, setBtn] = useState(null)
    const [isHidden, setIsHidden] = useState(false)
    const [uploadImage, setUploadImage] = useState()
    const nav = useNavigate()
    const [data, setData] = useState({
        dishType: "",
        name: "",
        desc: "",
        image: "",
        ingredients: "",
        instructions: "",

    })


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



    const handelSave = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append("file", uploadImage)
            formData.append("upload_preset", "fpjad1ud")
            console.log(formData);
            await axios.post("https://api.cloudinary.com/v1_1/dhlxoefrk/image/upload", formData).then(res => setData({ ...data, image: res.data.secure_url }))


        } catch (error) {
            console.log(error);
        }
        if (data.image) {
            try {
                await axios.post("http://localhost:3000/recipes", data).then(setIsHidden(false)).then(setData({
                    dishType: "",
                    name: "",
                    desc: "",
                    image: "",
                    ingredients: "",
                    instructions: "",
                }))
            } catch (error) {
                console.log(error)
            }
        }
    }

    console.log(data);

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
            <div className="flex gap-x-11">
                <Link to="/all-plates"><div className="first-letter:capitalize transition-all duration-300 p-2 hover:bg-slate-600 hover:text-white rounded" onClick={handelClick}>all the plates</div></Link>
                <Link to="/"><div className="first-letter:capitalize transition-all duration-300 p-2 hover:bg-slate-600 hover:text-white rounded" onClick={handelClick}>by category</div></Link>
            </div>
            <div>
                <button className="first-letter:capitalize transition-all duration-300 p-3 w-16 hover:bg-slate-600 hover:text-white rounded" onClick={() => setIsHidden(!isHidden)}>add</button>
            </div>
            <div className={`pb-16 absolute top-24 left-0 backdrop-blur-sm bg-black/30 h-screen w-screen ${isHidden == false ? "hidden" : "flex"} flex-col justify-center items-center gap-10`} data-aos="zoom-in">
                <form className="w-1/2" >
                    <div className="grid grid-cols-1 gap-y-3">
                        <div>

                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 capitalize outline-none" onChange={(e) => setData({ ...data, dishType: e.target.value })}>
                                <option >Choose a category</option>
                                <option defaultValue="appetizer">appetizer</option>
                                <option defaultValue="main">main course</option>
                                <option defaultValue="dessert">dessert</option>
                            </select>

                        </div>
                        <div>
                            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900  capitalize">image</label>
                            <input type="file" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  outline-none" placeholder="image" onChange={(e) => setUploadImage(e.target.files.item(0))} multiple={false} />
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900  capitalize">name</label>
                            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  outline-none" placeholder="Pizza" onChange={(e) => setData({ ...data, name: e.target.value })} />
                        </div>

                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                            <textarea id="description" rows="4" className="w-full outline-none block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " placeholder="Write your a Description here..." onChange={(e) => setData({ ...data, desc: e.target.value })}></textarea>

                        </div>
                        <div>
                            <label htmlFor="ingredients" className="block mb-2 text-sm font-medium text-gray-900 ">Ingredients</label>
                            <textarea id="ingredients" rows="4" className="w-full outline-none block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " placeholder="Write your a Ingredients here..." onChange={(e) => setData({ ...data, ingredients: e.target.value.trim().replace(/\r\n/g, "\n").split("\n") })}></textarea>

                        </div>
                        <div>
                            <label htmlFor="instructions" className="block mb-2 text-sm font-medium text-gray-900 ">Instructions</label>
                            <textarea id="instructions" rows="4" className="w-full outline-none block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " placeholder="Write your Instructions here..." onChange={(e) => setData({ ...data, instructions: e.target.value.replace(/\r\n/g, "\n").split("\n") })}></textarea>

                        </div>
                    </div>
                    <button className="mt-5 p-3 bg-green-700 hover:bg-green-800 transition-all w-fit rounded-md" onClick={handelSave}>save</button>
                </form>
            </div>
        </div>
    );
}

export default NavBar;