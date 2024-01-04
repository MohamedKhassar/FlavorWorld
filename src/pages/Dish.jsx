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
        <div className=" m-14 text-center" data-aos="fade-up">
            <div className='w-full flex items-center justify-center flex-col gap-2 mb-4 mt-28'>
                <h1 className="text-6xl  text-center capitalize">{dish} plates</h1>
                <hr className="border border-blue-950 w-full" />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[80px]">
                {dishData.map(data =>
                    <Link to={`/${data.id}`} key={data.id}>
                        <div className="rounded-md w-96 flex flex-col gap-y-5 bg-[#FFF6E2] p-5 shadow-md hover:scale-105 transition-all duration-300 hover:cursor-pointer">
                            <img src={data.image} alt="" className="w-96 h-60 object-cover rounded-md" />
                            <p className="capitalize text-start"><b>name : </b>{data.name}</p>
                            <p className="capitalize text-start"><b>category : </b>{data.dishType}</p>
                            <p className="capitalize text-start"><b>description :<br /><br /> </b>{data.desc}</p>
                        </div>
                    </Link>
                ).reverse()}
            </div>
        </div>
    );
}

export default Dish;
