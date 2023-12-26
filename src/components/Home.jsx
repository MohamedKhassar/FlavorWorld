import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
      
  duration: 1200,
  
});

const Home = () => {
 
  
 
  return (
    <header className="w-full h-full ">
      <img className="self-stretch h-full" src="https://via.placeholder.com/1400x380" />
     <div data-aos="fade-up" className="absolute top-[300px]">
     <h1 >Welcome to Flavor World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum pariatur, cupiditate est sapiente expedita quia assumenda illo aliquid quam sed rerum laborum similique impedit tenetur earum! Sit, odio dolore!
      Minus sed minima praesentium assumenda, nulla fugit consequuntur, iusto laboriosam cumque odio ex aliquam voluptatum dignissimos quasi perferendis. Laudantium obcaecati non ipsum minima aliquam blanditiis asperiores quo dicta accusamus dolorem.</p>
     </div>
    </header>
  )
}

export default Home