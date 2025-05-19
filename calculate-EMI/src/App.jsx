import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ErrorPage from "./pages/ErrorPage";
import ExchangeRates from "./pages/ExchangeRates";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <>    
    <Header/>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Router>
    </>

  );
};

export default App;
