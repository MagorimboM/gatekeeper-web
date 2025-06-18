import React from "react";

function Page ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
      className="h-screen w-screen bg-white/30 backdrop-blur-md flex flex-col justify-center items-center"
      >{children}</div>
    </>
  );
}

export default Page;
