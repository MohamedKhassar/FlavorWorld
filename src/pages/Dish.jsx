import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Dish = () => {
    const dish = useParams().type
    const [dishData, setData] = useState([])
    useEffect(() => {
        const getOne = async () => {
            try {

                const res = await axios.get(`http://localhost:3000/recipes?dishType=${dish}`)
                setData(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getOne()
    }, [dish])

    return (
        <div className="container m-32 flex gap-12 flex-col text-center" data-aos="fade-up">
            <div className='w-fit flex flex-col gap-2'>
                <h1 className="text-4xl capitalize">{dish} plates</h1>
                <hr className="border border-blue-950 w-full" />
            </div>
            {dishData.map((data, i) =>
                <div key={i} className='w-[200px] h-min cursor-pointer hover:scale-105 transition-all bg-[#FFF6E2] rounded-lg shadow-slate-500 shadow flex flex-col gap-y-12'>
                    <img src={data.image} className='w-56 h-56 rounded-t-lg' alt="" />
                    <div className='flex flex-col gap-10 p-8 w-max'>
                        <h1 className='text-3xl text-start'>{data.name}</h1>
                        <p className=''>{data.instructions.slice(0, 1).map((ins, i) =>
                            <>
                                <li className='text-center' key={i}>{ins}</li>
                                <Link to={`/${data.id}`}>
                                    <li className='w-fit list-none mt-3 text-white p-2 bg-slate-600 rounded-md' >
                                        {data.instructions.length > 1 ? "Read more" : ""}
                                    </li>
                                </Link>
                            </>
                        )}</p>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Dish;
