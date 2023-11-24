import React from 'react'
import event from "../assets/img/imgEvent1.jpeg";
import { Link } from "react-router-dom";

export default function events() {
  return (
    <div>
      <div className="bg-Events">
        <div>
          <p className=" ml-2 ">i</p>
          <p className="text-white text-1xl text-center mt-36 ">
            KNOW FABLAB EVENTS
          </p>
          <p className="text-white font-bold text-3xl ml-4  text-center ">
            Our Events
          </p>
        </div>
      </div>
      <div className="bg-white lg:w-1/2 lg:h-full mt-6 -ml-8 lg:p-[4rem]">
        <img
          alt="..."
          src={event}
          className=" w-full p-84 ml-8"
          style={{ Width: 200 }}
        />
        <br />
        <br />
        <div className="border-l-4 border-blue-900 p-6 ml-14 lg:ml-3 ">
          <p className="text-slate-700 font-bold">
            First series: Industry 4.0 The Future <br /> of Made in Rwanda"
          </p>
          <p className="p-2">
            <b>Topic:</b> Exploring the Impact of Digitalization and Automation
            in the fabrication and manufacturing industry
          </p>
            <p className="p-2">
            <b>Application Date:</b> 28 Aug, 2023
          </p>
          <p className="p-2">
            <b>Deadline:</b> 15 Jan, 2024
          </p>
        </div>
        <a href="/eventRegister">
          <button className="text-xl  lg:ml-14 ml-28 -mt-2 bg-red-800 hover:bg-slate-500 p-3">
            Application Open
          </button>
        </a>
      </div>
    </div>
  );
}
