import React, { useEffect, useState } from "react";
import PersonCard from "../components/PersonCard";
import Profile from "../components/Profile";
import Program from "../components/Program";
import Underline from "../components/Underline";
import { motion } from "framer-motion";
import Ribbon from "../components/Ribbon/Ribbon";
import { useParams } from "react-router";
import { departments } from "../utils/data";

const Department = ({ history }) => {
  const { id } = useParams();
  const [department, setDepartment] = useState({});

  useEffect(() => {
    const foundDepartment = departments.filter((dprt) => dprt.id === id)[0];
    if (foundDepartment) {
      setDepartment(foundDepartment);
    } else {
      history.push("/not-found");
    }
  }, [id, history]);

  return (
    <motion.div
      className="bg-gray pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Ribbon
        primaryTitle={department.title}
        secondaryTitle={department.type}
      />
      <div className="max-w-5xl px-10 md:px-24 mx-auto pt-12">
        <div>
          <img
            src="/assets/pictures/wide-rectangle.jpg"
            alt="BPH"
            className="mx-auto"
          />
        </div>
        {department.core && (
          <div
            className={`flex flex-wrap md:grid md:grid-cols-${department.core.length} py-4 gap-x-4 gap-y-6 md:gap-y-4`}
          >
            {department.core.map((person, idx) => (
              <Profile name={person.name} role={person.role} key={idx} />
            ))}
          </div>
        )}
      </div>
      {department.staff && (
        <div className="flex flex-row flex-wrap justify-around px-10 md:px-24 max-w-6xl py-12 mx-auto">
          {department.staff.map((staff, idx) => (
            <PersonCard
              key={idx}
              photo={"/assets/pictures/rectangle.png"}
              name={staff.name}
              role="STAF"
            />
          ))}
        </div>
      )}
      <div className="py-8 md:py-12 px-8 md:px-24">
        <h2 className="text-purple text-center text-5xl font-marcellus">
          Tupoksi
        </h2>
        <Underline />
        <div className="max-w-5xl mx-auto bg-yellow-light rounded-xl mt-8 shadow-lg text-xl px-4 md:px-8 py-4 text-justify">
          {department.task}
        </div>
      </div>
      {department.programs && (
        <div className="py-12 w-full">
          <h2 className="text-purple text-center text-5xl font-marcellus">
            Program Kerja
          </h2>
          <Underline />
          <div className="max-w-5xl mx-auto rounded-xl mt-4 text-xl px-8 py-4 justify-center items-center content-center flex flex-col md:flex-row">
            {department.programs.map((program, idx) => (
              <Program name={program} key={idx} />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Department;
