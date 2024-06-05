import moment from "moment";
import { jsPDF } from "jspdf";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
const PartTime = () => {
  const [uname, setuname] = useState("");
  const [joiningdate, setJoiningDate] = useState("");
  const [compensation, setCompensation] = useState("");
  const [hours, setHours] = useState("");

  const getPDF = (e) => {
    e.preventDefault();
    const role = document.getElementById("role").value;
    const category = document.getElementById("category").value;
    const doc = jsPDF("p", "mm", "a4");
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
      `We the Venture Linked Team is delighted to extend you the offer of ${role}  in our firm, `,
      20,
      37
    );

    if (role === "UI/UX Designer") {
      doc.text(
        `we are sure that you will definitely perform very well in our UI/UX team and help our `,
        20,
        44
      );
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
    if (role === "Web Developer" || role === "Android Developer") {
      if (role === "Web Developer") {
        doc.text(
          `we are sure that you will definitely perform very well in our web Development team and help our `,
          20,
          44
        );
      } else {
        doc.text(
          `we are sure that you will definitely perform very well in our android Development team and help our `,
          20,
          44
        );
      }

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
    if (role === "Marketing Executive" || role === "Accountant") {
      if (role === "Marketing Executive") {
        doc.text(
          `we are sure that you will definitely perform very well in our marketing team and help our `,
          20,
          44
        );
      } else {
        doc.text(
          `we are sure that you will definitely perform very well in our accounting team and help our `,
          20,
          44
        );
      }
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
    doc.text(`1. Position: ${role}`, 20, 71);
    doc.text(`2. mode: Online`, 20, 81);
    doc.text(`3. Compensation: Rs. ${compensation} per annum`, 20, 91);
    doc.text(`4. type: Full-time`, 20, 101);
    if (category === "Technical") {
      doc.text(
        `4. Reporting To: Aritra Chakraborty ( Technical Head )`,
        20,
        111
      );
    } else {
      doc.text(
        `4. Reporting To: Abhishek Kr. Pandey ( Management Head )`,
        20,
        111
      );
    }
    doc.text(`5. Joining Date: ${joiningdate}`, 20, 121);
    doc.text(`6. Hours Needed : ${hours} per week`, 20, 131);
    doc.setFont("serif", "normal");
    doc.text(
      `The main roles & responsibilites for the ${role} role are:-`,
      20,
      141
    );
    if (role === "Web Developer") {
      doc.setFont("serif", "normal");
      doc.text(
        `1. Managing day to day web development updates as per needs of the project or feature`,
        20,
        151
      );
      doc.text(
        `2. Communicating with the intern and management team as per project requirements`,
        20,
        161
      );
      doc.text(
        `3. Develop robust APIs,updating features,resolve issues,testing,Code review of interns in the team`,
        20,
        171
      );
      doc.text(
        `4. Working primarily on react.js for frontend devlopment and express.js,node.js and MongoDB for backend`,
        20,
        181
      );
    }

    if (role === "Android Developer") {
      doc.setFont("serif", "normal");
      doc.text(
        `1. Managing day to day android development updates as per needs of the project or feature`,
        20,
        151
      );
      doc.text(
        `2. Communicating with the team and management as per project requirements`,
        20,
        161
      );
      doc.text(
        `3. Integrating APIs,training and mentoring interns,work on updates as needed in the project`,
        20,
        171
      );
      doc.text(
        `4. Manage techical Documentation, Review code,perform testing and handle deployment needs`,
        20,
        181
      );
    }

    if (role === "UI/UX Designer") {
      doc.setFont("serif", "normal");
      doc.text(`1. Managing day to day UI/UX updates as per needs.`, 20, 151);
      doc.text(
        `2. Communicating with team  and management as per project requirements`,
        20,
        161
      );
      doc.text(
        `3. Developing creative and attractive posts,banners,UI components as per need & training UI/UX interns`,
        20,
        171
      );
      doc.text(
        `4. Working primarily on canva for building the creative UI components and help to fix UX issues`,
        20,
        181
      );
    }
    if (role === "Marketing Executive") {
      doc.setFont("serif", "normal");
      doc.text(
        `1. Managing day to day digital marketing and social media needs of the firm`,
        20,
        151
      );
      doc.text(
        `2. Communicating with team and management as per requirements`,
        20,
        161
      );
      doc.text(
        `3. Running and managing ads on social media platform for gaining users in the application`,
        20,
        171
      );
      doc.text(
        `4. Regularly posting on social media platform making discussion with UI/UX team and interns.`,
        20,
        181
      );
    }
    if (role === "Accountant") {
      doc.setFont("serif", "normal");
      doc.text(
        `1. Recording and documenting all payment related task of the company`,
        20,
        151
      );
      doc.text(
        `2. Analyzing profits,costs,trends,preparing financial statements,managing payroll`,
        20,
        161
      );
      doc.text(
        `3. Participate in GST Filling , audits and provide all the documents as needed by the CA of the firm`,
        20,
        171
      );
      doc.text(
        `4. Managing and updating book of accounts and help in ensuring regulatory compliances of the firm`,
        20,
        181
      );
      doc.text(
        `5. Managing all kinds of financial and accounting related tasks for the firm`,
        20,
        191
      );
    }
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    if (category === "Technical") {
      doc.text(`Aritra Chakraborty`, 20, 227);
      doc.setFontSize(10);
      doc.text(`( Technical Head )`, 20, 234);
    } else {
      doc.text(`Abhishek Kr. Pandey`, 20, 227);
      doc.setFontSize(10);
      doc.text(`( Management Head )`, 20, 234);
    }
    doc.setFont("serif", "normal");
    doc.setFontSize(9.5);
    doc.text("Date: " + moment().format("Do MMM YYYY"), 20, 240);
    const uname1 = uname.split(" ");
    const unameRes = uname1.join("");
    doc.save(`${unameRes}_HiringLetter.pdf`);
  };
  return (
    <>
      <div className="bg-[#FFA62F] ">
        <div className="main pb-4 pt-5   w-[100vw] bg-[#FFA62F] flex justify-center items-center">
          <div className="mt-10 lg:mt-5 formArea bg-white w-[97vw] lg:w-[70vw]  p-2  lg:pt-7 flex flex-col justify-center items-center flex-wrap rounded-2xl">
            <div className="header">
              <p className="text-[5vmin] font-bold  mt-2">
                Please Fill the details for Employee Hiring Letter
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
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="Android Developer">
                          Android Developer
                        </option>
                        <option value="Marketing Executive">
                          Marketing Executive
                        </option>
                        <option value="Accountant">Accountant</option>
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
                        placeholder="Enter no of hours..."
                        onChange={(e) => {
                          setHours(e.target.value);
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
                <button className="bg-black text-white p-2" onClick={getPDF}>
                  Get Report
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default PartTime;
