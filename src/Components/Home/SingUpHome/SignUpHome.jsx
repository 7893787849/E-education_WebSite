import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import IMG from "../../../assets/E- education logo .png";

function SignUpContent() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3465/api/v1/user/save",
        {
          employeename: username,
          email: email,
          password: password,
        }
      );
      alert("Employee Registration Successfully");

      // Handle success response
      console.log("Response:", response.data);
      // Redirect to login page upon successful signup
      navigate("/Login");
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        id="main"
        className="grid grid-cols-1 md:lg:grid-cols-2 h-[750px] bg-violet-900 mb-26"
      >
        <div
          id="text"
          className=" text-white  bg-violet-900 flex items-center w-[500px]  md:lg:xl:w-auto"
        >
          <p className="text-[44px] text-center pl-4">
            Join Our Community Of Learners
          </p>
        </div>
        <div id="signup" className="bg-violet-900 w-auto">
          {/* sin */}
          <div className="max-w-md mx-12 ">
            {/*  */}
            <div id="back-div" className=" rounded-lg ">
              <div className="bg-gray-800  rounded-[20px] dark:bg-gray-900 mt-3  shadow-lg xl:p-6 2xl:p-6 lg:px-6 lg:py-0  md:p-6 sm:p-4 p-4">
                {/* <div className=" ">
                  <img src={IMG} className="w-56 mx-auto " alt="Logo" />
                </div>*/}
                <p
                  className="font-Calistoga  pb-6  
                 text-white  text-2xl dark:text-gray-400 text-center cursor-default"
                >
                  Get Started With
                  {/* <p className="text-yellow-800 text-5xl font-medium">
                    {" "}
                    E-Education
                  </p> */}
                  <div className=" ">
                    <img src={IMG} className="w-56  mx-auto " alt="Logo" />
                  </div>
                </p>
                <form
                  onSubmit={handleSubmit}
                  action="#"
                  method="post"
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 text-white text-lg font-NotoSans"
                    >
                      User Name
                    </label>
                    <input
                      id="name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                      type="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 text-white text-lg font-NotoSans"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 text-white text-lg font-NotoSans"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button
                    className="font-Calistoga bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </form>
                <div className="flex flex-col mt-4 items-center justify-center text-sm">
                  <h3>
                    <span className="cursor-default text-white">
                      Have an account?
                    </span>
                    <a
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="/Login"
                    >
                      <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Log In
                      </span>
                    </a>
                  </h3>
                </div>

                <div
                  id="third-party-auth"
                  className="flex items-center justify-center mt-5 flex-wrap"
                >
                  <button
                    href="#"
                    className="hover:scale-105 bg-violet-800 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                  >
                    <img
                      className="max-w-[25px]"
                      src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                      alt="Google"
                    />
                  </button>
                </div>

                <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                  <p className="cursor-default">
                    By signing in, you agree to our
                    <a
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="#"
                    >
                      <span className="mx-1 cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Terms
                      </span>
                    </a>
                    and
                    <a
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="#"
                    >
                      <span className="ml-1 cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Privacy Policy
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* end */}
          </div>

          {/* sin */}
        </div>
      </div>
    </>
  );
}
export default SignUpContent;
