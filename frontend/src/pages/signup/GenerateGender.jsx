import React from "react";

const GenerateGender = ({CheckGender,genderCheck}) => {
    
    
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text mr-2 ">Male</span>
          <input type="checkbox" checked={genderCheck=="male"} onClick={()=>CheckGender("male")} className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text mr-2">Female</span>
          <input type="checkbox" checked={genderCheck=="female"} onClick={()=>CheckGender("female")} className="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default GenerateGender;
