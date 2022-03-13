import { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
const EmployeeAdd = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [newEmployees, setNewEmployees] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = newEmployees;
  const onInputChange = (e) => {
    setNewEmployees({ ...newEmployees, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, phone);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group style={{ marginBottom: "12px" }}>
        <Form.Control
          type="text"
          placeholder="Name"
          required
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
        ></Form.Control>
      </Form.Group>
      <Form.Group style={{ marginBottom: "12px" }}>
        <Form.Control
          type="email"
          placeholder="E-mail"
          required
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
        ></Form.Control>
      </Form.Group>

      <Form.Group style={{ marginBottom: "12px" }}>
        <Form.Control
          type="text"
          placeholder="Phone"
          required
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        ></Form.Control>
      </Form.Group>

      <Button variant="success" type="submit" block>
        Add new employee
      </Button>
    </Form>
  );
};

export default EmployeeAdd;
