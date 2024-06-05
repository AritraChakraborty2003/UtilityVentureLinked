const Features = () => {
  const myStyle = {
    background: "orange",
    font: "poppins",
  };
  return (
    <>
      <div
        className="pb-4 w-[100vw] mt-10 flex flex-col justify-start items-center"
        style={myStyle}
      >
        <p className="text-[13vmin] font-bold overflow-hidden mt-4">Features</p>
        <div className="mt-4 cardHolder w-[100vw] pb-2 flex justify-center  items-center flex-wrap gap-x-4 gap-y-4 2xl:space-y-0 font-poppins">
          <div className="card bg-white opacity-95 w-[45vmin] h-[50vmin] flex flex-col justify-center items-center">
            <div className="imgHolder  h-[30vmin] w-[30vmin] ">
              <img
                src="./network.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <p className="mt-6 font-medium text-2xl">Networking</p>
          </div>
          <div className="card bg-white opacity-95 w-[45vmin] h-[50vmin] flex  flex-col justify-center items-center">
            <div className="imgHolder h-[30vmin] w-[30vmin] ">
              <img
                src="./mentorship.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <p className="mt-6 font-medium text-2xl">Mentorship</p>
          </div>
          <div className="card bg-white opacity-95 w-[45vmin] h-[50vmin] flex flex-col justify-center items-center">
            <div className="imgHolder h-[30vmin] w-[30vmin] ">
              <img
                src="./marketing.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <p className="mt-6 font-medium text-2xl">Marketing</p>
          </div>
          <div className="card bg-white opacity-95 w-[45vmin] h-[50vmin] flex flex-col justify-center items-center">
            <div className="imgHolder h-[30vmin] w-[30vmin] ">
              <img
                src="./network.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <p className="mt-6 font-medium text-2xl">Growth</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
