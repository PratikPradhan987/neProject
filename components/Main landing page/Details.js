import React from "react";
import Link from "next/link";
const Details = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* <div className="flex flex-col w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className=" text-xs lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div> */}
          <div className="flex flex-wrap -m-4">
            <Link href="/tour">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="cursor-pointer bg-gray-100 p-6 rounded-lg">

                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Tour
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Chichen Itza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            </Link>
            <Link href="/bike">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="cursor-pointer bg-gray-100 p-6 rounded-lg">

                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Bike Rentals
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Colosseum Roma
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>            
            </Link>
            <Link href="/cab">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="cursor-pointer bg-gray-100 p-6 rounded-lg">

                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Cab Rentals
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Great Pyramid of Giza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>            
            </Link>
            <Link href="/tour">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="cursor-pointer bg-gray-100 p-6 rounded-lg">

                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Others
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>            
            </Link>

          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
