import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Employees from "./components/Employees";
import Search from "./components/Search";
import axios from "axios";
import "./assets/styles/global.css";

/* FUNÇÃO QUE GERA O APP */

/* Esta função já vem aberta por parametro, nela puxei a lista
    que criei na função Funcionarios, depois chamei a fake API
    que ia utilizar, então iniciei o retorno com as tags
    semanticas, coloquei a logo da Be Mobile no header e a
    tabela no main puxando com a função Funcionarios que
    foi criada */
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
