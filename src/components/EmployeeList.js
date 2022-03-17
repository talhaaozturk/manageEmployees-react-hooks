import "./Employee";
import Employee from "./Employee";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import EmployeeAdd from "./EmployeeAdd";
import { EmployeeContext } from "../context/EmployeeContext";
import Pagination from "./Pagination";
const EmployeeList = () => {
  const { employeee } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(2);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [employeee]);

  const indexOfLastEmployee = currentPage * employeesPerPage; //o anki sayfayla,sayfada kaç tane çalışan göstermek istediğimi çarpıyorum
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployee = employeee.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPagesNum = Math.ceil(employeee.length / employeesPerPage);
  const [showAlert, setShowAlert] = useState(false);
  const handleShowAlert = () => {
    setShowAlert(true);
  };
  useEffect(() => {
    handleClose(); //employee ekleyince otomatik kapanmasını sağlar
    return () => {
      handleShowAlert();
      setTimeout(() => {
        setShowAlert(false);
      }, 2200);
    };
  }, [employeee]);
  return (
    <>
      <div className="table-title">
        <div className="row">
          <Alert show={showAlert} variant="success" dismissible>
            Success
          </Alert>
          <div className="col-sm-8">
            <h2>
              Employee <b>Details</b>
            </h2>
          </div>

          <div className="col-sm-4">
            <Button
              onClick={handleShow}
              type="button"
              className="btn btn-success add-new"
              data-toggle="modal"
            >
              <i className="fa fa-plus"></i> Add New
            </Button>
          </div>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th style={{ width: "250px" }}>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployee.map((employees) => (
            <tr key={employees.id}>
              <Employee employeee={employees} />
            </tr>
          ))}{" "}
        </tbody>
      </table>

      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        totalEmployee={employeee.length}
        currentEmployee={currentEmployee}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmployeeAdd />
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
//     <>
//       <div className="table-title">
//         <div className="row">
//           <div className="col-sm-8">
//             <h2>
//               Employee <b>Details</b>
//             </h2>
//           </div>

//           <div className="col-sm-4">
//             <Button
//               onClick={handleShow}
//               type="button"
//               className="btn btn-success add-new"
//               data-toggle="modal"
//             >
//               <i className="fa fa-plus"></i> Add New
//             </Button>
//           </div>
//         </div>
//       </div>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th style={{ width: "250px" }}>Email</th>
//             <th>Phone</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <Employee employeee={employeee} />
//         </tbody>
//       </table>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add employee</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <EmployeeAdd />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

export default EmployeeList;
