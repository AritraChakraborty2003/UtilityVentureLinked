/* eslint-disable jsx-a11y/alt-text */
import "./manage.css";
import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://codemap.co.in/ImagesAPI.php")
      .then((res) => {
        setData(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <>
      {(((data.length === 0 && localStorage.getItem("user") === "adminU1") ||
        (data.length === 0 && localStorage.getItem("user") === "adminU3")) && (
        <>
          <div className="overflow-y-hidden">
            <Header />
            <div className="h-[calc(100vh-15vmin)] lg:h-[calc(100vh-10vmin)] overflow-y-hidden w-[100vw] bg-[#FFA62F] flex justify-center items-center">
              <p className="text-black text-3xl lg:text-5xl p-3 font-bold">
                Please Wait... 🙏🙏🙏
              </p>
            </div>
          </div>
        </>
      )) ||
        (localStorage.getItem("user") === "adminU1" && (
          <>
            <Header />
            <div className="bg-[#FFA62F] ">
              <button
                className="p-2 ml-2 mt-3 text-lg bg-white"
                onClick={() => {
                  localStorage.removeItem("user");
                }}
              >
                <Link to="/">Logout</Link>
              </button>
              <div className="w-[100vw] p-2 bg-[#FFA62F] flex flex-col justify-center items-center">
                <div className="textSection flex flex-col justify-center items-center">
                  <p className="text-3xl lg:text-7xl p-3 text-white font-bold">
                    Welcome,to Utility Area
                  </p>
                  <p className="text-lg lg:text-2xl text-white">
                    (The ultimate place for all your utility needs)
                  </p>
                </div>
                <div className="cardMain flex justify-center items-center gap-x-2 lg:gap-x-2  lg:gap-y-0 flex-wrap ">
                  {data.map((val) => (
                    <>
                      <div className="cardHolder mt-5 p-4  w-[45vmin] lg:w-[40vmin] bg-[#ffffff] shadow-2xl flex flex-col justify-center items-center">
                        <div className="card h-[25vmin] w-[40vmin] ">
                          <div className="h-[21vmin] w-[40vmin] flex flex-col justify-center items-center  ">
                            <img
                              src={val.Image}
                              className="max-w-full max-h-full object-contain"
                            ></img>
                          </div>
                        </div>
                        <p className=" hidden md:block text-lg lg:text-xl font-medium font-sans pl-2 pr-2 text-black">
                          Tool: {val.name}
                        </p>
                        <p className=" block md:hidden text-md lg:text-xl font-medium font-sans pl-2 pr-2 text-black">
                          {val.name}
                        </p>
                        <button className="bg-[#FFBF00] p-2 font-medium text-black mt-4 font-sans">
                          <a href={val.link}>{val.name}</a>
                        </button>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </>
        )) ||
        (localStorage.getItem("user") === "adminU3" && (
          <>
            <Header />
            <div className="bg-[#FFA62F] ">
              <button
                className="p-2 ml-2 mt-3 text-lg bg-white"
                onClick={() => {
                  localStorage.removeItem("user");
                }}
              >
                <Link to="/">Logout</Link>
              </button>
              <div className="w-[100vw] p-2 bg-[#FFA62F] flex flex-col justify-center items-center">
                <div className="textSection flex flex-col justify-center items-center">
                  <p className="text-3xl lg:text-7xl p-3 text-white font-bold">
                    Welcome,to Utility Area
                  </p>
                  <p className="text-lg lg:text-2xl text-white">
                    (The ultimate place for all your utility needs)
                  </p>
                </div>
                <div className="cardMain flex justify-center items-center gap-x-2 lg:gap-x-4  lg:gap-y-0 flex-wrap ">
                  {data.slice(0, 6).map((val) => (
                    <>
                      <div className="cardHolder mt-5 p-4  w-[45vmin] lg:w-[50vmin] bg-[#ffffff] shadow-2xl flex flex-col justify-center items-center">
                        <div className="card h-[25vmin] w-[40vmin] ">
                          <div className="h-[21vmin] w-[40vmin] flex flex-col justify-center items-center  ">
                            <img
                              src={val.Image}
                              className="max-w-full max-h-full object-contain"
                            ></img>
                          </div>
                        </div>
                        <p className=" hidden md:block text-lg lg:text-xl font-medium font-sans pl-2 pr-2 text-black">
                          Tool: {val.name}
                        </p>
                        <p className=" block md:hidden text-md lg:text-xl font-medium font-sans pl-2 pr-2 text-black">
                          {val.name}
                        </p>
                        <button className="bg-[#FFBF00] p-2 font-medium text-black mt-4 font-sans">
                          <a href={val.link}>{val.name}</a>
                        </button>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </>
        )) || <Navigate to="/FirstLogin" />}
    </>
  );
};

export default Index;
