import React from "react";
import boys from "../assets/img/boys.jpg"
import fbclass from "../assets/img/fbclass.jpeg";
import  fabclass2 from "../assets/img/fabclass2.jpg"
import fabclass3 from "../assets/img/fabclass3.jpg"
import fabclass4 from "../assets/img/fabclass4.jpg"
import fabclass5 from "../assets/img/fabclass5.jpeg"
const FabClass = () => {
  return (
    <>
      <div className="bg-fabClass" />
      <div className="absolute lg:top-0 top-[12rem]   text-center ">
        <p className="text-white font-bold text-4xl p-8 md:p-48 md:ml-96">
          Fab Class
        </p>
        <p className="text-white font-bold text-4xl -mt-8 md:-mt-48 md:ml-96">
          We make almost anything
        </p>
      </div>
      <div className="">
        <div className="flex flex-col bg-slate-100 p-8 md:flex-row">
          <div className="flex-1">
            <div>
              <h6 className="text-xl text-indigo-900 ml-10  p-3 font-bold border-blue-900">
                Applications are open
                <div
                  style={{
                    background: "#173D6C",
                    height: 2,
                    marginTop: -12,
                    width: 37,
                    marginLeft: -53,
                  }}
                ></div>
              </h6>

              <h1 className="text-indigo-900 font-bold text-4xl pb-8">
                Fablab Academy
              </h1>
              <br />
              <p>
                Fab Academy is an intensive five-month program that teaches
                students to envision, design and prototype projects using
                digital fabrication tools and machines. It is a
                multi-disciplinary and hands-on learning experience that
                empowers students to learn rapid prototyping by planning and
                executing a new project each week, resulting in a personal
                portfolio of technical accomplishments. And inspires them to
                make stuff locally to become active participants in sustainable
                cities and communities
              </p>
              <div className="flex flex-row justify-center lg:justify-start">
                <button className="bg-blue-800 text-white rounded-full px-8 py-4 mt-2 gap-1 text-lg">
                  APPLY NOW
                </button>
                <br />
                
              </div>
            </div>
          </div>
          <img alt="..." src={fbclass} className=" lg:w-fit mt-6" />
        </div>
        <div
          style={{
            padding: 40,
            backgroundColor: "#ffff",
          }}
        >
          <div
            style={{
              background: "#173D6C",
              height: 2,
            }}
          ></div>
        </div>
        {/* Second section start*/}
        <div className="bg-slate-100 p-8 flex flex-col-reverse md:flex-row">
          <div className="flex-1">
            <div>
              <h1 className="text-indigo-900 font-bold text-4xl mt-7">
                Fab Digital Fabrication
              </h1>
              <br />
              <p>
                FABLAB Rwanda organizes training that facilitates young
                graduates, innovators, individuals, and organizations in
                advancing their knowledge on the use and implementation of
                Internet of Things (IoT), digital fabrication, and interior
                design. It focuses on introducing people to the use of different
                machines. It also focuses on equipping young innovators and
                individuals with the latest knowledge related to digital
                fabrication and use of machines
              </p>
            </div>
          </div>
          <img alt="..." src={fabclass2} className=" lg:w-fit w-full " /> 
        </div>
      </div>
      {/* second section end */}
      <div
        style={{
          padding: 40,
          backgroundColor: "#ffff",
        }}
      >
        <div
          style={{
            background: "#173D6C",
            height: 2,
          }}
        ></div>
      </div>
      {/* Third section start */}
      <div className="flex flex-col md:flex-row bg-slate-100 border-t-2 gap-10">
        <div className="md:flex-3 p-8 mt-5">
          <div>
            <h1 className="text-indigo-900 font-bold text-4xl pb-8">
              Fab Accelerator Program
            </h1>
            <br />
            <p>
              FabLab accelerator program supports young graduates, innovators,
              entrepreneurs and individuals to learn by doing, designing and
              build their ideation, the program provides them with mentorship
              training and skills development to generate innovative solutions
              to successful business. It opens up doors to job opportunities,
              access to a network of investors and collaborators at their
              disposal to help them achieve their goals in any sector such as
              agriculture, engineering, manufacturing, renewable energy,
              environment, health, education, fintech, construction, etc. using
              digital technology to scale their impact nationally or regionally.
            </p>
          </div>
        </div>
        <img alt="..." src={boys} className="w-full md:w-1/2 p-8" />
      </div>{" "}
      {/* Third section end */}
      <div
        style={{
          padding: 40,
          backgroundColor: "#ffff",
        }}
      >
        <div
          style={{
            background: "#173D6C",
            height: 2,
          }}
        ></div>
      </div>
      {/* Fourth section start */}
      <div className="bg-slate-100 p-8 flex flex-col md:flex-row">
        <img alt="..." src={fabclass3} className=" lg:w-full " />
        <div className="md:flex-3 p-8">
          <div>
            <h1 className="text-indigo-900 font-bold text-4xl pb-8 gap-4">
              Tech Upskills
            </h1>
            <br />
            <p className="flex">
              FABLAB Rwanda organizes training that facilitates young graduates,
              innovators, individuals and organizations in advancing their
              knowledge on the use and implementation of Internet of Things
              (IoT), digital fabrication and interior design. It focuses on
              introducing people to the use of different machines. It also
              focuses on equipping young innovators and individuals with the
              latest knowledge related to digital fabrication and the use of
              machines.
            </p>
          </div>
        </div>
      </div>
      {/* Fourth section end */}
      <div
        style={{
          padding: 40,
          backgroundColor: "#ffff",
        }}
      >
        <div
          style={{
            background: "#173D6C",
            height: 2,
          }}
        ></div>
      </div>
      {/* Fifth section start */}
      <div className="flex flex-col md:flex-row bg-slate-100 border-t-2 p-12">
        <div className="md:flex-3 mt-5 border-blue-700">
          <div>
            <br />
            <h1 className="text-indigo-900 font-bold text-4xl pb-8">
              Fab Wood Initiative
            </h1>
            <br />
            <p>
              The Fabwood initiative is in place to create opportunities among
              small/medium enterprises who have established businesses in woods,
              carpentry tailoring, and leather by giving them access to advanced
              digital manufacturing technology and providing them with knowledge
              and skills for job success through training, where new
              technologies are in strong demand for quality wood products. The
              use of hand and power tools including CNC machinery is mastered in
              the training.
            </p>
          </div>
        </div>
        <img alt="..." src={fabclass4} className="w-full md:w-1/2" />
      </div>{" "}
      {/* Fifth section end */}
      <div
        style={{
          padding: 40,
          backgroundColor: "#ffff",
        }}
      >
        <div
          style={{
            background: "#173D6C",
            height: 2,
          }}
        ></div>
      </div>
      {/* Last section start */}
      <div className="flex flex-col md:flex-row bg-slate-100 border-t-2 gap-10">
        <img alt="..." src={fabclass5} className=" bg-slate-600 lg:w-fit p-8" />
        <div className="md:flex-3 p-8">
          <div>
            <h1 className="text-indigo-900 font-bold text-4xl pb-8 gap-4">
              Fab Young Makers
            </h1>
            <br />
            <p className="flex">
              Young Maker education is a creative way to help children become
              inventors. It stimulates thinking and practical skills. The
              children create their own designs from start to finish and from
              design to software to output; all steps have a place in the
              program. We worked with both software and machines, such as the 3D
              printer and laser cutter. While experimenting with the machines,
              the children become aware of their functions and how to use them.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FabClass;
