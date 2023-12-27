import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Dish = () => {
    const dis = useParams().type
    const [Dishdata,setData]=useState()
    useEffect( () => {
        const getOne =async () => {
            try {
                
                const res = await axios.get(`http://localhost:3000/recipes?dishType=${dis}`)
                setData(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getOne()
    },[dis])
    console.log(Dishdata);
    return (
        <div className="container m-14 flex justify-center items-center gap-12 flex-col text-center" data-aos="fade-up">
        <div className="flex justify-center items-center gap-2 flex-col">
                <h1 className="text-4xl capitalize">{dis} plates</h1>
                <hr className="border border-blue-950 w-full" />
        </div>
        </div>
    );
}

export default Dish;
