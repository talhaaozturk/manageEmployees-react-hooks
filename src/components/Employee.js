import React from "react";

const Employee = ({ employeee }) => {
  return employeee.map((employees) => (
    <tr>
      <td>{employees.name}</td>
      <td>{employees.email}</td>
      <td>{employees.phone}</td>
      <td>
        <a className="add" title="Add" data-toggle="tooltip">
          <i className="material-icons">&#xE03B;</i>
        </a>
        <a className="edit" title="Edit" data-toggle="tooltip">
          <i className="material-icons">&#xE254;</i>
        </a>
        <a className="delete" title="Delete" data-toggle="tooltip">
          <i className="material-icons">&#xE872;</i>
        </a>
      </td>
    </tr>
  ));
};

export default Employee;
