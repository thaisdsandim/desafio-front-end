import React from "react";
import phoneFormat from "../constants/phoneFormat";
import admissionFormat from "../constants/admissionFormat";

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
                <td>{admissionFormat(admission)}</td>
                <td>{phoneFormat(phone)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
