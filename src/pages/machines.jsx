import React from 'react'
import machine1 from "../assets/img/machine1.jpg";
import machine2 from "../assets/img/machine2.jpg";
import machine3 from "../assets/img/machine3.jpg";
import machine4 from "../assets/img/machine4.jpg";
import machine5 from "../assets/img/machine5.jpg";
import machine6 from "../assets/img/machine6.jpg";
import machine7 from "../assets/img/machine7.jpg";
import machine8 from "../assets/img/machine8.jpg";
export default function machines() {
  return (
    <div>
      <div className="bg-Machines"></div>
      <div className=' absolute  lg:-mt-[35rem] lg:p-8'>
        <p className="text-white text-4xl lg:p-48 lg:ml-96 lg:mt-8 -mt-96 ml-4">
          Fab Lab Show Room
        </p>
        <br />
        <p className="text-white text-4xl lg:-mt-52 ml-6 lg:ml-[32rem]">
          We make almost anything
        </p>
      </div>
      <h1 className=" mt-20 text-center text-5xl text-blue-900 font-bold">
        Our Machines
      </h1>
      <h6 className=" p-14">
        <b>Deprecated:</b> preg_replace(): Passing null to parameter #3
        ($subject) of type array|string is deprecated in
        <b>/home/fablab/public_html/wp-includes/kses.php</b> on line <b>1735</b>
      </h6>
      <div className=" lg:flex p-10 gap-5 lg:w-1/2 flex-col lg:flex-row">
        <div className=" p-">
          <img alt="..." src={machine1} className="w-full  h-96 " />
          <div className=" w-80 -ml-4">
            <br />
            <p className=" text-xl ml-4 -mt-12 p-8 text-blue-900  font-bold border-2 bg-slate-100">
              3D Printer
            </p>
            <br />
          </div>
        </div>

        <div className="  ">
          <img alt="..." src={machine2} className="w-full  h-96 " />
          <div className=" w-80 -ml-4">
            <br />
            <p className=" text-xl ml-4 text-blue-900 -mt-12 p-8 font-bold border-2 bg-slate-100">
              3D Printer
            </p>
            <br />
          </div>
        </div>

        <div className="  ">
          <img alt="..." src={machine3} className="w-full  h-96 " />
          <div className=" w-80 -ml-4">
            <br />
            <p className=" text-xl ml-4 text-blue-900 -mt-12 p-8 font-bold border-2 bg-slate-100">
              Laser cutter
            </p>
            <br />
          </div>
        </div>

        <div className="">
          <img alt="..." src={machine4} className="w-full  h-96 " />
          <div className=" w-80 -ml-4">
            <br />
            <p className=" text-xl ml-4 text-blue-900 -mt-12 p-8 font-bold border-2 bg-slate-100">
              Heat Press Machine
            </p>
            <br />
          </div>
        </div>
      </div>
      {/* first section end */}

      {/* second section start */}
      <div className=" lg:flex p-10 gap-5 lg:w-1/2">
        <div className=" p-">
          <img alt="..." src={machine5} className="w-full  h-96 " />
          <div className=" w-80 -ml-4">
            <br />
            <p className=" text-xl ml-4 text-blue-900 -mt-12 p-8 font-bold border-2 bg-slate-100">
              Plotter Cutter Machine
            </p>
            <br />
          </div>
        </div>

        <div className="  ">
          <img alt="..." src={machine6} className="w-full  h-96 " />
          <div className=" w-80 -ml-4">
            <br />
            <p className=" text-xl ml-4 text-blue-900 -mt-12 p-8 font-bold border-2 bg-slate-100">
              PCB Milling Machine
            </p>
            <br />
          </div>
        </div>

        <div className="  ">
          <img alt="..." src={machine7} className="w-full  h-96 " />
          <div className=" w-80 -ml-4">
            <br />
            <p className=" text-xl ml-4 text-blue-900 -mt-12 p-8 font-bold border-2 bg-slate-100">
              CNC Router
            </p>
            <br />
          </div>
        </div>

        <div className="">
          <img alt="..." src={machine8} className="w-full  h-96 " />
          <div className=" w-80 -ml-4">
            <br />
            <p className=" text-xl ml-4 text-blue-900 -mt-12 p-8 font-bold border-2 bg-slate-100">
              3D Printer
            </p>
            <br />
          </div>
        </div>
      </div>
      {/* second section end */}
    </div>
  );
}
