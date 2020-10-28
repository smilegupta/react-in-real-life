import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
const ChangePasswordModel = ({ setModelIsOpen1, modelIsOpen1 }) => {
  return (
    <Modal
      isOpen={modelIsOpen1}
      onRequestClose={() => setModelIsOpen1(false)}
      style={{
        overlay: {
          backgroundColor: "grey",
        },
        content: {
          color: "#fff",
          height: "400px",
          width: "724px",
          borderRadius: "10px",
          background: "#232f3e",
          border: "1px solid #232F3E",
        },
      }}
    >
      <div className="row px-4 pb-2">
        <div className="col-12">
          <h2> Change Password</h2>
        </div>
      </div>
      <div className="row px-4">
        <div className="col-12">
          <div class="form-group">
            <label for="oldpassword">Old Password</label>
            <input
              type="password"
              class="form-control textarea"
              id="oldpassword"
            />
          </div>

         
         
          <div class="form-group">
            <label for="newpassword">New Password</label>
            <input
              type="password"
              class="form-control textarea"
              id="newpassword"
            />
          </div>

          <div class="form-group">
            <label for="oldpassword">Confirm Password</label>
            <input
              type="password"
              class="form-control textarea"
              id="confirmpassword"
            />
          </div>

          
        </div>
      </div>
      <div className="row px-4 pull-right">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary deactivate-btn"
            onClick={() => setModelIsOpen1(false)}
          >
            {" "}
            <span> Update  </span>{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ChangePasswordModel;
