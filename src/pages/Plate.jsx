import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Plate = () => {
    const id = useParams().id
    const [plate, setPlate] = useState({})
    useEffect(() => {
        const getOne = async () => {
            try {

                const res = await axios.get(`http://localhost:3000/recipes/${id}`)
                setPlate(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getOne()
    }, [id])
    console.log(plate)
    return (
        <div className="my-32 flex" data-aos="fade-up">
            <div className="flex justify-around">
                <img src={plate.image} className="w-1/3 rounded-md h-fit my-14" alt="" />
                <div className="flex flex-col gap-10">
                    <div className="flex justify-center items-center gap-2 flex-col" >
                        <h1 className="text-nowrap text-center text-4xl">{plate.name}</h1>
                        <hr className="border border-blue-950 w-min" />
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
                </div>
            </div>
        </div>
    );
}

export default Plate;
