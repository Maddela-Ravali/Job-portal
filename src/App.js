import "./App.css";
import Home from "./components/Home/Home";
import Jobs from "./components/Jobs/Jobs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import ApplyJobs from "./components/ApplyJobs/ApplyJobs";
import ContactUs from "./components/ContactUs/ContactUS";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/apply-job/:id" element={<ApplyJobs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
