import React from "react";

const Maintourdetail = () => {
  return (
    <>
    <div className="mt-7 flex flex-col px-8 bg-cyan-400">
        <h1 className="pt-4 text-2xl font-bold text-blue-900">Enquiry About Us</h1>
        <p className="py-3 text-lg">Any Tour Related Issue? Feel Free To Contact Us.</p>
    </div>
      <form className="mt-7 rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500">
        <h1 className="text-2xl font-bold dark:text-gray-50">Send a message</h1>

        <label
          htmlFor="fullname"
          className="text-gray-500 font-light mt-8 dark:text-gray-50"
        >
          Full name<span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
          type="text"
          name="fullname"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
        />

        <label
          htmlFor="email"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
        />

        <label
          htmlFor="subject"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          Subject<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
        />

        <label
          htmlFor="message"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
        ></textarea>
        <div className="flex flex-row items-center justify-start">
          <button className=" px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default Maintourdetail;
