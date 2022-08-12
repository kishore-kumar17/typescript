import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./LoginForm.css";

const LoginForm = () => {
  const [input, setinput] = useState<string>("");
  const [value, setvalue] = useState<string>("");

  const Click = (e:any) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1>LOGIN FORM</h1>
      <div className="contain">
          <form className="inside-box">
            <div>
              <Form.Label>LOGIN ID</Form.Label> &nbsp;&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </div>
            <Form.Control
              type="text"
              autoFocus
              name="userid"
              placeholder="kishore"
              data-testid="userid"
              onChange={(e) => setinput(e.target.value)}
            ></Form.Control>
            <br />

            <div>
              <Form.Label>PASSWORD</Form.Label> &nbsp;&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-lock-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
            </div>
            <Form.Control
              type="text"
              name="password"
              data-testid="password"
              onChange={(e) => setvalue(e.target.value)}
            ></Form.Control>
            <br />
            <br />
            <div>
              <Button className="mx-5" variant="danger">RESET</Button>
              <Button
                variant="warning"
                data-testid="signin"
                onClick={Click}
              >
                SIGNIN
              </Button>
            
              <div className="margintop"><p>Or   Sign with you  <br/>    
                 Gmail &nbsp; Fb  &nbsp;  Twitter &nbsp;</p></div>

            </div>
          </form>
      </div>
    </div>
  );
};

export default LoginForm;
