import React from "react";

import { Testimonials, Footer, Header, SpecialServ } from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Testimonials />
    <SpecialServ />
    <Footer />
  </div>
);

export default App;
