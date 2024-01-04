import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetPlates = () => {
    const [plates, setPlates] = useState([])

    useEffect(() => {
        const getAllPlates = async () => {
            try {
                await axios.get("http://localhost:3000/recipes").then(res => setPlates(res.data))
            } catch (error) {
                console.log(error);
            }
        }
        getAllPlates()
    },[])

    return (
        <div className="m-14 text-center" data-aos="fade-up">
            <div className='w-fit flex flex-col gap-2 my-28'>
                <h1 className="text-4xl capitalize">all plates</h1>
                <hr className="border border-blue-950 w-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-8">
                {plates.map(p =>
                    <Link to={`/${p.id}`} key={p.id}>
                        <div className="rounded-md w-full h-full flex flex-col gap-y-5 bg-[#FFF6E2] p-5 shadow-md hover:scale-105 transition-all duration-300 hover:cursor-pointer">
                            <img src={p.image} alt="" className="w-full h-60 object-cover rounded-md" />
                            <p className="capitalize text-start"><b>name : </b>{p.name}</p>
                            <p className="capitalize text-start"><b>category : </b>{p.dishType}</p>
                            <p className="capitalize text-start"><b>description :<br /><br /> </b>{p.desc}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default GetPlates;
