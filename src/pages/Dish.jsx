import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Dish = () => {
    const dis = useParams().type
    const [dishData, setData] = useState([])
    useEffect(() => {
        const getOne = async () => {
            try {

                const res = await axios.get(`http://localhost:3000/recipes?dishType=${dis}`)
                setData(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getOne()
    }, [dis])
    return (
        <div className="container m-20 flex gap-12 flex-col text-center" data-aos="fade-up">
            <div className='w-fit flex flex-col gap-2'>
                <h1 className="text-4xl capitalize">{dis} plates</h1>
                <hr className="border border-blue-950 w-full" />
            </div>
            {dishData.map(data =>
                <div key={data.id} className='w-[900px] cursor-pointer hover:scale-105 transition-all bg-yellow-100 rounded-lg shadow-md shadow-black flex gap-x-12'>
                    <img src={data.image} className='w-56 h-56 rounded-l-lg' alt="" />
                    <div className='flex flex-col gap-10 p-8 w-max'>
                        <h1 className='text-3xl text-start'>{ data.name}</h1>
                        <p>{data.instructions.slice(0, 1).map((ins, i) =>
                            <><li className='text-justify' key={i}>{ins}</li><Link to={`/${data.id}`}>sads</Link></>
                        )}</p>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Dish;
