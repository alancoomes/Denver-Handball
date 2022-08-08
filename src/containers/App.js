import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Media from "./Media/Media";
import Sponsors from "./Sponsors/Sponsors";
import WhatIsHandball from "./WhatIsHandball/WhatIsHandball";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/handball" element={<WhatIsHandball />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/media" element={<Media />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/sponsors" element={<Sponsors />}></Route>
        </Routes>
        <Header></Header>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
