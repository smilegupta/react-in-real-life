import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ReactTippy = () => {
  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content="Hello" arrow={false} delay={1} placement='right'>
          <button>My button</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<span style={{ color: "orange" }}>Colored</span>}>
          <button>My button</button>
        </Tippy>
      </div>
    </div>
  );
};

export default ReactTippy;
