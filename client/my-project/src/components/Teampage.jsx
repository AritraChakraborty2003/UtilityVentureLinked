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
    </>
  );
};
export default Teampage;
