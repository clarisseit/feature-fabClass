import React from "react";

const EventRegister = () => {
  return (
    <div>
      <div class="bg-eventRegister">
        <div>
          <p class="text-white font-bold text-4xl lg:p-64 absolute mt-52 lg:-mt-16 md:p-48 md:ml-84">
            Tech Innovators Pre-Incubation Program Application
          </p>
        </div>
      </div>
      <div class="p-6 md:p-16">
        <p>
          Are you a tech innovator with a groundbreaking technology solution? Do
          you have a passion for innovation and a drive to bring your ideas to
          life to transform our society and economy? Apply for the
          Pre-Incubation Program.
        </p>
        <br />
        <p class="text-2xl text-blue-900 font-bold">Who should apply?</p>
        <br />
        <ul class="list-disc ml-6 md:ml-16">
          <li>
            Tech innovators with innovative technology solutions that have a
            significant impact.
          </li>
          <li>
            Open to individuals, teams, and startups with a strong commitment to
            developing their ideas.
          </li>
          <li>Having a working prototype</li>
        </ul>
        <br />
        <p>
          The benefits of the program are mentorship, training, resources, and
          support to help turn your innovative ideas into viable products and
          services.
        </p>
      </div>
      <div class="flex flex-col md:flex-row gap-4 p-6 md:p-8">
        <div class="w-full md:w-1/2">
          <label for="fullNames" class="block font-bold">
            Full Names *
          </label>
          <input
            type="text"
            id="fullNames"
            required
            class="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div class="w-full md:w-1/2">
          <label for="emailAddress" class="block font-bold">
            Email Address *
          </label>
          <input
            type="email"
            id="emailAddress"
            required
            class="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-4 p-6 md:p-8">
        <div class="w-full md:w-1/2">
          <label for="phoneNumber" class="font-bold block">
            Phone Number *
          </label>
          <input
            type="phone"
            id="phone"
            required
            class="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col">
          <label for="DateOfBirth" class="font-bold block">
            Date Of Birth *
          </label>
          <input
            type="text"
            id="DateOfBirth"
            required
            class="w-full border border-gray-300 rounded py-2"
          />
        </div>
      </div>
      <div className=" flex flex-row gap-5 p-6 ">
        <div class="flex flex-col w-1/2 p-6">
          <p class="font-bold ml-1 text-xl">Gender*</p>
          <br />
          <label>
            <input type="radio" id="female" name="gender" value="female" />
            Female
          </label>
          <br />
          <label>
            <input type="radio" id="male" name="gender" value="male" />
            Male
          </label>
        </div>
        <div class="w-full md:w-1/2 flex flex-col">
          <div className=" ">
            <p className=" font-bold w-1/2 p-6">AgeRange*</p> <br /> <br />
            <div className=" -mt-12 ml-4">
              <input type="radio" id="age1" name="age" value="30" />
              <label for="age1"> 15 - 25</label>
              <br /> <br />
              <input type="radio" id="age2" name="age" value="60" />
              <label for="age2"> 26 - 30</label>
              <br /> <br />
              <input type="radio" id="age3" name="age" value="100" />
              <label for="age3"> Above 36</label>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row mb-4">
        <div class="flex flex-col md:w-1/2 p-8">
          <label for="province" class="font-bold">
            Province
          </label>
          <select
            id="province"
            name="province"
            class="border border-gray-300 rounded px-3 py-2"
          >
            <option value="Province 0">Select Province</option>
            <option value="Province 1">Kigali City</option>
            <option value="Province 2">Northern Province</option>
            <option value="Province 3">Southern Province</option>
            <option value="Province 4">Western Province</option>
            <option value="Province 5">Eastern Province</option>
          </select>
        </div>
        <div class="flex flex-col md:w-1/2 p-8">
          <label for="district" class="font-bold">
            District
          </label>
          <select
            id="district"
            name="district"
            class="border border-gray-300 rounded px-3 py-2"
          >
            <option value="District 0">Select District</option>
            <option value="Nyarugenge">Nyarugenge</option>
            <option value="Gasabo">Gasabo</option>
            <option value="Kicukiro">Kicukiro</option>
            <option value="Bugesera">Bugesera</option>
            <option value="Gatsibo">Gatsibo</option>
            <option value="Kayonza">Kayonza</option>
            <option value="Ngoma">Ngoma</option>
            <option value="Nyaruguru">Nyaruguru</option>
            <option value="Nyamagabe">Nyamagabe</option>
            <option value="Huye">Huye</option>
            <option value="Gisagara">Gisagara</option>
            <option value="Kamonyi">Kamonyi</option>
            <option value="Muhanga">Muhanga</option>
            <option value="Nyanza">Nyanza</option>
            <option value="Ruhango">Ruhango</option>
            <option value="Burera">Burera</option>
            <option value="Gicumbi">Gicumbi</option>
            <option value="Musanze">Musanze</option>
            <option value="Rubavu">Rubavu</option>
            <option value="Rusizi">Rusizi</option>
            <option value="Nyamasheke">Nyamasheke</option>
            <option value="Rutsiro">Rutsiro</option>
            <option value="Karongi">Karongi</option>
            <option value="Ngororero">Ngororero</option>
            <option value="Nyabihu">Nyabihu</option>
            <option value="Nyagatare">Nyagatare</option>
            <option value="Province 5">Eastern Province</option>
            <option value="Rwamagana">Rwamagana</option>
          </select>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-12 p-12">
        <div class="w-full md:w-1/2 flex flex-col">
          <label for="sector" class="font-bold block">
            Sector
          </label>
          <input
            type="text"
            id="sector"
            name="sector"
            class="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col">
          <label for="cell" class="font-bold block">
            Cell
          </label>
          <input
            type="text"
            id="cell"
            name="cell"
            class="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col">
          <label for="village" class="font-bold block">
            Village
          </label>
          <input
            type="text"
            id="village"
            name="village"
            class="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-6 -mt-28">
        <div className="p-12 w-full md:w-1/2">
          <div className="mt-6">
            <p className="font-bold">Education level *</p>
            <br />
            <input type="radio" id="age1" name="age" value="30" />
            <label for="age1">Highschool</label>
            <br />
            <input type="radio" id="jobStatus1" name="jobStatus" value="30" />
            <label htmlFor="jobStatus1">Undergraduate</label>
            <br />
            <input type="radio" id="age3" name="age" value="100" />
            <label for="age3"> Bachelor Degree</label>
            <br />
            <input type="radio" id="age3" name="age" value="100" />
            <label for="age3"> Masters</label>
            <br />
            <input type="radio" id="age3" name="age" value="100" />
            <label for="age3"> PHD</label>
            <br />
            <input type="radio" id="age3" name="age" value="100" />
            <label for="age3"> Others</label>
          </div>

          <div className="mt-6">
            <p className="font-bold">Job Status *</p>
            <br />
            <input type="radio" id="jobStatus1" name="jobStatus" value="30" />
            <label htmlFor="jobStatus1">Employed</label>
            <br />
            <input type="radio" id="jobStatus2" name="jobStatus" value="60" />
            <label htmlFor="jobStatus2">Self employed</label>
            <br />
            <input type="radio" id="jobStatus3" name="jobStatus" value="100" />
            <label htmlFor="jobStatus3">Unemployed</label>
            <br />
            <input type="radio" id="jobStatus4" name="jobStatus" value="100" />
            <label htmlFor="jobStatus4">Student</label>
            <br />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-12">
          <div className="font-bold">
            <label htmlFor="fieldOfStudy" className="block">
              Field of Study *
            </label>
            <input
              type="text"
              id="fieldOfStudy"
              name="fieldOfStudy"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <br />
          <div className="font-bold">
            <label htmlFor="university" className="block">
              University *
            </label>
            <input
              type="text"
              id="university"
              name="university"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
      </div>
      <div className=" flex-col p-12">
        <p className=" font-bold">
          Have you previously participated in any other programs at FabLab or
          KLab? *
        </p>{" "}
        <br />
        <input type="radio" id="age1" name="age" value="30" />
        <label for="age1"> Yes</label>
        <br /> <br />
        <input type="radio" id="age2" name="age" value="60" />
        <label for="age2"> No</label>
      </div>
      <div>
        <div className="mb-4 p-12 ">
          <label htmlFor="businessIdea" className="block font-bold">
            Have you previously participated in any other programs at FabLab or
            KLab? *
          </label>
          <br />
          <textarea
            id="businessIdea"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className=" p-12 ">
          <label htmlFor="businessIdea" className="block font-bold">
            Upload your business idea *
          </label>
          <br />
          <textarea
            id="businessIdea"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className=" p-12 font-bold">
          <label htmlFor="uploadLocation" className=" justify-center ">
            Upload your file *
          </label>
          <br /> <br />
          <input
            type="file"
            id="uploadLocation"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>
      <div className=" p-12">
        <p className=" font-bold">
          I consent my data to be used by KLab and FabLab to get updates about
          any program, events and other opportunities *
        </p>
        <br />
        <input type="radio" id="age1" name="age" value="30" />
        <label for="age1"> Highschool</label>
        <br /> <br />
        <input type="radio" id="age2" name="age" value="60" />
        <label for="age2"> Undergraduate</label>
        <br />
      </div>
      <a href="/">
        <div className=" p-1 bg-blue-900 w-56 h-10 lg:ml-80 ml-16 border-red-50 text-center font-bold justify-evenly -mt-5">
          <button type="submit" className="">
            Submit Your Application
          </button>
        </div>
      </a>
      <br /> <br />
    </div>
  );
};

export default EventRegister;
