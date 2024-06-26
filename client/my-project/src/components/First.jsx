/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AboutPage from "./AboutPage";
import Features from "./Features";
import Footer from "./Footer";
/* eslint-disable no-unreachable */
const First = () => {
  const navigate = useNavigate();

  const myStyle = {
    background: "orange",
    font: "poppins",
  };
  const [text] = useTypewriter({
    words: ["Business", "Startups", "Lives"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 90,
  });
  return (
    <>
      <Header />
      <div
        className=" md:h-[calc(100vh-10vmin)] w-[100vw] flex justify-center items-center flex-wrap-reverse  p-4 overflow-hidden"
        style={myStyle}
      >
        <div className="leftPart flex flex-col lg:justify-center lg:items-start  w-[100vw] sm:h-[40vh] lg:w-[83vmin] pb-3 pt-7 lg:h-[100vmin] lg:mt-[15vmin] sm:mt-[-4vmin]">
          <p className="text-[14vmin] lg:mt-[8vmin] md:text-[12vmin] text-black pb-1 lg:pb-3 font-extrabold">
            Welcome To,
          </p>

          <p className="text-[10vmin] md:text-[8.5vmin] text-black pb-1 lg:pb-3 font-medium mt-[-4vmin]">
            Venture Linked
          </p>
          <p className="text-[5vmin] md:text-[3.5vmin] text-black pb-1 lg:pb-3 font-medium mt-[-2vmin]">
            Utility Software Solution
          </p>
          <p className="text-[4vmin] md:text-[2.75vmin] text-black pb-1 lg:pb-3 font-normal">
            ( Connecting entrpreneurs evolving{" "}
            <span style={{ color: "black", fontWeight: "bold" }}> {text}</span>
            <span style={{ color: "black" }}>
              {" "}
              <Cursor cursorStyle="|" />
            </span>{" "}
            )
          </p>
          <div className="flex mt-4">
            <button
              className="bg-[#ff1010] opacity-80 text-white text-2xl p-2 w-[30vmin] md:w-[20vmin] "
              onClick={() => {
                navigate("/FirstLogin");
              }}
            >
              <Link to="/FirstLogin">Login</Link>
            </button>
            <button
              className="ml-5 bg-white text-red-500 border-red-500 text-2xl p-2 w-[30vmin] md:w-[20vmin]"
              onClick={() => {
                navigate("/FirstLogin");
              }}
            >
              <Link to="/FirstLogin">Gallery</Link>
            </button>
          </div>
        </div>
        <div className="rightPart md:mt-[15vmin]  w-[70vmin] lg:h-[100vmin] lg:p-10  flex justify-center items-center">
          <div className="mt-[3vmin] md:mt-[15vmin]  lg:ml-[4vmin]  imgHolder h-[65vmin] w-[90vw] md:w-[60vmin] md:h-[55vmin] 2xl:mt-[10vmin]">
            <img
              src="./startup.png"
              className="max-w-full max-h-full object-contain"
            ></img>
          </div>
        </div>
      </div>
      <AboutPage />
      <Features />
      <Footer />
    </>
  );
};
export default First;
