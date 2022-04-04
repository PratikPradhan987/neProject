import React from "react";

const Bikead = () => {
  return (
    <div>
      <div className="pt-4 text-6xl font-bold text-center my-8">OUR RIDE</div>
      <div className="flex justify-center mb-32">
        <img
          className="object-scale-down h-48 w-96 border-black border rounded-full m-8"
          src="https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/classic-350/colors/studio-shots/dual-channel/dark-stealth-black/01-dark-stealth-black.png"
        />
        <img
          className="object-scale-down h-48 w-96 border-black border rounded-full m-8"
          src="https://www.royalenfield.com/content/dam/royal-enfield/australia/motorcycles/meteor/colours/studio-shots/fireball-yellow/01-yellow.png"
        />
        <img
          className="object-scale-down h-48 w-96 border-black border rounded-full m-8"
          src="https://www.roadracingworld.com/wp-content/uploads/2021/11/Royal-Enfield-SG650_concept_studio_0001_1637708303-e1637708420101.jpg"
        />
      </div>
    </div>
  );
};

export default Bikead;
