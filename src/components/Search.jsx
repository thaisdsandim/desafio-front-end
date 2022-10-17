import React from "react";
import phoneFormat from "../constants/phoneFormat";
import admissionFormat from "../constants/admissionFormat";

const Search = (props) => {
  const { list, setList, initial } = props;

  const handleSearch = (e) => {
    const searchEmployee = e.target.value;

    const setFilter = list.filter((employee) =>
      employee.name.toLowerCase().includes(searchEmployee.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchEmployee.toLowerCase()) ||
      admissionFormat(employee.admission).toLowerCase().includes(searchEmployee.toLowerCase()) ||
      phoneFormat(employee.phone).toLowerCase().includes(searchEmployee.toLowerCase())
    );
    
    if (searchEmployee === "") {
      setList(initial);
    } else {
      setList(setFilter);
    }

  };
  
  return (
    <div className="table-header">
      <h4>Funcionários</h4>
      <input 
      type="text" 
      placeholder="Pesquisar" 
      className="input"
      onChange={handleSearch}
      />
      <button className="submit-lente" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}

export default Search;
