import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-img"
        />
      </div>
      <form className="w-4/12 absolute left-0 right-0 top-20 bottom-20 m-auto p-12 bg-[#000000bf] text-white rounded-lg">
        <h1 className=" text-2xl font-semibold mb-4">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-[#333]"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-[#333]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-[#333]"
        />
        <button className="p-4 my-4 font-semibold bg-red-700 w-full">
          Sign {isSignInForm ? "In" : "Up"}
        </button>
        <p className="text-stone-500" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? Sign Up Now"
            : " Already exists? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
