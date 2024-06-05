const Footer = () => {
  const myStyle = {
    background: "black",
    font: "poppins",
    color: "white",
  };
  return (
    <>
      <div className="bg-black mt-10">
        <div
          className="pb-4 w-[100vw] lg:h-[50vh] flex flex-wrap gap-y-4"
          style={myStyle}
        >
          <div className="w-[100vw] lg:w-[50vmin]  flex flex-col mt-4 items-center">
            <p className="text-[25vmin] font-bold text-white ml-3">LV</p>
            <p className="text-[4vmin] font-bold text-white ml-3 mt-[-3vmin]">
              Venture Linked
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center lg:w-[calc(100vw-50vmin)]">
            <div className="w-[100vw] lg:w-[57vmin] mt-4 ">
              <p className="text-[7vmin] pt-2 font-bold text-white ml-3">
                Quick Links
              </p>
              <ul className="text-[5vmin] lg:text-[3vmin] mt-0 lg:mt-3  ml-3 space-y-2 ">
                <li>Login</li>
                <li>About</li>
                <li>Our Team</li>
                <li>Features</li>
              </ul>
            </div>
            <div className="w-[100vw] lg:w-[57vmin] mt-4 ">
              <p className="text-[7vmin] pt-2 font-bold text-white ml-3 ">
                Contact
              </p>
              <ul className="text-[5vmin] lg:text-[3vmin] mt-0 lg:mt-3  ml-3 space-y-2">
                <li>Email: venturelink2024@gmail.com</li>
                <li>Phone: +91 7585824862</li>
                <li></li>
                <li>Address: IIMT Incubation Center,Greater Noida,UP</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-white p-2 border-white border-t-2 flex justify-center items-center w-[100vw]">
          @venture Linked 2024
        </div>
      </div>
    </>
  );
};
export default Footer;
