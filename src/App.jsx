import React, { useEffect, useState } from 'react';
import Funcionarios from './components/Funcionarios';
import Search from './components/Search';
import './assets/styles/app.css';
import axios from 'axios'

/* FUNÇÃO QUE GERA O APP */

/* Esta função já vem aberta por parametro, nela puxei a lista
    que criei na função Funcionarios, depois chamei a fake API
    que ia utilizar, então iniciei o retorno com as tags
    semanticas, coloquei a logo da Be Mobile no header e a
    tabela no main puxando com a função Funcionarios que
    foi criada */
function App() {

  const [list, setList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/funcionarios')
    .then(async result => {
        setList(await result.json())
      })
  }, [] )

  return <div>
    <header>
      <img src='src/assets/img/logo-bemobile.png'></img>
    </header>
    <main>
      <div className='table-header'>
        <h4>Funcionários</h4>
        <Search />
      </div>
      <Funcionarios list={list}/>
    </main>
  </div>

}

export default App
