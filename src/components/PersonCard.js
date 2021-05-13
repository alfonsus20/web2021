import React from "react";
import Profile from "./Profile";

const PersonCard = ({ photo, name, role }) => {
  return (
    <div className="flex flex-col w-64 ">
      <div>
        <img src={photo} alt="Member Photo" className="w-full" />
      </div>
      <Profile name={name} role={role} />
    </div>
  );
};

export default PersonCard;
