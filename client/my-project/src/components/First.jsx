/* eslint-disable jsx-a11y/alt-text */

import { Link } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
/* eslint-disable no-unreachable */
const First = () => {
  const navigate = useNavigate();
  const myStyle = {
    background: "orange",
    font: "poppins",
  };
  const [text] = useTypewriter({
    words: ["Businesses", "Entreprenership", "lives"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 90,
  });
  return (
    <>
      <Header />
      <div
        className="h-[calc(100vh-15vmin)] md:h-[calc(100vh-10vmin)] w-[100vw] flex justify-center items-center flex-wrap-reverse p-4 overflow-hidden"
        style={myStyle}
      >
        <div className="leftPart flex flex-col lg:justify-center lg:items-start  w-[83vmin] pb-3 lg:h-[100vmin]">
          <p className="lg:mt-[8vmin] text-[12vmin] text-black pb-3 font-extrabold">
            Welcome To,
          </p>

          <p className="text-[8.5vmin] text-black pb-3 font-medium mt-[-4vmin]">
            Venture Linked
          </p>
          <p className="text-[3.5vmin] text-black pb-3 font-medium mt-[-2vmin]">
            Utility Software Solution
          </p>
          <p className="text-[3vmin] lg:text-[2.75vmin] text-black pb-3 font-normal">
            ( Connecting entrpreneurs evolving{" "}
            <span style={{ color: "black", fontWeight: "bold" }}> {text}</span>
            <span style={{ color: "black" }}>
              {" "}
              <Cursor cursorStyle="|" />
            </span>{" "}
            )
          </p>
          <button
            className="bg-[#ff1010]  text-white text-2xl p-2 w-[30vmin] md:w-[20vmin]"
            onClick={() => {
              navigate("/FirstLogin");
            }}
          >
            <Link to="/FirstLogin">Login</Link>
          </button>
        </div>
        <div className="rightPart w-[70vmin] lg:h-[100vmin] p-5 lg:p-10  flex justify-center items-center">
          <div className="mt-[3vmin] lg:mt-[8vmin]  lg:ml-[4vmin]  imgHolder w-[55vmin] h-[55vmin]">
            <img
              src="./startup.png"
              className="max-w-full max-h-full object-contain"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default First;
