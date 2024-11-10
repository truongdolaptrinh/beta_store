import React from "react";

const AuthButton = () => {
  return (
    <div className="flex items-center justify-around pt-3">
      <span
        className="w-full text-center rounded-full border border-black px-5 py-2 text-xl mr-3 hover:bg-black hover:text-white transition duration-150 ease-in-out sm:hidden
        "
      >
        Login
      </span>
      <span className="w-full text-center rounded-full border border-black px-5 py-2 text-xl bg-black text-white sm:hidden">
        SignUp
      </span>
    </div>
  );
};

export default AuthButton;
