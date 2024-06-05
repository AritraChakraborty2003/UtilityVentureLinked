/* eslint-disable no-unused-vars */
import moment from "moment";
import { jsPDF } from "jspdf";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
const SmallMeeting = () => {
  const [meetNo, setmeetNo] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  /* For Agenda 1 */
  const [agenda1Heading, setAgenda1Heading] = useState("");
  const [agenda1p1, setAgenda1P1] = useState("");
  const [agenda1p2, setAgenda1P2] = useState("");
  const [agenda1p3, setAgenda1P3] = useState("");

  /* For Agenda 2 */
  const [agenda2Heading, setAgenda2Heading] = useState("");
  const [agenda2p1, setAgenda2P1] = useState("");
  const [agenda2p2, setAgenda2P2] = useState("");
  const [agenda2p3, setAgenda2P3] = useState("");

  /* For Agenda 3 */
  const [agenda3Heading, setAgenda3Heading] = useState("");
  const [agenda3p1, setAgenda3P1] = useState("");
  const [agenda3p2, setAgenda3P2] = useState("");
  const [agenda3p3, setAgenda3P3] = useState("");
  const getPDF = (e) => {
    e.preventDefault();
    const doc = new jsPDF("p", "px", [400, 400]); //Small Size for small meeting
    doc.setFont("serif", "bold");
    doc.setFontSize(35);
    doc.text("Venture Linked", 20, 24);
    doc.setFont("serif", "normal");
    doc.setFontSize(11);
    doc.text("Minutes of meeting for - Meeting no: " + `${meetNo}`, 21, 34);
    doc.setFontSize(10);
    doc.text("Date: " + moment().format("Do MMM YYYY"), 21, 46);
    doc.setFontSize(10);
    doc.text("Title: " + `${title}`, 21, 58);
    doc.text("", 20, 57);
    doc.setFontSize(10);
    doc.text("Category: " + `${category}`, 21, 70);
    doc.setLineWidth(1);

    doc.line(20, 76, 270, 76);

    doc.setFontSize(25);
    doc.setFont("serif", "bold");
    doc.text("Agenda: ", 20, 95);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(`1. ${agenda1Heading}`, 20, 111);
    doc.setFontSize(12);
    doc.text(`2. ${agenda2Heading} `, 20, 127);
    doc.setFontSize(12);
    doc.text(`3. ${agenda3Heading}`, 20, 143);
    doc.setFont("serif", "bold");
    doc.setFontSize(15);
    doc.text(`${agenda1Heading}`, 20, 158);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(`1. ${agenda1p1}`, 20, 172);
    doc.text(`2. ${agenda1p2}`, 20, 186);
    doc.text(`3. ${agenda1p3}`, 20, 200);
    doc.setFont("serif", "bold");
    doc.setFontSize(15);
    doc.text(`${agenda2Heading}`, 20, 215);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(`1. ${agenda2p1}`, 20, 229);
    doc.text(`2. ${agenda2p2}`, 20, 243);
    doc.text(`3. ${agenda2p3}`, 20, 257);
    doc.setFontSize(15);
    doc.setFont("serif", "bold");
    doc.text(`${agenda3Heading}`, 20, 272);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(`1. ${agenda3p1}`, 20, 286);
    doc.text(`2. ${agenda3p2}`, 20, 300);
    doc.text(`3. ${agenda3p3}`, 20, 314);
    const org = document.getElementById("organizer").value;
    doc.text(`${org}`, 20, 374);
    doc.setFontSize(10);
    doc.save("SmallMeet.pdf");
  };
  return (
    <>
      <div className="bg-[#FFA62F]">
        <div className="main pb-4 pt-3 lg:h-[100vh]  w-[100vw] bg-[#FFA62F] flex justify-center items-center">
          <div className="mt-4 lg:mt-2 formArea bg-white w-[97vw] lg:w-[90vw]  p-2  lg:pt-7 flex flex-col justify-center items-center flex-wrap rounded-2xl">
            <div className="header">
              <p className="text-[5vmin] font-bold  mt-2">
                Please Fill the details for Daily Meet MoM
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
                        placeholder="Agenda1 point 1 in 20 words..."
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
                  </ul>
                </div>

                <div className="right pb-1 w-[97vw]  lg:w-[42vw] ">
                  <ul className="flex gap-y-4 flex-col">
                    <li>
                      {" "}
                      <input
                        type="text"
                        className="w-11/12 bg-slate-200 p-2"
                        placeholder="Agenda2  Heading  in 20 words..."
                        onChange={(e) => {
                          if (e.target.value.split(" ").length <= 22) {
                            setAgenda2Heading(e.target.value);
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
                        placeholder="Agenda2 point1  in 20 words..."
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
                        placeholder="Agenda2 point2 in 20 words ..."
                        onChange={(e) => {
                          if (e.target.value.split(" ").length <= 22) {
                            setAgenda2P2(e.target.value);
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
                        placeholder="Agenda2 point3 in 20 words..."
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
                        placeholder="Agenda3 heading in 20 words..."
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
                        placeholder="Agenda3 point2  in 20 words..."
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
export default SmallMeeting;
