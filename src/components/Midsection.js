import React from "react";

function Midsection() {
  return (
    <div className=" flex lg:justify-around justify-center items-center my-24 flex-col lg:flex-row mx-10
    ">
      <div className="text-white text-4xl max-w-[450px] mb-10 ">
        <p className="text-white text-4xl max-w-[450px] mb-6 font-light">
          Searching for <b> Augmented Development </b> Teams To steer your
          product
          <br /> towards triumph ?"
        </p>
        <div className="flex sm:justify-between sm:flex-row flex-col justify-center">
          <span>
            50+ <p className="text-xs text-gray-300">Clients</p>
          </span>
          <span>
            80+
            <p className="text-xs text-gray-300">
              Projects succesfully 
              <br /> Completed
            </p>
          </span>

          <span>
            60%{" "}
            <p className="text-xs text-gray-300">
              of the clients converted  into
              <br /> long time engagement partners
            </p>
          </span>
        </div>
      </div>
      <form className=" flex justify-center flex-col py-8 px-6 bg-gray-300   min-w-[300px] lg:min-w-[500px] rounded-xl    ">
        <h1 className="text-xl font-semibold">Fill Out the form.</h1>
        <h2 className="">Our team will touch base with you within 24 hours</h2>
        <div className="flex xs:flex-row xs:space-x-3 space-x-0 my-2 text-black font-thin space-y-4 flex-col">
          <input
            placeholder="First Name"
            className="placeholder:text-black placeholder:font-thin border-b-2  border-black   bg-gray-300 appearance-none outline-0 "
          />
          <input
            placeholder="Last Name"
            className="placeholder:text-black placeholder:font-thin border-b-2  border-black text-black  bg-gray-300 appearance-none outline-0"
          />
        </div>

        <div className="flex xs:flex-row xs:space-x-3 space-x-0 mt-2 text-black font-thin  space-y-4 flex-col">
          <input
            placeholder="Country"
            className="border-b-2 border-black   bg-gray-300 appearance-none outline-0 placeholder:text-black placeholder:font-thin"
          />
          <input
            placeholder="Contact Number"
            className="placeholder:text-black placeholder:font-thin border-b-2 border-black   bg-gray-300 appearance-none  outline-0"
          />
        </div>
        <input
          className="border-b-2 border-black px-1  bg-gray-300 appearance-none outline-0 mt-6 placeholder:text-black placeholder:font-thin max-w-[370px]"
          placeholder="Tell us something about yourself"
        />
        <div class="flex justify-between mt-5">
          <div className="align-center flex space-x-1 text-white">
            <button className="py-2 px-4 flex-grow bg-neutral-800  rounded-3xl  hover:bg-neutral-900 ">
              {" "}
              Contact us
            </button>
            <button>
              <span className="material-symbols-outlined px-3 py-2.5 rounded-3xl bg-neutral-800 text-sm hover:bg-neutral-900">
                arrow_forward
              </span>
            </button>
          </div>

          <div></div>
        </div>
      </form>
    </div>
  );
}

export default Midsection;
