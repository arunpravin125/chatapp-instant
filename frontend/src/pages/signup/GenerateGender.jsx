import React from "react";

const GenerateGender = ({CheckGender,genderCheck}) => {
    
    
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label cursor-pointer ${genderCheck=="male"?"selected":""} `}>
          <span className="label-text text-black mr-2 ">Male</span>
          <input type="checkbox" checked={genderCheck=="male"} onClick={()=>CheckGender("male")} className="checkbox bg-slate-200" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label cursor-pointer ${genderCheck=="female"?"selected":""} `}>
          <span className="label-text text-black mr-2">Female</span>
          <input type="checkbox" checked={genderCheck=="female"} onClick={()=>CheckGender("female")} className="checkbox  bg-slate-200" />
        </label>
      </div>
    </div>
  );
};

export default GenerateGender;
