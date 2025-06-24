import React from "react";
import Form from "./Form";

const Manager = () => {
  return (
    <>
      <div className="min-w-screen min-h-screen text-white overflow-hidden">
        <div className="text-center my-2">
          <img
            src="/src/assets/logo/logo-transparent-png.png"
            alt="logo"
            width={150}
            className="mx-auto"
          />
          <p>Your own password manager</p>
        </div>
        <Form />
      </div>
    </>
  );
};

export default Manager;
