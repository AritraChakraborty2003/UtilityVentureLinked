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
        <div className="card bg-white shadow-2xl opacity-95 w-[40vmin] h-[50vmin] flex  flex-col justify-center items-center">
          <div className="imgHolder h-[30vmin] w-[30vmin] rounded-xl ">
            <img
              src="./MH.jpg"
              className="max-w-full max-h-full object-contain"
            ></img>
          </div>
          <p className="mt-6 font-medium text-[3vmin]">
            Founder & Business Head
          </p>
        </div>
        <div className="card  bg-white shadow-2xl  opacity-95 w-[45vmin] h-[50vmin] flex flex-col justify-center items-center">
          <div className="imgHolder  h-[30vmin] w-[30vmin]  rounded-xl ">
            <img
              src="./TH.jpg"
              className="max-w-full max-h-full object-contain"
            ></img>
          </div>
          <p className="mt-6 font-medium text-[3vmin]">
            Founder & Technical Head
          </p>
        </div>
      </div>
    </>
  );
};
export default Teampage;
