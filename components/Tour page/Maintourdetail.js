import React from "react";

const Maintourdetail = () => {
  return (
    <>
    <div className="mt-7 flex flex-col px-8 shadow-lg ">
        <h1 className="pt-4 text-2xl font-bold text-blue-900">Enquiry About Us</h1>
        <p className="py-3 text-lg">Any Tour Related Issue? Feel Free To Contact Us.</p>
    </div>
    <div className="p-12">
      <form className=" mt-7 rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white">
        <h1 className="text-2xl font-bold dark:text-black">Send a message</h1>

        <label
          htmlFor="fullname"
          className="text-gray-500 font-light mt-8 dark:text-black"
        >
          Full name<span className="text-red-500 dark:text-black">*</span>
        </label>
        <input
          type="text"
          name="fullname"
          className="bg-transparent border-b border-black py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-white"
        />

        <label
          htmlFor="email"
          className="text-gray-500 font-light mt-4 dark:text-black"
        >
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          className="bg-transparent border-b border-black  py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-white"
        />

        <label
          htmlFor="subject"
          className="text-gray-500 font-light mt-4 dark:text-black"
        >
          Mobile Number<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="Mobile Number"
          className="bg-transparent border-b border-black py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-white"
        />

        <label
          htmlFor="message"
          className="text-gray-500 font-light mt-4 dark:text-black"
        >
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          className="bg-transparent border-b border-black py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-white"
        ></textarea>
        <div className="flex flex-row items-center justify-end">
          <button className=" px-10 mt-8 py-2 bg-[#130F49] text-white font-light rounded-md text-lg flex flex-row items-center">
            Send
          </button>
        </div>
      </form>
      </div>
    </>
  );
};

export default Maintourdetail;
