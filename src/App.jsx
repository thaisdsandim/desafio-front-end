import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Employees from "./components/Employees";
import axios from "axios";
import "./assets/styles/global.css";

function App() {
  const [list, setList] = useState([]);
  const [initial, setInitial] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/employees").then((response) => {
      setList(response.data);
      setInitial(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Search list={list} setList={setList} initial={initial} />
        <Employees list={list} />
      </main>
    </div>
  );
}

export default App;
