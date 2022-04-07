import React from "react";

const Doc = () => {
  return (
    <>
      <div className="pt-4 text-2xl sm:text-6xl font-bold text-center sm:mt-8">
        DOCUMENTS REQUIRED
      </div>
      <div className="flex justify-center">
      <div className=" p-2">
          <img
            className="sm:w-24 sm:h-24 h-16 w-16 rounded-full m-8"
            src="https://cdn-icons.flaticon.com/png/512/2045/premium/2045515.png?token=exp=1648834470~hmac=bb51aa9e265c8ca0947d42a052fa53e0"
          />
          <span className="sm:p-6 text-sm">Passport-size photographs (2nos)</span>
        </div>

        <div className=" p-2">
          <img
            className="sm:w-24 sm:h-24 h-16 w-16 rounded-full m-8"
            src="https://cdn-icons.flaticon.com/png/512/2466/premium/2466341.png?token=exp=1648834418~hmac=209e1b54bd588194c433944d36f1c1ca"
          />
          <span className="sm:p-6 text-sm">Driving License (not required for co-rider)</span>
        </div>

        <div className=" p-2">
          <img
            className="sm:w-24 sm:h-24 h-16 w-16 rounded-full m-8"
            src="https://cdn-icons-png.flaticon.com/512/888/888034.png"
          />
          <span className="sm:p-6 text-sm">Voter's ID card, Aadhar card, or Passport</span>
        </div>
      </div>
      <h2 className="pt-4 text-2xl font-bold text-center mt-28">
        TRAVEL WITH NO TROUBLE
      </h2>
    </>
  );
};

export default Doc;
