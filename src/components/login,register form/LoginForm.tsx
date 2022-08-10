import React from "react";
import { Button, Form } from "react-bootstrap";

const LoginForm = () => {




    
  return (
    <div>
      <h1>LOGIN FORM</h1>
      <div>
        <form>
          <div>
            <Form.Label>LOGIN ID</Form.Label>
          </div>

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
          <Form.Control type="text" autoFocus name="userid" placeholder="kishore" data-testid="userid"></Form.Control>

          <div>
            <Form.Label>PASSWORD</Form.Label>
          </div>

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
          <Form.Control type="text" name="password" data-testid="password"></Form.Control>
          <br />
          <br />

          <div>
            <Button variant="outline-warning" data-testid="signin" onClick={()=>click{}}>SIGNIN</Button>

            <Button>RESET</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
