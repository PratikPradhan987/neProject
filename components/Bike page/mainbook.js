import React from "react";
import Link from "next/link";

const Mainbook = () => {
  return (
    <>
      <div className="relative mt-5">
        <img
          className="object-cover w-full object-center sm:h-96 h-40"
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        />
        <div className="absolute box-content">
          <Link href="/bike_list">
            <a>
              <button className=" bg-[#130F49] px-10 py-4 text-6xl font-bold text-center my-8  text-gray-50 border-black border rounded-md m-8">
                Book Now
              </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Mainbook;
