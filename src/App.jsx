
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashLoader from "./components/SplashLoader";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeAre from "./pages/WhatWeAre";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <SplashLoader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-are" element={<WhatWeAre />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </SplashLoader>
    </BrowserRouter>
  );
}

export default App;
