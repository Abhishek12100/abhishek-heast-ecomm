import React from "react";

function LayoutCommon({children}) {
  return (
    <>
      <main className="main-container w-full relative h-full overflow-hidden my-[3rem]">
        <div className="inner-container w-11/12 mx-auto ">
          <div className="content-container w-full h-fit ">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}

export default React.memo(LayoutCommon);
