import React from "react";
import img from "../../assets/common/helpandsupport.png";
const WeAreAvailable = () => {
  return (
    <>
      <div
        className="w-fit px-6 mt-4 rounded-lg"
        style={{ backgroundColor: "#1A5276" }}
      >
        <div className="grid grid-cols-2 gap-6 items-center ">
          <div>
            <h1 className="text-white font-outfit text-2xl">
              Do you have any questions?
            </h1>
            <h1 className="text-white font-outfit text-4xl font-bold mt-2">
              We are ready for you
            </h1>
            <h1 className="text-white font-outfit text-4xl font-bold">
              7 days a week!
            </h1>
            <p className="text-gray-300 text-sm font-firaSans mt-1">
              Would you like to know more about our services? We are happy to
              provide advice on how your company can grow even more!
            </p>
            <div className="flex gap-3 items-center mt-6">
              <i class="ri-phone-fill text-white text-2xl"></i>
              <a className="text-white text-lg" href="#">
                Call: +31 516 15616 518
              </a>
            </div>
            <p className="text-gray-300">We are available 24/7</p>
          </div>
          <div className="block mx-auto ">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeAreAvailable;
