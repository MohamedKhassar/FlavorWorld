import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Edit() {
    // const nav = useNavigate();
    const { id } = useParams();
    // console.log(id);
    const [isLoading, setIsLoading] = useState()
    const [uplate, setUplate] = useState({
        image: "",
        name: '',
        ingredients: [],
        instructions: []
    })
    const updatePlates = async() => {
       await axios.put(`http://localhost:3000/recipes/${id}`,uplate.image)
            .then(response => {
                console.log('Le plat a été mis à jour avec succès !');
                console.log(response.data); // Afficher la réponse du serveur si nécessaire
                
            })
            .catch(error => {
                console.error('Une erreur s\'est produite lors de la mise à jour de le plat :', error);
            });
    };
    useEffect(() => {
        axios.get(`http://localhost:3000/recipes/${id}`)
            .then(response => {
                setUplate(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [id])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUplate({
            ...uplate,
            [name]: value.split('\n')
        });
    };

    const uploadImages = async (e) => {
        // alert("")
        setIsLoading(true)
        try {

            const formData = new FormData()
            formData.append("file", e.target.files.item(0))
            formData.append("upload_preset", "fpjad1ud")
            await axios.post("https://api.cloudinary.com/v1_1/dhlxoefrk/image/upload", formData).then(res => setUplate({ ...uplate, image: res.data.secure_url }))
            
            setIsLoading(false)
            console.log(uplate.image);
        }

        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="mt-28 bg-gray-300 p-8 gap-3 w-[50rem] rounded-lg">
                    <div className="grid justify-center rounded">
                        <label htmlFor="image"> <img src={uplate.image} className="w-44 object-cover" alt="" /></label>
                        <input type="file" name="" id="image" className="hidden" onChange={(e) => uploadImages(e)} multiple={false} />
                    </div>
                    <div>
                        <label>name:</label><br />
                        <input className="min-w-full border p-2" type="text" value={uplate.name} onChange={(e) => {
                            setUplate({
                                ...uplate,
                                name: e.target.value
                            })
                        }} /><br />
                        <label>Ingredients:</label><br />
                        {uplate.ingredients.map((ing,i) => 
                            <input key={i} type="text" value={ing} onChange={handleChange}/>
                            )    }
                        
                        <label>instructions:</label><br />
                        <textarea className="min-w-full border p-2" type="text" value={uplate.instructions} onChange={handleChange} />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className={`first-letter:capitalize transition-all duration-300 p-3 hover:bg-slate-600 bg-slate-500 hover:text-white rounded ${isLoading&&"cursor-wait"}`} disabled={isLoading&&true} onClick={updatePlates}>Update</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Edit;