import Header from "./Header";

const Teampage = () => {
  const myStyle = {
    background: "orange",
    font: "poppins",
  };
  return (
    <>
      <Header />
      <div
        className="h-[50vh] w-[100vw] flex justify-center items-center"
        style={myStyle}
      >
        <p className="text-[14vmin] font-bold">Our Team</p>
      </div>

      <div className="mt-4 cardHolder w-[100vw] pb-2 flex justify-center  items-center flex-wrap gap-x-7 gap-y-4 2xl:space-y-0 font-poppins">
        <div className="card bg-white  opacity-95 w-[40vmin] h-[50vmin] flex  flex-col justify-center items-center">
          <div>
            <div className="imgHolder h-[40vmin] w-[40vmin]  ">
              <img
                src="./MH.jpg"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
          </div>{" "}
          <p className="mt-1 font-medium text-[3vmin] ml-[-5vmin]">
            Founder & Business Head
          </p>
        </div>
        <div className="card bg-white  opacity-95 w-[40vmin] h-[50vmin] flex  flex-col justify-center items-center">
          <div>
            <div className="imgHolder h-[40vmin] w-[40vmin]  ">
              <img
                src="./TH.jpg"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
          </div>{" "}
          <p className="mt-1 font-medium text-[3vmin] ml-[-5vmin]">
            Founder & Business Head
          </p>
        </div>
      </div>
    </>
  );
};
export default Teampage;
