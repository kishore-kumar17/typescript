import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import customAxios from "../axios";

const Register = () => {
  const [register, setregister] = useState<newregister>({});
  const [modal, setmodal] = useState(false);
  const navigate = useNavigate();

  interface newregister {
    name?: string;
    email?: string;
    mobilenumber?: string;
    password?: string;
  }
 

  //input changes...
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setregister({ ...register, [e.target.name]: e.target.value });
  };
  //form submit...
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setmodal(true);
    console.log(register);
  };


  //model popup

  const newHandleSubmit=(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    let { name, email, mobilenumber, password } = register;

      customAxios
      .post("/auth/signup", { email, password })
      .then((responce) => {
        if (responce.status === 201) {
          // modal popup
          
          navigate("/login");
        } else {
          alert("SORRY !...   Failed To register User");
        }
      })
      .catch((error) => console.error(error.message));
  }

  return (
    <div className="container mt-5">
      <div className="row" style={{textAlign:'center'}}>
        <h1> GOOGLE REGISTER FORM</h1>
        <div >
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
    
      </div>
      {modal && 
        <Modal show={modal}>
        <Modal.Header closeButton>
          <Modal.Title>Register succesfully!...</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, GO to login here.</Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={(e)=>newHandleSubmit(e)}>
            okay
          </Button>
        </Modal.Footer>
      </Modal>
      }
    </div>
  );
};

export default Register;
