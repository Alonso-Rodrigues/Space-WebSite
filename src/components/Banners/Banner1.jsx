import { React } from "react";
import sateliteImg from "../../assets/img/satelite1.jpg";

const Banner1= () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img src={sateliteImg} alt="" />
          </div>
          <div className="space-y-3 xl:36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
            <p className="text-sky-800 uppercase">Our mission</p>
            <h1 className="uppercase text-5xl">Rapidcast</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores, neque quas hic qui earum illum quod! Voluptate error nulla et est magnam, necessitatibus facilis totam officiis a modi nam.</p>
            <button className="primary-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Banner1;