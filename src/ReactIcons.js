import React from "react";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";

const ReactIcons = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: "blue", size: "5rem" }}>
        <div className="App">
          <FaReact />
          <MdAlarm color="purple" size="10rem" />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default ReactIcons;
