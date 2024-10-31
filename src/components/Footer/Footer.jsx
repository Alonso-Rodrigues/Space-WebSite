import { React } from "react";

const Footer= () => {
  return (
    <div className="bg-gray-800 text-white">
      <section className="maw-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5">
          {/* first col */}
          <div>
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">Be Ready To Go</h1>
            <p>
              Get Exclusive
              <span className="font-bold">
                Update
              </span>
              straigt to your inbox
            </p>
            <br/>
           <div className="flex items-center h-10">
             <input type="text" className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 bg-gray-800 border-gray-200 border-2 rounded-md" placeholder="email"/>
             <button className="primary-button mx-2">OK</button>
           </div>
          </div>
          {/* second col */}
        </div>
      </section>
    </div>
  )
};

export default Footer;