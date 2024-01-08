import { useEffect, useState } from "react";
import { MyContext } from "./context";
import data from "../data.json";
import Header from "./components/Header";
import Search from "./components/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FilterByLocation from "./components/FilterByLocation";
import Information from "./pages/Information";
import ScrollToTop from "./utils/ScrollOnTop";
export type MyContextProps = {
  sunMoon: boolean;
  setSunMoon: (sunMoon: boolean) => void;
  searchHidden: boolean;
  setSearchHidden: (value: boolean) => void;
  search: string | undefined;
  setSearch: (search: string) => void;
  dataFilter: any;
  dataMap: any;
  check: boolean;
  setCheck: (check: boolean) => void;
  location: string | undefined;
  setLocation: (Location: string) => void;
  fullTime: boolean;
  setFullTime: (fullTime: boolean) => void;
};

function App() {
  const [sunMoon, setSunMoon] = useState<boolean>(true);
  const [searchHidden, setSearchHidden] = useState<boolean>(true);
  const [check, setCheck] = useState<boolean>(false);

  const [search, setSearch] = useState<string>("");
  const [fullTime, setFullTime] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("");

  const [dataMap, setDataMap] = useState<any>([...data]);

  const dataFilter = () => {
    const companyData = data.filter(
      (item: { position: string; location: string; contract: string }) =>
        item.position.toLowerCase().includes(search || "") &&
        item.location.toLowerCase().includes(location || "") &&
        (fullTime ? item.contract.toLowerCase().includes("full time") : true)
    );

    setDataMap([...companyData]);
  };

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
        dataFilter,
        check,
        setCheck,
        location,
        setLocation,
        fullTime,
        setFullTime,
        searchHidden,
        setSearchHidden,
        dataMap,
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        {searchHidden ? <Search /> : ""}
        {check ? <FilterByLocation /> : ""}

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/:location" element={<Information />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
