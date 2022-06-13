import React from "react";
import SkillsList from "../assets/JSON/skillsList";
function Skills() {
  return (
    <div name="skills" className="w-full bg-[#0a192f] text-gray-300 sm_padding_top">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {SkillsList &&
            SkillsList.map(({ name, image, id }) => (
              <div
                key={id}
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4"
              >
                <img className="w-20 mx-auto" src={image} alt="HTML" />
                <p className="mt-4">{name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
