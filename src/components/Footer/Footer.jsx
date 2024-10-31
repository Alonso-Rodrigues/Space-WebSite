import { React } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer= () => {
  return (
    <div className="bg-gray-800 text-white px-5">
      <section className="maw-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5">
          {/* First col */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">Be Ready To Grow</h1>
            <p>
              Get Exclusive
              <span className="font-bold">Update</span>
              straigt to your inbox
            </p>
            <br/>
           <div className="flex items-center h-10">
             <input type="text" className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 bg-gray-800 border-gray-200 border-2 rounded-md" placeholder="email"/>
             <button className="primary-button mx-2">OK</button>
           </div>
          </div>
          {/* Second col */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li href="#">Home</li>
                  <li href="#">About</li>
                  <li href="#">Services</li>
                  <li href="#">Login</li>
                </ul>
              </div>
            </div>
            <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li href="#">Home</li>
                  <li href="#">About</li>
                  <li href="#">Services</li>
                  <li href="#">Login</li>
                </ul>
            </div>
            <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Contact Us</h1>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <HiLocationMarker/>
                    <p>Metz, France</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <MdMessage/>
                    <p>spacenews@gmail.com</p>
                  </div>
                   <div className="flex items-center gap-3 mt-3">
                    <MdCall/>
                    <p>+33 01 02 03 04 05</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom section */}
        <div className="hidden sm:block">
          <div className="flex justify-between items-center py-6 border-t-2 border-gray-400">
            <span className="text-sm text-gray-400">
              Copyright © 2024 by Space News
            </span>
            <div className="flex items-center justify-items-center gap-4 mb-4">
              <a href="#">
                <FaInstagram className="text-4xl"/>
              </a>
                <a href="#">
                <FaFacebook className="text-4xl"/>
              </a>
                <a href="#">
                <FaLinkedin className="text-4xl"/>
              </a>
            </div>
            <span className="text-sm text-gray-400">
              <ul className="flex gap-3">
                <li>Privacy policy</li>
                <li>Terms & Condictions</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Footer;