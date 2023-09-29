import React from "react";
import figma from "./figmatech.jpg";

function Navbar() {
  
  return (
    <div className="flex justify-between mx-5 md:justify-evenly md:mx-0 align-center items-center text-white py-4">
      <div><img src={figma} className="w-15 h-10"/></div>
      <div className="hidden md:flex text-xs  justify-center space-x-4 py-4 text-gray-400 ">
        <div>Solutions</div>
        <div>Services</div>
        <div>About</div>
        <div>Culture</div>
      </div>
      <div className="hidden align-center md:flex space-x-1">
        <button className="py-2 px-4 flex-grow bg-neutral-800  rounded-3xl hover:bg-neutral-900 text-sm"> Contact us</button>
        <button>
          <span className="material-symbols-outlined px-3 py-2.5 rounded-3xl bg-neutral-800 text-sm hover:bg-neutral-900">arrow_forward</span>
        </button>
      </div>

      
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-1 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center md:hidden" type="button"> <span className="material-symbols-outlined" onClick={()=>{alert("Refresh to see footer resposivity get fixed")}}>
menu
</span>
</button>


<div className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
      <ul className="py-1" aria-labelledby="dropdown">
        <li>
            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Solutions</a>
        </li>
        <li>
            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Services</a>
        </li>
        <li>
            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">About</a>
        </li>
        <li>
            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Culture</a>
        </li>
        </ul>
    </div>
    </div>
  );
}

export default Navbar;
