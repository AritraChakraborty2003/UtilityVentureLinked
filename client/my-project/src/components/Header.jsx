/* eslint-disable no-restricted-globals */
/* eslint-disable no-const-assign */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [notHidden, setnotHidden] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-[15vmin] md:h-[10vmin] bg-black text-white flex overflow-hidden pb-2">
        <div className="iconHolder h-[15vmin] md:h-[10vmin] flex items-center space-x-4 ">
          <h1 className="font-extrabold text-2xl ml-4">
            <Link to="/">LV</Link>
          </h1>
          <p className="font-bold text-[4.48vmin] lg:text-lg 2xl:text-2xl">
            <Link to="/">VentureLink Utility</Link>
          </p>
        </div>
        <div className="iconHolder  w-[29vw] md:w-[63vw] lg:w-[50vw] 2xl:w-[57vw] flex items-center"></div>
        <div className="hidden lg:block">
          {(screen.width <= 1700 && (
            <>
              <div className="iconHolder h-[8.4vmin] flex items-center space-x-7 text-xl font-medium ">
                <p>
                  <Link to="/FirstLogin">Login</Link>
                </p>
                <p>About</p>

                <p
                  onClick={() => {
                    navigate("/Team");
                  }}
                >
                  Our Team
                </p>
                <p>Contact</p>
              </div>
            </>
          )) || (
            <div className="iconHolder h-[10vmin] flex items-center space-x-12 text-2xl font-medium pb-2">
              <p>Login</p>
              <p>About</p>
              <p>Rules Page</p>
              <p>Contact</p>
              <p
                onClick={() => {
                  navigate("/Team");
                }}
              >
                Our Team
              </p>
            </div>
          )}
        </div>
        <div className="lg:hidden overflow-hidden ml-[4.25vmin]">
          <div className="iconHolder h-[15vmin] md:h-[10vmin] flex items-center space-x-6 text-xl font-medium">
            <img
              src="./ham.png"
              height={30}
              width={30}
              onClick={() => {
                if (notHidden === false) setnotHidden(true);
                else setnotHidden(false);
              }}
            ></img>
          </div>
        </div>
      </div>
      {notHidden ? (
        <div className="navHam flex flex-col p-1  bg-[#e5dfdf] w-[100vw]">
          <ol className="flex flex-col gap-y-2 pl-2 pb-2">
            <li>Login</li>
            <li>Main-Website</li>
            <li
              onClick={() => {
                navigate("/Team");
              }}
            >
              Our Team
            </li>
            <li>Contact</li>
          </ol>
        </div>
      ) : null}
    </>
  );
};
export default Header;
