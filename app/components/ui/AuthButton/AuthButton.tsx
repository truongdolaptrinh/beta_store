import React from "react";
import { AuthButtonProps } from "../../../interface";

export default function AuthButton({ cssClassName }: AuthButtonProps) {
  return (
    <>
      <span
        className={`rounded-full border border-black px-5 py-2 text-xl mr-3 hover:bg-black hover:text-white transition duration-150 ease-in-out
            ${cssClassName}
          `}
      >
        Login
      </span>
      <span
        className={`rounded-full border border-black px-5 py-2 text-xl bg-black text-white ${cssClassName}`}
      >
        SignUp
      </span>
    </>
  );
}
