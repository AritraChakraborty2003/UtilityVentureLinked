const Features = () => {
  const myStyle = {
    background: "orange",
    font: "poppins",
  };
  return (
    <>
      <div
        className="pb-6 w-[100vw] mt-10 flex flex-col justify-start items-center"
        style={myStyle}
      >
        <p className="text-[13vmin] font-bold overflow-hidden mt-4">Features</p>
        <div className="mt-4 cardHolder w-[100vw] pb-2 flex justify-center  items-center flex-wrap gap-x-5 2xl:gap-x-5 gap-y-4 2xl:space-y-0 font-poppins">
          <div className="card bg-white opacity-95 w-[40vmin] h-[40vmin] flex flex-col justify-center items-center">
            <div className="imgHolder  h-[25vmin] w-[37vmin] flex justify-center items-center">
              <img
                src="./network.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <p className="mt-6 font-medium text-[4vmin]">Networking</p>
          </div>
          <div className="card bg-white opacity-95 w-[40vmin] h-[40vmin] flex  flex-col justify-center items-center">
            <div className="imgHolder  h-[25vmin] w-[37vmin] flex justify-center items-center">
              <img
                src="./mentorship.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <p className="mt-6 font-medium text-[4vmin]">Mentorship</p>
          </div>
          <div className="card bg-white opacity-95 w-[40vmin] h-[40vmin] flex flex-col justify-center items-center">
            <div className="imgHolder  h-[25vmin] w-[37vmin] flex justify-center items-center ">
              <img
                src="./marketing.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <p className="mt-6 font-medium text-[4vmin]">Marketing</p>
          </div>
          <div className="card bg-white opacity-95 w-[40vmin] h-[40vmin] flex flex-col justify-center items-center">
            <div className="imgHolder  h-[25vmin] w-[37vmin] flex justify-center items-center  ">
              <img
                src="./growth.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <p className="mt-6 font-medium text-[4vmin]">Growth</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
