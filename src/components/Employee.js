import React, { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { useState, useEffect } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employeee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  useEffect(() => {
    handleClose();
  }, [employeee]);
  return (
    <>
      <td>{employeee.name}</td>
      <td>{employeee.email}</td>
      <td>{employeee.phone}</td>
      <td>
        <OverlayTrigger overlay={<Tooltip id="button-tooltip">Edit</Tooltip>}>
          <button
            onClick={handleShow}
            className="btn text-warning"
            title="Edit"
            data-toggle="tooltip"
          >
            <i className="material-icons">&#xE254;</i>
          </button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id="button-tooltip">Delete</Tooltip>}>
          <button
            onClick={() => deleteEmployee(employeee.id)}
            className="btn text-danger"
            title="Delete"
            data-toggle="tooltip"
          >
            <i className="material-icons">&#xE872;</i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={employeee} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;
