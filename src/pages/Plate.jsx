import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Plate = () => {
    const id = useParams().id
    const [plate,setPlate]=useState({})
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
        <div className="container flex gap-12 flex-col text-center" data-aos="fade-up">
            <div>
                <img src={plate.image} className="w-16" alt="" />
            </div>
        </div>
    );
}

export default Plate;
