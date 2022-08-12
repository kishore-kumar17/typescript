import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Reisterationform.css";

const RegistrationForm = () => {
  return (
    <div>
      <h2>RegistrationForm</h2>
      <div className="container col-5">
        <Form>
          <div>
            <Form.Label>FIRST NAME </Form.Label>
          </div>
          <Form.Control
            type="text"
            className="fname"
            data-testid="fname"
            placeholder="Firstname"
          ></Form.Control>
          <br />
          <div>
            <Form.Label>LAST NAME </Form.Label>
          </div>
          <Form.Control
            type="text"
            className="lname"
            data-testid="lname"
            placeholder="Lastname"
          ></Form.Control>
          <br />
          <div>
            <Form.Label>EMAIL ID</Form.Label>
          </div>
          <Form.Control
            type="email"
            placeholder="kk@dorustrree.in"
            className="mail"
            data-testId="mail"
          ></Form.Control>
          <br />
          <div>
            <Form.Label>MOBILE NUMBER</Form.Label>
          </div>
          <Form.Control
            type="number"
            placeholder="1234567890"
            className="mnumber"
            data-testId="mnumber"
          ></Form.Control>
          <br />
          <div>
            <Form.Label>PASSWORD</Form.Label>
          </div>
          <Form.Control
            type="text"
            className="password"
            data-testId="password"
          ></Form.Control>
          <br />
          <br />
          <Button>REGISTER</Button>
          <p className="mt-5">
            i have an account ...<Link to="/loginform">Login Here</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationForm;
