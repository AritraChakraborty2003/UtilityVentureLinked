/* eslint-disable no-restricted-globals */
/* eslint-disable no-const-assign */
import { useState } from "react";
import { Link } from "react-router-dom";
/* eslint-disable jsx-a11y/alt-text */
const Header = () => {
  const [notHidden, setnotHidden] = useState(false);
  return (
    <>
      <div className="w-full h-[15vmin] md:h-[10vmin] bg-black text-white flex overflow-hidden pb-2">
        <div className="iconHolder h-[15vmin] md:h-[10vmin] flex items-center space-x-4 ">
          <h1 className="font-extrabold text-2xl ml-4">
            <Link to="/">LV</Link>
          </h1>
          <p className="font-bold text-lg lg:text-2xl">
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
                <p>Main-Website</p>
                <p>Rules Page</p>
              </div>
            </>
          )) || (
            <div className="iconHolder h-[10vmin] flex items-center space-x-12 text-2xl font-medium pb-2">
              <p>Login</p>
              <p>Main-Website</p>
              <p>Rules Page</p>
            </div>
          )}
        </div>
        <div className="lg:hidden">
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
            <li>Rules Page</li>
          </ol>
        </div>
      ) : null}
    </>
  );
};
export default Header;
