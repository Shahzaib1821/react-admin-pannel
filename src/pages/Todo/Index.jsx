import React from "react";
import { GeneralLayout } from "../../layouts";
import InputVarTwo from "../../components/Inputvarianttwo";
import ButtonsVarTwo from "../../components/Buttonvartwo";
import Dangerbtn from "../../components/Dangerbtn/Index";

const todoPage = () => {
  return (
    <>
      <GeneralLayout>
        <div className="border rounded-lg bg-white p-6 w-5/6 mx-auto mt-3">
          <h1 className="font-outfit text-xl font-bold border-b-2 border-blue-300 inline-block">
            Add New Tasks
          </h1>
          <div className="mt-7">
            {/* <InputVarTwo label="Enter Title" type="text" /> */}
          </div>
          <div className="mt-7">
            {/* <InputVarTwo label="Enter Date" type="date" /> */}
          </div>

          <div className="mt-6">
            <h1 className="">Priority</h1>
            <div className="flex gap-2 mt-2">
              <div className="flex items-center">
                <input type="checkbox" id="extreme" className="hidden peer" />
                <label
                  htmlFor="extreme"
                  className="w-6 h-6 border-2 border-red-600 rounded cursor-pointer flex items-center justify-center peer-checked:bg-red-600 peer-checked:after:content-['✓'] peer-checked:after:text-white"
                ></label>
                <label htmlFor="extreme" className="ml-2">
                  Extreme
                </label>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="moderate" className="hidden peer" />
                <label
                  htmlFor="moderate"
                  className="w-6 h-6 border-2 border-blue-600 rounded cursor-pointer flex items-center justify-center peer-checked:bg-blue-600 peer-checked:after:content-['✓'] peer-checked:after:text-white"
                ></label>
                <label htmlFor="moderate" className="ml-2">
                  Moderate
                </label>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="low" className="hidden peer" />
                <label
                  htmlFor="low"
                  className="w-6 h-6 border-2 border-green-600 rounded cursor-pointer flex items-center justify-center peer-checked:bg-green-600 peer-checked:after:content-['✓'] peer-checked:after:text-white"
                ></label>
                <label htmlFor="low" className="ml-2">
                  Low
                </label>
              </div>
            </div>
          </div>
          <div className="mt-7">
            {/* <InputVarTwo label="Enter Description" type="text" /> */}
          </div>
          <div className="mt-5">
            <ButtonsVarTwo text="Add Task" />
          </div>
        </div>

              {/* TODOS GONE HERE */}

        <div className="mt-5 border rounded-lg bg-white p-6 w-5/6 mx-auto mt-3">
          <div
            className=" text-white p-8 rounded-lg flex items-center justify-between mt-4"
            style={{ backgroundColor: "#1A5276" }}
          >
            <div>
              <h1 className="font-mono text-3xl font-bold">Todo Title</h1>
              <p className="font-firaSans w-4/5 mt-3">
                Todo description Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Deleniti, ipsum dolor sit amet consectetur
                adipisicing elit. Deleniti, nihil?
              </p>
              <p className="text-gray-300 font-firaSans text-sm mt-2">
                22/may/2024
              </p>
              <span className="flex items-center gap-2 mt-5 text-gray-300">
              Priority
                <div className="rounded-full w-3 h-3 bg-red-600"></div>
              </span>
            </div>
            <div className="text-center">
             <Dangerbtn text="Delete"/>
            </div>
          </div>
          
        </div>

        
      </GeneralLayout>
    </>
  );
};

export default todoPage;
