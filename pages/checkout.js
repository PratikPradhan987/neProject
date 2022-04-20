import React from "react";
import { BsFillBagCheckFill } from 'react-icons/bs';


const chechout = () => {
  return (
    <>
      <section className="w-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Booking Cart
            </h1>
          
          </div>
          <div className="-m-4">
            <div className="p-4 ">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-2xl tracking-widest title-font mb-1 font-medium">
                  Review Cart Items & Pay
                </h2>
                <div className="h-full mt-4 p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                    <ol>
                        <li>
                            <div className="item flex my-5">
                            <div className="w-2/3 text-sm tracking-widest font-medium">Rent Royal Enfield</div>
                            <div className="w-1/3 flex items-center justify-center">  <span>Rs 1</span> </div>
                            </div>
                        </li>
                    </ol>

                </div>
                <button className="flex mt-6 ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"> <BsFillBagCheckFill className="m-1"/> CheckOut</button>

              </div>
              <button className="flex mt-6 ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"> Clear Cart</button>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default chechout;
