import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" container mt-5">
      <div className="row">
        <h1>REGISTER FORM</h1>
        <div>
          <Form>
            <div>
              <Form.Label> NAME </Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Firstname"
              ></Form.Control>
            </div>
            <br />

            <div>
              <Form.Label>EMAIL ID</Form.Label>
            </div>
            <Form.Control
              type="email"
              placeholder="kk@dorustrree.in"
              name="mail"
            ></Form.Control>
            <br />
            <div>
              <Form.Label>MOBILE NUMBER</Form.Label>
            </div>
            <Form.Control
              type="number"
              placeholder="1234567890"
              name="mnumber"
            ></Form.Control>
            <br />
            <div>
              <Form.Label>PASSWORD</Form.Label>
            </div>
            <Form.Control type="text" name="password"></Form.Control>
            <br />
            <div>
              <Form.Label>CONFIRM PASSWORD</Form.Label>
            </div>
            <Form.Control type="text" className="cpassword"></Form.Control>
            <br />
            <br />
            <Button>REGISTER</Button>
            <p className="mt-5">
              i have an account ...<Link to="/login">Login Here</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
