import React from "react";

import our1 from "../assets/img/our1.jpg"
import our2 from "../assets/img/our2.jpg";
import our3 from "../assets/img/fabclass2.jpg";
import our4 from "../assets/img/our3.jpg";

const Programs = () => {
  return (
    <div>
      <div className="bg-bgProgram" />
      <div className="absolute top-[10rem] left-[4rem] lg:left-[28rem]">
        <p className="text-white font-bold p-4 lg:text-4xl text-xl text-center ">
          FABLAB PROGRAMS
        </p>
        <p className="text-white font-bold  lg:text-4xl text-xl text-center">
          We make almost anything
        </p>
        <p className="text-white font-bold  lg:text-4xl text-xl text-center">
          Our Programs
        </p>
      </div>
      <br /> <br />
      <div className="md:flex">
        {/* first section start */}
        <div className="flex flex-col  md:flex-row mt-3 ">
          <div className=" lg:w-1/2 -ml-24 lg:ml-1">
            <img alt="..." src={our1} className=" w-full md:fit lg:-ml-1" />
          </div>

          <div className="flex-1 p-8">
            <h1 className="text-4xl lg:ml-20 mt-24 text-center md:text-left">
              IoT Training
              <div
                style={{
                  height: 4,
                  marginTop: 16,
                  width: 37,
                  marginLeft: 29,
                  border: "4px dashed #FFBB44",
                }}
              ></div>
              <div
                style={{
                  background: "#FFBB44",
                  height: 4,
                  width: 37,
                  marginLeft: 68,
                  marginTop: -6,
                }}
              ></div>
            </h1>
            <p className="text-sm text-gray-500 mt-4">
              It brings Rwandan innovators into the era of a connected world,
              where the Internet of Things (IoT) connects not just people but
              the devices that we use on a daily basis. It refers to a system of
              interrelated computing devices, mechanical and digital machines,
              objects, animals, or people that are provided with unique
              identifiers and the ability to transfer data over a network
              without requiring human-to-human or human-to-computer interaction.
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex">
        {/* second section start here */}
        <div className="flex flex-col md:flex-row mt-0">
          <div className="flex-1 p-8 md:p-16  ">
            <h1 className="text-4xl text-center md:text-left">
              SolidWorks Academy
            </h1>
            <p className="text-sm text-gray-500 mt-4">
              FabLab Rwanda established SolidWorks Academy, a CAD training
              school and SolidWorks Certification Center in Rwanda. Solidworks
              gives you the power to drive innovation. With millions of users
              around the world, SolidWorks has proven to be a market leader in
              3D mechanical design and engineering. It enables creating
              sophisticated part and assembly designs quickly and efficiently
              using powerful and easy-to-use software. This assessment tests
              your knowledge on the core skills you need to design using
              SolidWorks, increase knowledge compared to others in the industry,
              then skill up with Pluralsight courses focused on the topics that
              will give you the greatest benefit. Becoming an expert in
              SOLIDWORKS will give you the skills you need to succeed and bring
              your products to market faster.
            </p>
          </div>
          <div className=" lg:w-1/2">
            <img alt="..." src={our2} className=" lg:w-full md:fit lg:-ml-1" />
          </div>
        </div>
        {/* second section start here */}
      </div>
      <div className="md:flex">
        {/* third section */}
        <div className="flex flex-col md:flex-row ">
          <img alt="..." src={our3} className="w-full md:w-1/2 " />
          <div className="flex-1   ">
            <h1 className="text-4xl text-center md:text-left">
              Research and Innovation
            </h1>
            <br />
            <p className="text-sm p-8 text-gray-500">
              In research and Innovation, we collaborate with our stakeholders’
              organizations to provide services to existing industries,
              especially in prototyping and innovation to foster a dynamic
              capable human and sustainable culture of innovation in Rwanda. We
              are committed to promoting research and innovation for different
              industries using advanced technology to ensure the creation of new
              digital fabrication tools and new solutions to community issues.
              In research and innovation, we use our digital fabrication
              facilities to prototype, design, fabricate, and test ideas from
              ourselves and others. We document all project requirements and
              then work with our clients to determine the best manufacturing
              approach to implement their digital fabrication project.
            </p>
          </div>
        </div>
        {/* third section */}
      </div>
      <div className="md:flex">
        {/* last section */}
        <div className="flex flex-col md:flex-row mt-3">
          <div className="flex-1 p-8 md:p-20">
            <h1 className="text-4xl text-center md:text-left">
              Capacity building
            </h1>{" "}
            <br />
            <p className="text-sm text-gray-500">
              At FABLABRwanda, in our capacity building program, we help both
              individuals and organizations to enhance their competencies and
              perform at a higher level in their industries. We provide
              education to new makers to advance their knowledge of digital
              technologies and explore new possibilities in the field.
              Additionally, we support research and development and facilitate
              the upgrading of knowledge in existing disciplines. In our
              capacity building program, we offer project-based training where
              trainees learn from their peers. Trainees are also expected to
              contribute to the documentation and instruction of the projects.
            </p>
          </div>
          <img
            alt="..."
            src={our4}
            className=" lg:w-1/2 lg:-ml-24 md:w-1/2  lg:-mt-2 "
          />
        </div>
        {/* last section */}
      </div>
    </div>
  );
};

export default Programs;
