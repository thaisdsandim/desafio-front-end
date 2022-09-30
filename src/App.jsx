import React, { useEffect } from 'react'
import { useState } from 'react'
import './assets/styles/app.css'

function Funcionarios({list = [] }){

  return <div className='table'>
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
      <div>
      <h4>Funcionários</h4>
      </div>
      <Funcionarios list={list}/>
    </main>
  </div>

}

export default App
