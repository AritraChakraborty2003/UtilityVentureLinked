/* eslint-disable react/no-unescaped-entities */
const AboutPage = () => {
  return (
    <>
      <div className="abtHolder flex justify-center text-center mt-4">
        <p className="text-[10vmin] font-bold font-poppins">About Us</p>
      </div>
      <div className="abtHolder flex justify-center items-center flex-wrap mt-1">
        <div className="sec1 lg:h-[60vmin] w-[70vmin]  flex justify-center mt-[6vmin]">
          <div className="sec1 h-[40vmin] w-[70vmin]">
            <img
              src="./startupAbt.jpg"
              className="max-w-full max-h-full object-contain"
            ></img>
          </div>
        </div>
        <div className="sec2 lg:h-[60vmin] w-[99vw] lg:w-[81vmin] flex justify-start">
          <p className="ml-5 text-[3.65vmin] lg:text-[2.45vmin] font-poppins font-normal mt-5">
            Venture Drobe revolutionizes the Indian startup landscape by merging
            social media with entrepreneurship. It connects entrepreneurs,
            professionals, investors, and mentors, fostering collaboration and
            knowledge sharing. By democratizing access to resources, it empowers
            startups of all backgrounds. Through curated content and interactive
            forums, it cultivates a supportive community for learning and
            growth. Acting as a strategic hub, it facilitates partnerships
            between startups and industry players. Utilizing technology and
            data-driven insights, it provides tailored solutions for emerging
            ventures. Venture Drobe's vision is to propel India's startup
            ecosystem to new heights of innovation and prosperity through
            connectivity and empowerment.
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutPage;
