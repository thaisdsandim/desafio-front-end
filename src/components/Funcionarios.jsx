import React, { useState } from 'react'

/* FUNÇÃO QUE ORGANIZA OS DADOS DOS FUNCIONARIOS EM UMA TABELA */

/* Abri a função com uma list e organizei os dados que ia chamar
    da fake API dentro da tabela de acordo com as posições que
    estavam no figma */
function Funcionarios({list = [] }){

  return <div>
    
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
      {list.map(({foto, nome, cargo, admissao, telefone}) => {
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

export default Funcionarios