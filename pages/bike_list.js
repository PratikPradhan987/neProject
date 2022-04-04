import React from "react";
import Link from "next/link";
import Practice from "../practice";

const Bike_list = () => {
  return (
    <>
      <section>
        <div className=" container flex flex-wrap  ">
          <Practice />
          <Practice />
          <Practice />
          <Practice />
          <Practice />
        </div>
      </section>
    </>
  );
};

export default Bike_list;
