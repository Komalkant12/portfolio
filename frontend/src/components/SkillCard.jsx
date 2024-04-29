// eslint-disable-next-line no-unused-vars
import React from 'react'


// eslint-disable-next-line react/prop-types
const SkillsCard = ({ title, value }) => {
  return (
    <div className="flex justify-between items-center mt-5 backdrop-blur-xl shadow-xl p-3 border-2 rounded-lg border-gray-400 mr-2">
      <h3 className="font-bold text-xl text-white">{title}</h3>
      <progress max="100" value={value} className="progress-bar" />
    </div>
  );
};

export default SkillsCard;
