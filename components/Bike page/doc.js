import React from "react";

const Doc = () => {
  return (
    <>
    <div className="flex mt-6 justify-center">
        <div className="w-5/6 h-1 rounded-full bg-black inline-flex"></div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-11 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Documents Required
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Unlike the neighboring state of West Bengal where Darjeeling is
              located, Sikkim has certain entry restrictions. In fact the whole
              of Sikkim is under restricted area regime due to its proximity to
              neighboring countries like China, Nepal and Bhutan.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src="https://cdn-icons-png.flaticon.com/512/4299/4299685.png"/>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Passport-size photo (2nos)
                </h2>
                
               
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src="https://cdn-icons.flaticon.com/png/512/3012/premium/3012075.png?token=exp=1650456097~hmac=e70b9864ae3a26a81c73ad20451e46a4"/>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Driving License
                </h2>
                
               
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
               <img src="https://cdn-icons-png.flaticon.com/512/1534/1534155.png"/>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Voter ID, Aadhar card or Passport
                </h2>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Doc;
