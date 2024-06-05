import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./components/Index";
import Footer from "./components/Footer";
import MoMForm from "./components/MoMForm";
import UiDoc from "./components/UiDoc";
import First from "./components/First";
import FirstLogin from "./components/FirstLogin";
import TechnicalDoc from "./components/TechnicalDoc";
import HiringDoc from "./components/Hiringdoc";
import HiringDocEmployee from "./components/HiringDocEmployee";
import SmallMeeting from "./components/SmallMeeting";
import NoticePage from "./components/NoticePage";
import TerminatePage from "./components/TerminatePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />}></Route>
        <Route path="/Index" element={<Index />}></Route>
        <Route path="/Header" element={<Header />}></Route>
        <Route path="/NoticePage" element={<NoticePage />}></Route>
        <Route path="/Footer" element={<Footer />}></Route>
        <Route path="/MoMForm" element={<MoMForm />}></Route>
        <Route path="/TerminatePage" element={<TerminatePage />}></Route>
        <Route path="/HireEmployee" element={<HiringDocEmployee />}></Route>
        <Route path="/HireForm" element={<HiringDoc />}></Route>
        <Route path="/SmallMeeting" element={<SmallMeeting />}></Route>
        <Route path="/FirstLogin" element={<FirstLogin />}></Route>
        <Route path="/Uidoc" element={<UiDoc />}></Route>
        <Route path="/technicalDoc" element={<TechnicalDoc />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
