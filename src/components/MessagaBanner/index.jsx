import React from "react";
import img from "../../assets/common/mesgbannergirl.png";
import Styles from "./messagebanner.module.css";
import Buttons from "../Buttons";
const MesgBanner = () => {
  return (
    <>
      <div className={`${Styles.mesg_banner} p-6 m-5`}>
        <div className="flex items-center ">
          <div className="" style={{width:"40%"}}>
            <img src={img} className="" alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-outfit   ">
              hello <span className="text-blue-500 underline">Fluxphere</span>{" "}
            </h1>
            <p className="w-3/4 font-firaSans mt-2  ">
              some Daily random quotes which will attract users with new tips
              and tricks for growth of company . some Daily random quotes which
              will attract users with new tips and tricks for growth of company...
            </p>
            <div className="mt-5">
            <Buttons text="Read More!" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MesgBanner;
