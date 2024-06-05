/* eslint-disable no-useless-concat */
import moment from "moment";
import { jsPDF } from "jspdf";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import SmallMeeting from "./SmallMeeting";

const MoMForm = () => {
  /* For Details */
  const [meetNo, setmeetNo] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [MoM, setMoM] = useState("main");

  /* For Agenda 1 */
  const [agenda1Heading, setAgenda1Heading] = useState("");
  const [agenda1p1, setAgenda1P1] = useState("");
  const [agenda1p2, setAgenda1P2] = useState("");
  const [agenda1p3, setAgenda1P3] = useState("");
  const [agenda1p4, setAgenda1P4] = useState("");
  const [agenda1Descr, setAgenda1Descr] = useState("");

  /* For Agenda 2 */
  const [agenda2Heading, setAgenda2Heading] = useState("");
  const [agenda2Descr, setAgenda2Descr] = useState("");
  const [agenda2p1, setAgenda2P1] = useState("");
  const [agenda2p2, setAgenda2P2] = useState("");
  const [agenda2p3, setAgenda2P3] = useState("");
  const [agenda2p4, setAgenda2P4] = useState("");

  /* For Agenda 3 */
  const [agenda3Heading, setAgenda3Heading] = useState("");
  const [agenda3Descr, setAgenda3Descr] = useState("");
  const [agenda3p1, setAgenda3P1] = useState("");
  const [agenda3p2, setAgenda3P2] = useState("");
  const [agenda3p3, setAgenda3P3] = useState("");
  const [agenda3p4, setAgenda3P4] = useState("");

  /* For Agenda 4 */
  const [agenda4Heading, setAgenda4Heading] = useState("");
  const [agenda4Descr, setAgenda4Descr] = useState("");
  const [agenda4p1, setAgenda4P1] = useState("");
  const [agenda4p2, setAgenda4P2] = useState("");
  const [agenda4p3, setAgenda4P3] = useState("");
  const [agenda4p4, setAgenda4P4] = useState("");

  const getPDF = (e) => {
    e.preventDefault();
    console.log(meetNo);
    console.log(title);
    console.log(category);

    console.log(document.getElementById("organizer").value);

    console.log(agenda1Heading);
    console.log(agenda1Descr);
    console.log(agenda1p1);
    console.log(agenda1p2);
    console.log(agenda1p3);
    console.log(agenda1p4);

    console.log(agenda2Heading);
    console.log(agenda2Descr);
    console.log(agenda2p1);
    console.log(agenda2p2);
    console.log(agenda2p3);
    console.log(agenda2p4);

    console.log(agenda3Heading);
    console.log(agenda3Descr);
    console.log(agenda3p1);
    console.log(agenda3p2);
    console.log(agenda3p3);
    console.log(agenda3p4);

    console.log(agenda4Heading);
    console.log(agenda4Descr);
    console.log(agenda4p1);
    console.log(agenda4p2);
    console.log(agenda4p3);
    console.log(agenda4p4);
    const organizer = document.getElementById("organizer").value;
    const doc = new jsPDF();
    doc.setFont("serif", "bold");
    doc.setFontSize(35);
    doc.text("Venture Linked", 20, 11);
    doc.setFont("serif", "normal");
    doc.setFontSize(11);
    doc.text("Minutes of meeting for - Meeting no: " + `${meetNo}`, 21, 17);
    doc.setFontSize(10);
    doc.text("Date: " + moment().format("Do MMM YYYY"), 21, 23);
    doc.setFontSize(10);
    doc.text("Title: " + `${title}`, 21, 30);
    doc.text("", 20, 57);
    doc.setFontSize(10);
    doc.text("Category: " + `${category}`, 21, 36);
    doc.setLineWidth(1);

    doc.line(20, 40, 200, 40);

    doc.setFontSize(20);
    doc.setFont("serif", "bold");
    doc.text("Agenda: ", 20, 47);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text("1. " + `${agenda1Heading}`, 20, 53);
    doc.setFontSize(12);
    doc.text("2. " + `${agenda2Heading}`, 20, 60);
    doc.setFontSize(12);
    doc.text("3. " + `${agenda3Heading}`, 20, 67);
    doc.setFontSize(12);
    doc.text("4. " + `${agenda4Heading}`, 20, 74);

    doc.setFont("serif", "bold");
    doc.setFontSize(14);
    doc.text(`${agenda1Heading}`, 20, 88);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(`${agenda1Descr}`, 20, 95);
    doc.text(`1. ${agenda1p1}`, 20, 102);
    doc.text(`2. ${agenda1p2}`, 20, 109);
    doc.text(`3. ${agenda1p3}`, 20, 116);
    doc.text(`4. ${agenda1p4}`, 20, 123);

    doc.setFont("serif", "bold");
    doc.setFontSize(14);
    doc.text(`${agenda2Heading}`, 20, 137);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(`${agenda2Descr}`, 20, 143);
    doc.text(`1. ${agenda2p1}`, 20, 150);
    doc.text(`2. ${agenda2p2}`, 20, 157);
    doc.text(`3. ${agenda2p3}`, 20, 163);
    doc.text(`4. ${agenda2p4}`, 20, 170);

    doc.setFont("serif", "bold");
    doc.setFontSize(14);
    doc.text(`${agenda3Heading}`, 20, 183);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(`${agenda3Descr}`, 20, 190);
    doc.text(`1. ${agenda3p1}`, 20, 197);
    doc.text(`2. ${agenda2p2}`, 20, 203);
    doc.text(`3. ${agenda3p3}`, 20, 210);
    doc.text(`4. ${agenda3p4}`, 20, 217);

    doc.setFont("serif", "bold");
    doc.setFontSize(14);
    doc.text(`${agenda4Heading}`, 20, 231);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(`${agenda4Descr}`, 20, 238);
    doc.text(`1. ${agenda4p1}`, 20, 245);
    doc.text(`2. ${agenda4p2}`, 20, 252);
    doc.text(`3. ${agenda3p3}`, 20, 259);
    doc.text(`4. ${agenda4p4}`, 20, 266);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(`Host: ${organizer}`, 20, 285);

    doc.save("report.pdf");
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
            onClick={() => setMoM("main")}
          >
            Discussion Meet
          </div>
          <div
            className="box2 border-white border-2 p-2 text-white hover:bg-white hover:text-black hover:font-bold"
            onClick={() => setMoM("small")}
          >
            Update Meet
          </div>
        </div>
        {MoM === "main" ? (
          <div className="main pb-4 pt-3  w-[100vw] bg-[#FFA62F] flex justify-center items-center">
            <div className="mt-4 lg:mt-5 formArea bg-white w-[97vw] lg:w-[90vw]  p-2  lg:pt-7 flex flex-col justify-center items-center flex-wrap rounded-2xl">
              <div className="header">
                <p className="text-[5vmin] font-bold  mt-2">
                  Please Fill the details for MoM report
                </p>
              </div>
              <form>
                <div className="mt-4 lg:mt-5 formArea bg-white w-[95vw] lg:w-[90vw]  lg:p-2   flex  justify-center items-center flex-wrap">
                  <div className="left pb-1 w-[97vw]  lg:w-[42vw] ">
                    <ul className="flex gap-y-4 flex-col">
                      <li>
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Meeting No..."
                          onChange={(e) => setmeetNo(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Meeting Title..."
                          onChange={(e) => setTitle(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Meeting Category..."
                          onChange={(e) => setCategory(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        Organized By{" "}
                        <select
                          class="organizer"
                          id="organizer"
                          className="w-11/12 bg-slate-200 p-2 mt-1"
                        >
                          <option value="Abhishek Kr. Pandey (Management Head)">
                            Management Head
                          </option>
                          <option value="Aritra Chakraborty (Technical Head)">
                            Technical Head
                          </option>
                        </select>{" "}
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda1 Heading..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda1Heading(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda1 Descr in 20 words..."
                          onChange={(e) => {
                            setAgenda1Descr(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda1 point1 in 20 words..."
                          onChange={(e) => {
                            setAgenda1P1(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda1 point2 in 20 words..."
                          onChange={(e) => {
                            setAgenda1P2(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda1 point3 in 20 words..."
                          onChange={(e) => {
                            setAgenda1P3(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda1 point4 in 20 words..."
                          onChange={(e) => {
                            setAgenda1P4(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda2 Heading..."
                          onChange={(e) => {
                            setAgenda2Heading(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda2 Descr in 20 words..."
                          onChange={(e) => {
                            setAgenda2Descr(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda2 point1 in 20 words..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda2P1(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda2 point2 in 20 words..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda2P2(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                    </ul>
                  </div>
                  <div className="right pb-1 w-[97vw]  lg:w-[42vw] ">
                    <ul className="flex gap-y-4 flex-col">
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda2 point3  in 20 words..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda2P3(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda2 point4  in 20 words..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda2P4(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda3 Heading..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda3Heading(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda3 Descr in 20 words..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda3Descr(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda3 point1 in 20 words..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda3P1(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda3 point2 in 20 words..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda3P2(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda3 point3  in 20 words..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda3P3(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda3 point4  in 20 words..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda3P4(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda4 Heading..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda4Heading(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda4 Descr in 20 words..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda4Descr(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda4 point1 in 20 words..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda4P1(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda4 point2 in 20 words..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda4P2(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda4 point3  in 20 words..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda4P3(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Agenda4 point4  in 20 words..."
                          onChange={(e) => {
                            if (e.target.value.split(" ").length <= 22) {
                              setAgenda4P4(e.target.value);
                            } else {
                              alert("Please make it in 22 word");
                            }
                          }}
                        ></input>
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
        ) : (
          <SmallMeeting />
        )}
      </div>
    </>
  );
};
export default MoMForm;
