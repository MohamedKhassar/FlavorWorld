import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])

    return (
        <div>

            <header className="w-full h-full ">
                <img className="self-stretch h-full" src="https://via.placeholder.com/1400x380" />
                <div data-aos="fade-up" className="absolute top-[300px]">
                    <h1 >Welcome to Flavor World</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum pariatur, cupiditate est sapiente expedita quia assumenda illo aliquid quam sed rerum laborum similique impedit tenetur earum! Sit, odio dolore!
                        Minus sed minima praesentium assumenda, nulla fugit consequuntur, iusto laboriosam cumque odio ex aliquam voluptatum dignissimos quasi perferendis. Laudantium obcaecati non ipsum minima aliquam blanditiis asperiores quo dicta accusamus dolorem.</p>
                </div>
            </header>
            <div className="container m-14 flex justify-center items-center gap-12 flex-col text-center" data-aos="fade-up">
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

        </div>
    )
}

export default Home