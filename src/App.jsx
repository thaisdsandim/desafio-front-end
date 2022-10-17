import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Employees from "./components/Employees";
import Search from "./components/Search";
import axios from "axios";
import "./assets/styles/global.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/employees").then((response) => {
      setList(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Search />
        <Employees list={list} />
      </main>
    </div>
  );
}

export default App;
