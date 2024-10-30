import { React } from "react";



const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
        <div className="h-full flex justify-center items-center p-4">
          <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4 lg:pr-36">
              <h1 className="text-5xl font-bold uppercase">Orbite The Earth</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem eum reiciendis ut porro voluptas? Magnam, vitae cupiditate voluptates ut maiores a itaque neque error quae nostrum necessitatibus obcaecati id.
              </p>
              <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200">Learn More</button>
            </div>
          </div>
        </div>
    </div>
  )
};

export default Hero;