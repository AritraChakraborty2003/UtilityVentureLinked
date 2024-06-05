/* eslint-disable no-undef */
import moment from "moment";
import { jsPDF } from "jspdf";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import HiringDocEmployee from "./HiringDocEmployee";
import PartTime from "./PartTime";
const HiringDoc = () => {
  const [uname, setuname] = useState("");
  const [joiningdate, setJoiningDate] = useState("");
  const [compensation, setCompensation] = useState("");
  const [duration1, setDuration] = useState("");
  const [hours, setHours] = useState("");
  const [letter, setLetter] = useState("intern");
  const getPDF = (e) => {
    e.preventDefault();
    const role = document.getElementById("role").value;
    const category = document.getElementById("category").value;
    const doc = jsPDF();
    doc.setFont("serif", "bold");
    doc.setFontSize(35);
    doc.text("Venture Linked", 20, 17);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.setLineWidth(1);

    doc.line(20, 22, 190, 22);
    doc.text(`Dear ${uname},`, 20, 29);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(
      `We the Venture Linked Team is delighted to extend you the offer of ${role} intern in our firm, `,
      20,
      37
    );
    doc.text(
      `we are sure that you will definitely perform very well in our ${role} team and help our `,
      20,
      44
    );
    if (role === "UI/UX") {
      doc.text(
        `startup grow.Your skills are really very impressive and the portfolio you developed is really very`,
        20,
        51
      );
      doc.text(
        `competetive.The creative skills you have shown during the interview proccess also make`,
        20,
        58
      );
    }
    if (role === "Web Development" || role === "Android Development") {
      doc.text(
        `startup grow.Your skills are really very impressive and the projects you developed is really very`,
        20,
        51
      );
      doc.text(
        `competetive.The problem solving skills you have shown during the interview proccess also make`,
        20,
        58
      );
    }
    if (role === "Marketing") {
      doc.text(
        `startup grow.Your skills are really very impressive and the experience you gained is really very`,
        20,
        51
      );
      doc.text(
        `competetive.The problem solving skills you have shown during the interview proccess also make`,
        20,
        58
      );
    }

    doc.text(
      `you the best candidate for this role.The offer details of the internship is as provided below:-`,
      20,
      64
    );
    doc.text(`1. Position: ${role} Intern`, 20, 71);
    doc.text(`2. mode: Online`, 20, 81);
    doc.text(`3. Compensation: ${compensation}`, 20, 91);
    if (category === "Technical") {
      doc.text(
        `4. Reporting To: Aritra Chakraborty ( Technical Head )`,
        20,
        101
      );
    } else {
      doc.text(
        `4. Reporting To: Abhishek Kr. Pandey ( Management Head )`,
        20,
        101
      );
    }
    doc.text(`5. Joining Date: ${joiningdate}`, 20, 111);
    doc.text(`6. Timing : Flexible`, 20, 121);
    doc.text(`7. Hours Neeed : ${hours} hours/week(5 days week)`, 20, 131);
    doc.text(`8. Duration : ${duration1} months`, 20, 141);
    doc.setFont("serif", "normal");
    doc.text(
      `The main roles & responsibilites for the ${role} intern role are:-`,
      20,
      151
    );
    if (role === "Web Development") {
      doc.setFont("serif", "normal");
      doc.text(
        `1. Managing day to day web development updates as per needs of the project or feature`,
        20,
        161
      );
      doc.text(
        `2. Communicating with the team as per project requirements`,
        20,
        171
      );
      doc.text(
        `3. Developing robust APIs and integrating its data in the frontend as per the need`,
        20,
        181
      );
      doc.text(
        `4. Working primarily on react.js for frontend devlopment and express.js,node.js and MongoDB for backend`,
        20,
        191
      );
    }

    if (role === "Android Development") {
      doc.setFont("serif", "normal");
      doc.text(
        `1. Managing day to day android development updates as per needs of the project or feature`,
        20,
        161
      );
      doc.text(
        `2. Communicating with the team as per project requirements`,
        20,
        171
      );
      doc.text(
        `3. Integrating APIs with android application using its Libraries and display data in recyclerView`,
        20,
        181
      );
      doc.text(
        `4. Working primarily on java and creating nice looking UI of VentureLink app using XML`,
        20,
        191
      );
    }

    if (role === "UI/UX") {
      doc.setFont("serif", "normal");
      doc.text(`1. Managing day to day UI/UX updates as per needs.`, 20, 161);
      doc.text(
        `2. Communicating with team as per project requirements`,
        20,
        171
      );
      doc.text(
        `3. Developing creative and attractive posts,banners,UI components as per need`,
        20,
        181
      );
      doc.text(
        `4. Working primarily on canva for building the creative UI components and help to fix UX issues`,
        20,
        191
      );
    }
    if (role === "Marketing") {
      doc.setFont("serif", "normal");
      doc.text(
        `1. Managing day to day digital marketing and social media needs of the firm`,
        20,
        161
      );
      doc.text(`2. Communicating with team as per requirements`, 20, 171);
      doc.text(
        `3. Running and managing ads on social media platform for gaining users in the application`,
        20,
        181
      );
      doc.text(
        `4. Regularly posting on social media platform making discussion with UI/UX team.`,
        20,
        191
      );
    }

    doc.text(
      `This internship will not only help you to boost your skills but also have multiple benefits which are:`,
      20,
      201
    );
    doc.text(`1. Letter of recommendation`, 20, 211);
    doc.text(`2. Internship Certificate `, 20, 221);
    doc.text(`3. Flexible work Hours`, 20, 231);
    doc.text(
      `4. For full-time jobs priority will be given to top performing interns `,
      20,
      241
    );
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    if (category === "Technical") {
      doc.text(`Aritra Chakraborty`, 20, 282);
      doc.setFontSize(10);
      doc.text(`( Technical Head )`, 20, 287);
    } else {
      doc.text(`Abhishek Kr. Pandey`, 20, 282);
      doc.setFontSize(10);
      doc.text(`( Management Head )`, 20, 287);
    }
    doc.setFont("serif", "normal");
    doc.setFontSize(9.5);
    doc.text("Date: " + moment().format("Do MMM YYYY"), 20, 291);

    doc.save(`${uname}HiringLetter.pdf`);
  };
  return (
    <>
      <Header />
      <div className="bg-[#FFA62F] ">
        <button className="bg-slate-200 mt-2 ml-2 p-2">
          <Link to="/Index">Go Back</Link>
        </button>
        <div className="flex gap-x-4 p-2 mt-3 w-12/12 justify-center items-center">
          <div
            className="box1 border-white border-2 p-2 text-white hover:bg-white hover:text-black hover:font-bold"
            onClick={() => setLetter("intern")}
          >
            Intern Letter
          </div>
          <div
            className="box2 border-white border-2 p-2 text-white hover:bg-white hover:text-black hover:font-bold"
            onClick={() => setLetter("employee")}
          >
            Employee Letter
          </div>
          <div
            className="box2 border-white border-2 p-2 text-white hover:bg-white hover:text-black hover:font-bold"
            onClick={() => setLetter("partTime")}
          >
            PartTime
          </div>
        </div>
        {letter === "intern" && (
          <div>
            <div className="main pb-4 pt-1   w-[100vw] bg-[#FFA62F] flex justify-center items-center">
              <div className="mt-10 lg:mt-5 formArea bg-white w-[97vw] lg:w-[70vw]  p-2  lg:pt-7 flex flex-col justify-center items-center flex-wrap rounded-2xl">
                <div className="header">
                  <p className="text-[5vmin] font-bold  mt-2">
                    Please Fill the details for Intern Hiring Letter
                  </p>
                </div>
                <form>
                  <div className="mt-10 lg:mt-5 formArea bg-white w-[95vw] lg:w-[50vw]  lg:p-2   flex  justify-center items-center flex-wrap">
                    <div className="left pb-1 w-[97vw]  lg:w-[50vw] ">
                      <ul className="flex gap-y-4 flex-col">
                        <li>
                          <input
                            type="text"
                            className="w-11/12 bg-slate-200 p-2"
                            placeholder="Enter candidate name..."
                            onChange={(e) => setuname(e.target.value)}
                          ></input>
                        </li>
                        <li>
                          Candidate Role:
                          <select
                            class="role"
                            id="role"
                            className="w-11/12 bg-slate-200 p-2 mt-1"
                          >
                            <option value="UI/UX">UI/UX</option>
                            <option value="Web Development">
                              Web Development
                            </option>
                            <option value="Android Development">
                              Android Development
                            </option>
                            <option value="Marketing">Marketing</option>
                          </select>{" "}
                        </li>

                        <li>
                          <input
                            type="text"
                            className="w-11/12 bg-slate-200 p-2"
                            placeholder="Enter Compensation..."
                            onChange={(e) => {
                              setCompensation(e.target.value);
                            }}
                          ></input>
                        </li>
                        <li>
                          {" "}
                          <input
                            type="text"
                            className="w-11/12 bg-slate-200 p-2"
                            placeholder="Enter joining date..."
                            onChange={(e) => {
                              setJoiningDate(e.target.value);
                            }}
                          ></input>
                        </li>
                        <li>
                          {" "}
                          <input
                            type="text"
                            className="w-11/12 bg-slate-200 p-2"
                            placeholder="Enter Duration..."
                            onChange={(e) => {
                              setDuration(e.target.value);
                            }}
                          ></input>
                        </li>
                        <li>
                          {" "}
                          <input
                            type="text"
                            className="w-11/12 bg-slate-200 p-2"
                            placeholder="Set Hours needed..."
                            onChange={(e) => {
                              setHours(e.target.value);
                            }}
                          ></input>
                        </li>
                        <li>
                          Set Category{" "}
                          <select
                            class="category"
                            id="category"
                            className="w-11/12 bg-slate-200 p-2 mt-1"
                          >
                            <option value="Technical">Technical</option>
                            <option value="Management">Management</option>
                          </select>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-center items-center mt-2">
                    <button
                      className="bg-black text-white p-2"
                      onClick={getPDF}
                    >
                      Get Report
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        {letter === "employee" && <HiringDocEmployee />}
        {letter === "partTime" && <PartTime />}
      </div>
    </>
  );
};
export default HiringDoc;
