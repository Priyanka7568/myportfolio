import React from "react";
import workList from "../assets/JSON/workList";

function Work() {
  return (
    <div name="work" className="w-full bg-[#0a192f] text-gray-300 sm_padding_top">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">// Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {workList &&
            workList.map(
              ({ title, technology, demo_URL, code_URL, image, id }) => (
                <div
                  key={id}
                  style={{ backgroundImage: `url(${image})` }}
                  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                >
                  <div className="opacity-0 group-hover:opacity-100 text-center">
                    <span className="text-2xl font-bold text-white tracking-wider">
                      {title}
                    </span>
                    <p>{technology}</p>
                    <div className="pt-8 text-center">
                      <a href={demo_URL} target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Demo
                        </button>
                      </a>
                      <a href={code_URL} target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default Work;
