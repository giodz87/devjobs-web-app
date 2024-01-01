import { useState } from "react";
import { MyContext } from "./context";
import data from "../data.json";
import Header from "./components/Header";
import Search from "./components/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
export interface MyContextProps {
  sunMoon: boolean;
  setSunMoon: React.Dispatch<React.SetStateAction<boolean>>;
  search: string | undefined;
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
  companyData: any;
}

function App() {
  const [sunMoon, setSunMoon] = useState<boolean>(true);
  const [search, setSearch] = useState<string>();

  const companyData = data.filter((item) =>
    item.company.toLowerCase().includes(search || "")
  );
  return (
    <MyContext.Provider
      value={{
        sunMoon,
        setSunMoon,
        search,
        setSearch,
        companyData,
      }}
    >
      <BrowserRouter>
        <Header />
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
