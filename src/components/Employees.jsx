import React from "react";

/* FUNÇÃO QUE ORGANIZA OS DADOS DOS FUNCIONARIOS EM UMA TABELA */

/* Abri a função com a list que defini no App para gerenciar os
dados da tabela e organizei esses dados que chamei da fake 
API dentro da tabela de acordo com as posições que estavam
no figma. A data de admissão formatei do formato padrão para
o brasileiro, o telefone formatei passando separações de acordo
com o tamanho de caracteres */
function Employees({ list = [] }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="column-photo">FOTO</th>
            <th>NOME</th>
            <th>CARGO</th>
            <th>DATA DE ADMISSÃO</th>
            <th className="column-phone">TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ photo, name, role, admission, phone }) => {
            return (
              <tr key={name}>
                <td>
                  <img src={photo} />
                </td>
                <td>{name}</td>
                <td>{role}</td>
                <td>
                  {new Date(admission).toLocaleDateString("pt-BR", {
                    timeZone: "UTC",
                  })}
                </td>
                <td>
                  {"+" +
                    phone.substring(0, 2) +
                    " " +
                    "(" +
                    phone.substring(2, 4) +
                    ")" +
                    " " +
                    phone.substring(4, 8) +
                    "-" +
                    phone.substring(8, 13)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
