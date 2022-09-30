import React, { useEffect } from 'react'
import { useState } from 'react'
import './assets/styles/app.css'

/* FUNÇÃO QUE ORGANIZA OS DADOS DOS FUNCIONARIOS EM UMA TABELA */

/* Abri a função com uma list e organizei os dados que ia chamar
    da fake API dentro da tabela de acordo com as posições que
    estavam no figma */
function Funcionarios({list = [] }){

  return <div>

  <div className='table-header'>
    <h4>Funcionários</h4>
    <div>
      <input placeholder='Pesquisar' className='input'/>
      <button className='submit-lente' type="submit">
        <i className='fa fa-search'></i>
      </button>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th className='foto'>FOTO</th>
        <th>NOME</th>
        <th>CARGO</th>
        <th>DATA DE ADMISSÃO</th>
        <th className='telefone'>TELEFONE</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map(({foto, nome, cargo, admissao, telefone}) => {
          return <tr key={nome}>
            <td><img src={foto}/></td>
            <td>{nome}</td>
            <td>{cargo}</td>
            <td>{admissao}</td>
            <td>{telefone}</td>
          </tr>
        })
      }
    </tbody>
  </table>
  </div>
}

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
      <Funcionarios list={list}/>
    </main>
  </div>

}

export default App
