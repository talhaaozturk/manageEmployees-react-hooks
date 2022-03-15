import { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";

const EditForm = ({ theEmployee }) => {
  const { editEmployee } = useContext(EmployeeContext);

  const employee = theEmployee;
  const id = employee.id;

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [phone, setPhone] = useState(employee.phone);

  const updatedEmployee = { id, name, email, phone };

  const handleSubmit = (e) => {
    e.preventDefault();
    editEmployee(id, updatedEmployee);
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
          onChange={(e) => setName(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group style={{ marginBottom: "12px" }}>
        <Form.Control
          type="email"
          placeholder="E-mail"
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group style={{ marginBottom: "12px" }}>
        <Form.Control
          type="text"
          placeholder="Phone"
          required
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Button variant="success" type="submit" block>
        Add new employee
      </Button>
    </Form>
  );
};

export default EditForm;
