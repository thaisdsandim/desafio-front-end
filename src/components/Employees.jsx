import React from "react";

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
