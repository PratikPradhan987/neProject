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

              <div className="cursor-pointer h-full text-center bg-gray-100 p-6 rounded-lg">
              <img className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/512/854/854894.png"/>
                <h3 className="text-lg   mb-4 tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Tour
                </h3>       
                <p className="leading-relaxed text-base">
                If you are already in Sikkim and wondering what else you can do apart from the regular sightseeing, attend the folk dance performance by locals. You will be delighted at the charm of vibrant Sikkimese diversity. Sikkim culture is also mirrored in the drama performances and the locals are very friendly and accepting and will make you feel welcomed.
                </p>
              </div>
            </div>
            </Link>
            <Link href="/bike">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="cursor-pointer h-full text-center bg-gray-100 p-6 rounded-lg">
            <img className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/512/7210/7210696.png"/>
            <h3 className="text-lg   mb-4 tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Bike Rentals
                </h3>
                <p className="leading-relaxed text-base">
                Bike rental in gangtok can be the best option for explore the mountain trails in Sikkim. Bike rental in Gangtok are on top of the list among youths nowadays, especially when it comes to exploring curvy hilly roads of the North East part of India.
                </p>
              </div>
            </div>            
            </Link>
            <Link href="/cab">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="cursor-pointer h-full text-center bg-gray-100 p-6 rounded-lg">
            <img className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons.flaticon.com/png/512/3393/premium/3393345.png?token=exp=1650459793~hmac=f85e203071ef94326f8aa4d202bf71bd"/>
            <h3 className="text-lg   mb-4 tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Cab Rentals
                </h3>
                <p className="leading-relaxed text-base">
                Many travelers choose to rent a car in Sikkim, as it is the best mode of transport for covering short or long distances, allowing plenty of freedom and more flexibility to explore unique landscapes. There are plenty of iconic routes that serve as road trip destinations and allow people to visit several places.
                </p>
              </div>
            </div>            
            </Link>
            <Link href="/other">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="cursor-pointer h-full text-center bg-gray-100 p-6 rounded-lg">
            <img className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons.flaticon.com/png/512/2661/premium/2661418.png?token=exp=1650459842~hmac=a4cfca3f58a9d6aaf6166a8d4b1347fa"/>
            <h3 className="text-lg   mb-4 tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Others
                </h3>
                <p className="leading-relaxed text-base">
                  While visiting Sikkim prepare yourself for various adventures such as River Rafting Experience in Teesta, Paragliding and Hang Gliding-the World from Above, Trekking-an Enthusiastic Adventure for Adrenaline Junkie, Mountaineering-mount up like an Eagle, Helicopter Ride-get an aerial view of Sikkim and Yak Safari to the winning Mountainous range of Sikkim.

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
