/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./login.css";
const FirstLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const myStyle = {
    background: "orange",
    font: "poppins",
    display: "flex",
  };
  const SubmitChange = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(uid);
    console.log(password);
    if (uid === "PT1") {
      if (email === "aritra.chakraborty203@gmail.com") {
        if (password === "Technical2024") {
          console.log("Hi");
          localStorage.setItem("user", "adminU1");
          navigate("/Index");
        } else {
          alert("Invalid Credentials");
          document.getElementById("uid").value = "";
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
        }
      } else {
        alert("Invalid Credentials");
        document.getElementById("uid").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
      }
    } else if (uid === "PT31") {
      if (email === "test@gmail.com") {
        if (password === "internTech2024") {
          localStorage.setItem("user", "adminU3");
          navigate("/Index");
        } else {
          alert("Invalid Credentials");
          document.getElementById("uid").value = "";
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
        }
      } else {
        alert("Invalid Credentials");
        document.getElementById("uid").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
      }
    } else {
      alert("Invalid Credentials");
      document.getElementById("uid").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    }
  };
  return (
    <>
      <Header />
      <div
        className="h-[calc(100vh-15vmin)] lg:h-[calc(100vh-10vmin)] justify-center items-center"
        style={myStyle}
      >
        <div className="formBody bg-white pb-3 lg:w-[60vmin]">
          <div className="headerText w-full bg-black text-white p-1 lg:h-[15vmin] 2xl:h-[10vmin] flex flex-col justify-content pl-2 pt-1">
            <p className="text-xl mt-2 overflow-y-hidden font-bold">
              Login Form
            </p>
            <p className="text-sm mt-1">( Login into utility dashboard )</p>
          </div>

          <form className="flex flex-col p-6 gap-y-4">
            <input
              type="text"
              className="w-[70vmin] lg:w-[50vmin] ml-2 bg-slate-200 p-2"
              placeholder="Enter your userId"
              id="uid"
              onChange={(e) => setUid(e.target.value)}
            ></input>
            <input
              type="text"
              className="w-[70vmin] lg:w-[50vmin] ml-2 bg-slate-200 p-2"
              placeholder="Enter your email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <div className="flex w-[70vmin] lg:w-[50vmin] bg-slate-200 ml-2">
              <input
                type={showPassword ? "text" : "password"}
                className="w-[60vmin] lg:w-[45vmin] ml-2 bg-slate-200 p-2"
                placeholder="Enter password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>

              <img
                src="./rp.png"
                id="showicon"
                height={50}
                width={50}
                onClick={() => {
                  if (showPassword === false) {
                    setShowPassword(true);
                    document.getElementById("showicon").src = "./sp.png";
                  } else {
                    setShowPassword(false);
                    document.getElementById("showicon").src = "./rp.png";
                  }
                }}
              ></img>
            </div>
            <button
              className="bg-black text-white p-2 w-24"
              onClick={SubmitChange}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default FirstLogin;
