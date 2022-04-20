import React from "react";
import { BsFillBagCheckFill } from 'react-icons/bs';


const orderhistory = () => {
  return (
    <>
      <section className="w-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Your Orders
            </h1>
          
          </div>
          <div className="-m-4">
            <div className="p-4 ">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-2xl tracking-widest title-font mb-1 font-medium">
                  Recent Orders
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

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default orderhistory;
