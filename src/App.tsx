import { useEffect, useState } from "react";
import { MyContext } from "./context";
import data from "../data.json";
import Header from "./components/Header";
import Search from "./components/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FilterByLocation from "./components/FilterByLocation";
import Information from "./pages/Information";
export type MyContextProps = {
  sunMoon: boolean;
  setSunMoon: (sunMoon: boolean) => void;
  searchHidden: boolean;
  setSearchHidden: (value: boolean) => void;
  search: string | undefined;
  setSearch: (search: string) => void;
  companyData: any;
  check: boolean;
  setCheck: (check: boolean) => void;
  location: string | undefined;
  setLocation: (Location: string) => void;
  fullTime: string | undefined;
  setFullTime: (fullTime: string) => void;
};

function App() {
  const [sunMoon, setSunMoon] = useState<boolean>(true);
  const [searchHidden, setSearchHidden] = useState<boolean>(true);
  const [search, setSearch] = useState<string>();

  const [check, setCheck] = useState<boolean>(false);
  const [location, setLocation] = useState<string>();
  const [fullTime, setFullTime] = useState<string>();

  const companyData = data.filter(
    (item) =>
      item.position.toLowerCase().includes(search || "") &&
      item.location.toLowerCase().includes(location || "") &&
      item.contract.toLowerCase().includes(fullTime || "")
  );

  useEffect(() => {
    const body = document.body;
    if (sunMoon) {
      body.style.background = "#F4F6F8";
    } else {
      body.style.background = "#121721";
    }
  }, [sunMoon]);
  return (
    <MyContext.Provider
      value={{
        sunMoon,
        setSunMoon,
        search,
        setSearch,
        companyData,
        check,
        setCheck,
        location,
        setLocation,
        fullTime,
        setFullTime,
        searchHidden,
        setSearchHidden,
      }}
    >
      <BrowserRouter>
        <Header />
        {searchHidden ? <Search /> : ""}
        {check ? <FilterByLocation /> : ""}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
