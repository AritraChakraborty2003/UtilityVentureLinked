import Header from "./Header";
import moment from "moment";
import { jsPDF } from "jspdf";
import { useState } from "react";
import { Link } from "react-router-dom";

const TechnicalDoc = () => {
  const [descrBody, setDescrBody] = useState("");
  const [P1, setP1] = useState("");
  const [P2, setP2] = useState("");
  const [P3, setP3] = useState("");
  const [P4, setP4] = useState("");
  const [P5, setP5] = useState("");

  const [bodyTech, setBodyTech] = useState("");
  const [TP1, setTP1] = useState("");
  const [TP2, setTP2] = useState("");
  const [TP3, setTP3] = useState("");
  const [TP4, setTP4] = useState("");
  const [TP5, setTP5] = useState("");

  const [apiBody, setAPIBody] = useState("");
  const [AP1, setAP1] = useState("");
  const [AP2, setAP2] = useState("");
  const [AP3, setAP3] = useState("");
  const [AP4, setAP4] = useState("");
  const [AP5, setAP5] = useState("");

  const [Bodybusiness, setBodyBusiness] = useState("");
  const [BP1, setBP1] = useState("");
  const [BP2, setBP2] = useState("");
  const [BP3, setBP3] = useState("");
  const [BP4, setBP4] = useState("");
  const [BP5, setBP5] = useState("");

  const [title, setTitle] = useState("");
  const [pId, setpId] = useState("");

  const getPDF = (e) => {
    e.preventDefault();
    const doc = new jsPDF("p", "px", [400, 400]); //Small Size for small meeting
    doc.setFont("serif", "bold");
    doc.setFontSize(35);
    doc.text("Venture Linked", 21, 24);
    doc.setFont("serif", "normal");
    doc.setFontSize(11);
    doc.text("Product Id: " + `${pId}`, 23, 36);
    doc.setFontSize(10);
    doc.text("Date: " + moment().format("Do MMM YYYY"), 23, 48);
    doc.setFontSize(10);
    doc.text("Title: " + `${title}`, 23, 60);
    doc.text("", 20, 57);
    doc.setFontSize(10);
    doc.text("Category: " + `Technical Documentation`, 23, 72);
    doc.setLineWidth(1);

    doc.line(20, 80, 340, 80);
    doc.setFont("serif", "bold");
    doc.setFontSize(25);

    doc.setFont("serif", "bold");
    doc.setFontSize(12);
    doc.text("Description: ", 23, 99);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(`${descrBody}`, 72, 99);
    doc.text("1. " + `${P1}`, 23, 110);
    doc.setFontSize(12);
    doc.text("2. " + `${P2}`, 23, 120);
    doc.setFontSize(12);
    doc.text("3. " + `${P3}`, 23, 130);
    doc.setFontSize(12);
    doc.text("4. " + `${P4}`, 23, 140);
    doc.setFontSize(12);
    doc.text("5. " + `${P5}`, 23, 150);

    doc.setFont("serif", "bold");
    doc.setFontSize(12);
    doc.text("Technologies: ", 23, 165);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(`${bodyTech}`, 76, 165);
    doc.text("1. " + `${TP1}`, 23, 175);
    doc.setFontSize(12);
    doc.text("2. " + `${TP2}`, 23, 185);
    doc.setFontSize(12);
    doc.text("3. " + `${TP3}`, 23, 195);
    doc.setFontSize(12);
    doc.text("4. " + `${TP4}`, 23, 205);
    doc.setFontSize(12);
    doc.text("5. " + `${TP5}`, 23, 215);

    doc.setFont("serif", "bold");
    doc.setFontSize(12);
    doc.text("Business & Usage: ", 23, 230);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(`${Bodybusiness}`, 94, 230);
    doc.text("1. " + `${BP1}`, 23, 240);
    doc.setFontSize(12);
    doc.text("2. " + `${BP2}`, 23, 250);
    doc.setFontSize(12);
    doc.text("3. " + `${BP3}`, 23, 260);
    doc.setFontSize(12);
    doc.text("4. " + `${BP4}`, 23, 270);
    doc.setFontSize(12);
    doc.text("5. " + `${BP5}`, 23, 280);

    doc.setFont("serif", "bold");
    doc.setFontSize(12);
    doc.text("APIs & its usage: ", 23, 295);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(`${apiBody}`, 91, 295);
    doc.text("1. " + `${AP1}`, 23, 305);
    doc.setFontSize(12);
    doc.text("2. " + `${AP2}`, 23, 315);
    doc.setFontSize(12);
    doc.text("3. " + `${AP3}`, 23, 325);
    doc.setFontSize(12);
    doc.text("4. " + `${AP4}`, 23, 335);
    doc.setFontSize(12);
    doc.text("5. " + `${AP5}`, 23, 345);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);

    doc.text(`Aritra Chakraborty`, 23, 385);
    doc.setFontSize(10);
    doc.text(`( Technical Head )`, 23, 394);

    doc.save("report.pdf");
  };
  return (
    <>
      <Header />
      <div className="bg-[#FFA62F] h-[calc(100vh-15vmin)] lg:h-[calc(100vh-10vmin)]">
        <button className="bg-slate-200 mt-2 ml-2 p-2">
          <Link to="/Index">Go Back</Link>
        </button>
        <div className="bg-[#FFA62F]  flex justify-center items-center">
          <div className="main pb-4 pt-3  w-[100vw] bg-[#FFA62F] flex justify-center items-center">
            <div className="mt-4 lg:mt-2 formArea bg-white w-[97vw] lg:w-[90vw]  p-2  lg:pt-7 flex flex-col justify-center items-center flex-wrap rounded-2xl">
              <div className="header">
                <p className="text-[5vmin] font-bold  mt-2">
                  Please Fill the details for technical documentation
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
                          placeholder="Enter Title of doc in 20 words..."
                          onChange={(e) => setTitle(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter Product Id in 20 words..."
                          onChange={(e) => setpId(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter description body in 20 words..."
                          onChange={(e) => setDescrBody(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point1 for descr in 20 words..."
                          onChange={(e) => setP1(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point2 for descr in 20 words..."
                          onChange={(e) => setP2(e.target.value)}
                        ></input>
                      </li>

                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point3 for descr in 20 words..."
                          onChange={(e) => setP3(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point4 for descr in 20 words..."
                          onChange={(e) => {
                            setP4(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point5 for descr in 20 words..."
                          onChange={(e) => {
                            setP5(e.target.value);
                          }}
                        ></input>
                      </li>

                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter body of technologies in 20 words..."
                          onChange={(e) => setBodyTech(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point1 for tech used in 20 words..."
                          onChange={(e) => setTP1(e.target.value)}
                        ></input>
                      </li>

                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point2 for tech used in 20 words..."
                          onChange={(e) => setTP2(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point3 for tech used in 20 words..."
                          onChange={(e) => {
                            setTP3(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point4 for tech used in 20 words..."
                          onChange={(e) => {
                            setTP4(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point5 for tech used in 20 words..."
                          onChange={(e) => {
                            setTP5(e.target.value);
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
                          placeholder="Enter point4 for tech used in 20 words..."
                          onChange={(e) => {
                            setTP4(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point5 for tech used in 20 words..."
                          onChange={(e) => {
                            setTP5(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter API & integrations body in 20 words..."
                          onChange={(e) => setAPIBody(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point1 for APIs in 20 words..."
                          onChange={(e) => setAP1(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point2 for APIs in 20 words..."
                          onChange={(e) => setAP2(e.target.value)}
                        ></input>
                      </li>

                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point3 for APIs in 20 words..."
                          onChange={(e) => setAP3(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point4 for APIs in 20 words..."
                          onChange={(e) => {
                            setAP4(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point5 for APIs in 20 words..."
                          onChange={(e) => {
                            setAP5(e.target.value);
                          }}
                        ></input>
                      </li>

                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter body of business in 20 words..."
                          onChange={(e) => setBodyBusiness(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point1 for business in 20 words..."
                          onChange={(e) => setBP1(e.target.value)}
                        ></input>
                      </li>

                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point2 for business in 20 words..."
                          onChange={(e) => setBP2(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point3 for business in 20 words..."
                          onChange={(e) => {
                            setBP3(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point4 for business in 20 words..."
                          onChange={(e) => {
                            setBP4(e.target.value);
                          }}
                        ></input>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          className="w-11/12 bg-slate-200 p-2"
                          placeholder="Enter point5 for business in 20 words..."
                          onChange={(e) => {
                            setBP5(e.target.value);
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
      </div>
    </>
  );
};
export default TechnicalDoc;
