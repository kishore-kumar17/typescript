import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import customAxios from "../axios";

const Home = () => {
  const [value, setvalue] = useState([]);
  const navigate = useNavigate();

  const getdata = () => {
    customAxios
      .get("/auth/employees")
      .then((res) => {
        setvalue(res?.data?.data?.employees);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{marginLeft:'700px'}}>
      <h1>WELCOME TO GOOGLE...</h1>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
        />
        <Card.Body>
          <Card.Title>Welcome to Google</Card.Title>
          <Card.Text>
            All the documents are here..
            <br />
            <i>If you want click the view data.. </i>
            <br />
            <Button onClick={getdata}>
              View data
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
              </svg>
            </Button>
            <p>
              {value?.map((app: any, i) => {
                return (
                  <div id={i.toString()}>
                    <br />
                    <b style={{ color: "red" }}>
                      Application name :{app.appname}
                    </b>
                    <br />

                    <i style={{ color: "blue" }}>
                      contact number : {app.phone}
                    </i>
                    <br />

                    <p>Owner name :{app.owner}</p>
                  </div>
                );
              })}
            </p>
          </Card.Text>
          <Button variant="primary" onClick={logout}>
            Log_out
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
