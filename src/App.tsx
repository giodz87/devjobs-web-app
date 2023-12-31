import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  const [sunMoon, setSunMoon] = useState<boolean>(true);
  return (
    <>
      <Header sunMoon={sunMoon} setSunMoon={setSunMoon} />
      <Search sunMoon={sunMoon} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home sunMoon={sunMoon} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
