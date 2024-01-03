import axios from "axios";
import { useEffect, useState } from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const Plate = () => {
    const id = useParams().id
    const [plate, setPlate] = useState({})
    const nav = useNavigate()
    useEffect(() => {
        const getOne = async () => {
            console.log(id);
            try {

                const res = await axios.get(`http://localhost:3000/recipes/${id}`)
                setPlate(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getOne()
    }, [id])

    const handelDelete = () => {
        const confirmDelete = window.confirm('Are you sure to delete this plate?')
        if (confirmDelete) {
            axios.delete(`http://localhost:3000/recipes/${id}`).then(nav("/all-plates"))
        }
    }

    return (
        <div className="my-32" data-aos="fade-up">
            <div className="flex justify-around">
                <div>
                    <img src={plate.image} className="w-96 object-cover rounded-md h-96 my-14" alt="" />
                    <div>
                        <button className="bg-red-500 hover:bg-red-600 p-2 rounded capitalize" onClick={handelDelete}>
                            delete
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="w-fit grid gap-y-2" >
                        <h1 className="text-nowrap text-center text-4xl font-bold">{plate.name}</h1>
                        <hr className="border border-blue-950 w-full" />
                    </div>

                    <ul className="text-start flex flex-col gap-5">
                        <h1 className="text-2xl">Ingredients : </h1>
                        {plate.ingredients && plate.ingredients.map(ing =>
                            <li className="list-['-'] ml-10" key={plate.id}> {ing}</li>

                        )}
                        <h1 className="text-2xl capitalize">instructions : </h1>
                        {plate.ingredients && plate.instructions.map(ing =>
                            <li className="list-['-'] ml-10 w-[450px] px-1" key={plate.id}>{ing}</li>

                        )}
                    </ul>
                    <Link className="ml-5 first-letter:capitalize transition-all duration-300 p-3 w-50 hover:bg-slate-600 hover:text-white text-center rounded" to={`/edit/${id}`}>Modify</Link>
                </div>
                </div>
        </div>
    );
}

export default Plate;
