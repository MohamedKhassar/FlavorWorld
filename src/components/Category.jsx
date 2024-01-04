import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="container m-14 flex justify-center items-center gap-12 flex-col text-center" data-aos="fade-up">
            <div className="flex justify-center items-center gap-2 flex-col" >
                <h1 className="text-4xl capitalize">recipes by category</h1>
                <hr className="border border-blue-950 w-full" />
            </div>

            <div className="capitalize flex gap-x-20 items-center">
                <Link to="dish/appetizer">
                    <div className="overflow-hidden rounded-lg h-fit p-8 cursor-pointer w-min shadow-md shadow-slate-400 bg-[url('/img/bg.jpg')] bg-cover hover:scale-110 transition-all delay-100">
                        <div className="w-24">
                            <img src="/img/Appetizer.png" alt="" />
                        </div>
                        <p className="text-nowrap font-bold text-slate-800">appetizer</p>
                    </div>
                </Link>
                <Link to="dish/main">
                    <div className="overflow-hidden rounded-lg h-fit p-8 cursor-pointer w-min shadow-md shadow-slate-400 bg-[url('/img/bg.jpg')] bg-cover hover:scale-110 transition-all delay-100">
                        <div className="w-24">
                            <img src="/img/main_course.png" alt="" />
                        </div>
                        <p className="text-nowrap font-bold text-slate-800">main course</p>
                    </div>
                </Link>
                <Link to="dish/dessert">
                    <div className="overflow-hidden rounded-lg h-fit p-8 cursor-pointer w-min shadow-md shadow-slate-400 bg-[url('/img/bg.jpg')] bg-cover hover:scale-110 transition-all delay-100 text-center">
                        <div className="w-24">
                            <img src="/img/Dessert.png" alt="" />
                        </div>
                        <p className="text-nowrap font-bold text-slate-800">dessert</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Category;
