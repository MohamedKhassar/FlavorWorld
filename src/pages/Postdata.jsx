import React , {useState} from 'react'
import axios from 'axios';


export default function Postdata() {
    const [data, setData] = useState({
        dishType: "",
        name: "",
        desc: "",
        image: "",
        ingredients: "",
        instructions: "",

    })
    const [isHidden, setIsHidden] = useState(false)
    const [uploadImage, setUploadImage] = useState()
    const handleSave = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append("file", uploadImage)
            formData.append("upload_preset", "osag4mph")
            console.log(formData);
            await axios.post("https://api.cloudinary.com/v1_1/dpklloyz5/image/upload", formData).then(res => setData({ ...data, image: res.data.secure_url }))


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
  return (
    <section className="bg-blue-100 m-4 p-6">
    <form className="w-full" >
        <div className="grid grid-cols-2 gap-5">
            <div>

                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 capitalize outline-none" onChange={(e) => setData({ ...data, dishType: e.target.value })}>
                    <option disabled>Choose a category</option>
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
        <button className="mt-5 p-3 text-white bg-green-700 hover:bg-green-800 transition-all w-full rounded-md" onClick={handleSave} >save</button>
    </form>
    </section>
  )
}
