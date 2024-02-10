import React from "react";
import { TbHeadingOff } from "react-icons/tb";

function HeadingCommon({children, heading, subHeading}) {
  return (
    <>
      <div className="heading-container text-center w-full">
        <h1 className="text-[3.5rem] font-extrabold uppercase  tracking-tighter">
          { heading ? heading : "why CHOOSING us"}
        </h1>
        <div>
          <p className="uppercase tracking-widest font-[600] ">
            {subHeading ? subHeading :  "Reason for choosing us"}
          </p>
          {children}
        </div>
      </div>
    </>
  );
}

export default React.memo(HeadingCommon);
