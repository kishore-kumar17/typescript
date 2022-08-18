import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import customAxios from "../axios";

const Register = () => {
  const [register, setregister] = useState<newregister>({});
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  interface newregister {
    name?: string;
    email?: string;
    mobilenumber?: string;
    password?: string;
  }
  //model popup
  const handleModel = () => {
    setModal(true);
  };

  //input changes...
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setregister({ ...register, [e.target.name]: e.target.value });
  };
  //form submit...
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let { name, email, mobilenumber, password } = register;
    // console.log(sakjd)
    customAxios
      .post("/auth/signup", { name, password })
      .then((responce) => {
        if (responce.status === 201) {
          // alert("User Registered Succesfully");
          handleModel();
          navigate("/login");
        } else {
          alert("SORRY !...   Failed To register User");
        }
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div className=" container mt-5">
      <div className="row">
        <h1>REGISTER FORM</h1>
        <div className="col-lg justify-Contant-Center">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <Form.Label> NAME </Form.Label>
            </div>
            <input
              type="text"
              name="name"
              placeholder="KISHORE KUMARAN"
              onChange={(e) => handleChange(e)}
            ></input>
            <br />
            <br />

            <div>
              <Form.Label>EMAIL ID</Form.Label>
            </div>

            <input
              type="email"
              placeholder="kk@dorustrree.in"
              name="email"
              onChange={(e) => handleChange(e)}
            ></input>
            <br />
            <br />

            <div>
              <Form.Label>MOBILE NUMBER</Form.Label>
            </div>
            <input
              type="number"
              placeholder="1234567890"
              name="mobilenumber"
              onChange={(e) => handleChange(e)}
            ></input>
            <br />
            <br />

            <div>
              <Form.Label>PASSWORD</Form.Label>
            </div>

            <input
              type="text"
              name="password"
              onChange={(e) => handleChange(e)}
            ></input>
            <br />
            <br />
            <Button type="submit">REGISTER</Button>
            <p className="mt-5">
              i have an account ........<Link to="/login">Login Here</Link>
            </p>
          </Form>
        </div>
        {/* <div className="col-lg-4">hi</div>
        <div className="col-lg-5">hi</div> */}
      </div>
      {modal && (
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>REGISTER successfully done..</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save </Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </div>
  );
};

export default Register;
