import React from "react";
import ButtonsVarTwo from "../../components/Buttonvartwo";
const PackageCard = ({ listitem, title, tier, price, img }) => {
  return (
    <>
      <div
        className=" p-5 rounded-lg w-fit"
        style={{ backgroundColor: "#1A5276" }}
      >
        <div className="flex items-center justify-between gap-14">
          <div className="flex items-center gap-3">
            <div className="">
              <img src={img} alt="" />
            </div>
            <div>
              <p className="text-gray-200 font-firaSans text-xs">{title}</p>
              <h1 className="text-white font-firaSans text-xl">{tier}</h1>
            </div>
          </div>
          <div className="bg-blue-300 p-2 text-white rounded-lg">popular</div>
        </div>
        <p className="text-xs text-gray-100 mt-2 w-5/6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
          praesentium.
        </p>

        <div className="price flex items-center gap-2 mt-5 text-white">
          <h2 className="text-2xl">{price}</h2>
          <p className="text-xs">/Monthly</p>
        </div>
        <div className="services mt-5">
          <p className="text-sm text-start text-white">What's Included?</p>
          <ul className="mt-3 text-white">
            {listitem && listitem.length > 0 ? (
              listitem.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <i className="ri-verified-badge-fill text-blue-200 text-lg"></i>
                  <span>
                    <p className="text-xs text-start mt-2">{item}</p>
                  </span>
                </li>
              ))
            ) : (
              <li className="flex items-center gap-3">
                <p>No items included</p>
              </li>
            )}
          </ul>
        </div>
        <div className="flex flex-col mt-6 ">
          <ButtonsVarTwo text="Get Started" />
        </div>
      </div>
    </>
  );
};

export default PackageCard;
