const Home = () => {
    return (
        <div className="flex justify-center">
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
                <div className="overflow-hidden rounded-lg h-fit p-8 cursor-pointer w-min shadow-md shadow-slate-400 bg-[url('/img/bg.jpg')] bg-cover hover:scale-110 transition-all delay-100">
                    <div className="w-24">
                        <img src="/img/Dessert.png" alt="" />
                    </div>
                    <p className="text-nowrap font-bold text-slate-800">dessert</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
