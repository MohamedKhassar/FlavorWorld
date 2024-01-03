import { useEffect, useState } from 'react'
import UploadImg from "../pages/UploadImg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
const Home = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])
  
    const [ data, setData] = useState([])
  useEffect(() => {
    const GetData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/recipes");
            setData(res.data)  
        } catch (error) {
            console.log(error)
        }
    }
   

    GetData();
    
  
  }, [])

//    const PostData = async () => {
//         try {
//             const recipe = { name: "fruit Salad", dishType: "dessert", };
//             const res = await axios.post("http://localhost:3000/recipes", recipe);
//             setData(res.data)  
//         } catch (error) {
//             console.log(error)
//         }
//     }
    const PutData = async (id) => {
            try {
               
                const recipe = { name: "fruit Salad", dishType: "dessert", };
                const res = await axios.put(`http://localhost:3000/recipes/${id}`, recipe);
                setData(res.data)  
            } catch (error) {
                console.log(error)
            }
        }
        const DeleteData = async (id) => {
            try {
                
                
                const res = await axios.delete(`http://localhost:3000/recipes/${id}`);
                
                const data = data.filter(item => item.id !== id);  

                setData(res.data)  
            } catch (error) {
                console.log(error)
            }
        }    
  
      
    return (
        <div>

            <header className="w-full h-full">
                <img className="w-full h-[400px]" src="" />
                <div data-aos="fade-up" className="absolute top-[150px] font-[Inter] text-center">
                    <h1 className="font-bold" >Welcome to Flavor World</h1>
                    <p className="m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum pariatur, cupiditate est sapiente expedita quia assumenda illo aliquid quam sed rerum laborum similique impedit tenetur earum! Sit, odio dolore!
                        Minus sed minima praesentium assumenda, nulla fugit consequuntur, iusto laboriosam cumque odio ex aliquam voluptatum dignissimos quasi perferendis. Laudantium obcaecati non ipsum minima aliquam blanditiis asperiores quo dicta accusamus dolorem.</p>
                </div>
            </header>

            <div className="m-14 flex justify-center items-center gap-12 flex-col text-center" data-aos="fade-up">
                <div className="flex justify-center items-center gap-2 flex-col" >
                    <h1 className="text-4xl capitalize">recipes by category</h1>
                    <hr className="border border-blue-950 w-full" />
                </div>
                <div className="capitalize flex gap-x-20 items-center">
                    <div className="overflow-hidden rounded-lg h-fit p-8 cursor-pointer w-min shadow-md shadow-slate-400 bg-[url('/img/bg.jpg')] bg-cover hover:scale-110 transition-all delay-100">
                        <div className="w-24">
                            <img src="/img/Appetizer.png" alt="" />
                        </div>
                        <p className="text-nowrap font-bold text-slate-800">appetizer</p>
                    </div>
                    <div className="overflow-hidden rounded-lg h-fit p-8 cursor-pointer w-min shadow-md shadow-slate-400 bg-[url('/img/bg.jpg')] bg-cover hover:scale-110 transition-all delay-100">
                        <div className="w-24">
                            <img src="/img/main_course.png" alt="" />
                        </div>
                        <p className="text-nowrap font-bold text-slate-800">main course</p>
                    </div>
                    <div className="overflow-hidden rounded-lg h-fit p-8 cursor-pointer w-min shadow-md shadow-slate-400 bg-[url('/img/bg.jpg')] bg-cover hover:scale-110 transition-all delay-100 text-center">
                        <div className="w-24">
                            <img src="/img/Dessert.png" alt="" />
                        </div>
                        <p className="text-nowrap font-bold text-slate-800">dessert</p>
                    </div>
                </div>
            </div>
                 <div>
                    
                    

                    
                </div>

                <section className="grid grid-cols-2 gap-4 m-4">
                {data.map(data => 
                <div key={data.id} className="bg-slate-300 p-4">
                <h1 className="text-center font-bold font-[Inter] bg-gray-400 text-white">{data.name}</h1>
                <p className="text-center">{data.dishType}</p>
                <img src={data.image} />
                <h4 className=" text-pink-300 text-center">Description</h4>
                <p className=" text-justify font-[Inter] p-2">{data.desc}</p>
                <h4 className=" text-blue-700 text-center">Ingrediants</h4>
                <p className=" text-justify font-[Inter] p-2">{data.ingredients}</p>
                <h4 className=" text-lime-700 text-center">Instructions</h4>
                <p className="font-[Inter]">{data.instructions}</p>
                <div className="flex flex-row justify-center">
                    <button className="bg-blue-400 p-4 m-2 rounded-md" onClick={PutData(data.id)} >Update</button>
                    <button className="bg-red-400 p-4 m-2 rounded-md" onClick={DeleteData(data.id)}>Delete</button>
                 </div>
                </div>
                )} 
                    
                  
                    
                </section> 
                <UploadImg/>
        </div>
    )
}

export default Home