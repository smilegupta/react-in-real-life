import React, { useState } from "react";
import "./App.css";
import DeactivateModel from "./DeactivateModel";
import ChangePasswordModel from "./ChangePasswordModel";
import ReactIcons from "./ReactIcons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactTippy from "./ReactTippy";
import ReactColor from "./ReactColor";
import Datepicker from "./DatePicker";


toast.configure();

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong! <button onClick={closeToast}>Close</button>
    </div>
  );
};

const App = () => {
  const notify = () => {
    toast("Default!", { position: toast.POSITION.TOP_LEFT });
    toast.success("Success!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.info("Info!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
    toast.warn(<CustomToast />, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    toast.error("Error!", { position: toast.POSITION.BOTTOM_CENTER });
    toast("Wow so easy !", { position: toast.POSITION.BOTTOM_RIGHT });
  };

  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [modelIsOpen1, setModelIsOpen1] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => setModelIsOpen(true)}
      >
        {" "}
        Open Model{" "}
      </button>{" "}
      &nbsp;
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => setModelIsOpen1(true)}
      >
        {" "}
        Open Model{" "}
      </button>
      <br />
      <ReactIcons />
      <br /> 
      <button className="btn btn-dark" onClick={notify}>
        Notify !
      </button>
      <br /> <br />
      <ReactTippy />
      <br /> <br />
      <ReactColor />
      <br /> <br />
      <Datepicker />
      <DeactivateModel
        modelIsOpen={modelIsOpen}
        setModelIsOpen={setModelIsOpen}
      />
      <ChangePasswordModel
        modelIsOpen1={modelIsOpen1}
        setModelIsOpen1={setModelIsOpen1}
      />
     
    </div>
  );
};

export default App;
