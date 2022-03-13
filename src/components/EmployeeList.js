import "./Employee";
import Employee from "./Employee";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import EmployeeAdd from "./EmployeeAdd";
import { EmployeeContext } from "../context/EmployeeContext";
const EmployeeList = () => {
  const { employeee } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [employeee]);
  return (
    <>
      <div className="table-title">
        <div className="row">
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
          <Employee employeee={employeee} />
        </tbody>
      </table>

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
