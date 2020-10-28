import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
const DeactivateModel = ({ setModelIsOpen, modelIsOpen }) => {
  return (
    <Modal
      isOpen={modelIsOpen}
      onRequestClose={() => setModelIsOpen(false)}
      style={{
        overlay: {
          backgroundColor: "grey",
        },
        content: {
          color: "#fff",
          height: "450px",
          width: "724px",
          borderRadius: "10px",
          background: "#232f3e",
          border: "1px solid #232F3E",
        },
      }}
    >
      <div className="row px-4 pb-2">
        <div className="col-12">
          <h2> Reason for leaving?</h2>
        </div>
      </div>
      <div className="row px-4">
        <div className="col-12">
          <div className="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                Not interested
              </label>
            </div>
          </div>

          <div class="form-check form-group">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label class="form-check-label" for="exampleRadios1">
              Content not relevent
            </label>
          </div>
          <div class="form-check form-group">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label class="form-check-label" for="exampleRadios1">
              Change Roles
            </label>
          </div>
          <div class="form-check form-group">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label class="form-check-label" for="exampleRadios1">
              Other
            </label>
          </div>

          <div class="form-group">
            <textarea
              class="form-control textarea"
              rows="4"
              id="comment"
              placeholder="Add Comments"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="row px-4 pull-right">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-danger deactivate-btn"
            onClick={() => setModelIsOpen(false)}
          >
            {" "}
            <span> Deactivate </span>{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeactivateModel;
