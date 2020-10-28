import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeactivateModel from "./DeactivateModel";
import ChangePasswordModel from "./ChangePasswordModel";

const App = () => {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [modelIsOpen1, setModelIsOpen1] = useState(false);
  return (
    <div>
      <button  type="button" className="btn btn-dark" onClick={() => setModelIsOpen(true)}> Open Model </button> &nbsp;
      <button type="button" className="btn btn-dark" onClick={() => setModelIsOpen1(true)}> Open Model </button>
      <DeactivateModel modelIsOpen={modelIsOpen} setModelIsOpen={setModelIsOpen} />
      <ChangePasswordModel modelIsOpen1={modelIsOpen1} setModelIsOpen1={setModelIsOpen1} />
    </div>
  );
};

export default App;
