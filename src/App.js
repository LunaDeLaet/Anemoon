import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// pages
import Welkom from "./pages/Welkom";
import Teamleden from "./pages/Teamleden";
import Onderzoek from "./pages/Onderzoek";
import Therapie from "./pages/Therapie";
import Tarieven from "./pages/Tarieven";
import Contact from "./pages/Contact";

//components
import { Header, Footer } from "./components/HeaderFooter"


function App() {
  return (
    <Router>
      <Header />
      <main className="app">
      <Routes>
      <Route exact path="/" element={<Welkom />} />
      <Route exact path="teamleden" element={<Teamleden />} />
      <Route exact path="psychodiagnostisch-onderzoek" element={<Onderzoek />} />
      <Route exact path="therapie-begeleiding" element={<Therapie />} />
      <Route exact path="tarieven" element={<Tarieven />} />
      <Route exact path="contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
