import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, fetchUsers } from "./postSlice";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Dispatched, RootState } from "./store";

const Viewcrud = () => {
  const dispatch = useDispatch<Dispatched>();
  const navi = useNavigate();
  const [show, setshow] = useState(false);
  const post = useSelector((state: RootState) => state.post);

  type val = {
    name?: string;
    fathername?: string;
    adharnumber?: number | string;
    mobilenumber?: number | string;
    dob?: number | string;
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const deletedata = (id: val) => {
    setshow(true);
    dispatch(deleteUsers(id));
    dispatch(fetchUsers());
  };

  const editdata = (id: number) => {
    navi(`/editcrud/${id}`);
  };

  return (
    <div>
      <h1>ADHAR CARD DETAILS</h1>
      <Link to="/create">
        <Button variant="outline-danger">ADD NEW ADHAR</Button>
      </Link>

      <div className="container">
        <div className="row">
          {!post.loading &&
            post.posts &&
            post.posts.map((data: any, i: any) => {
              //i have use in this line any key ...
              return (
                <div className="col-lg-4 mb-4">
                  <div className="card mx-3" style={{ width: "20rem" }}>
                    <img
                      src="https://ih1.redbubble.net/image.3096753269.1899/fposter,small,wall_texture,product,750x1000.jpg"
                      className="img-fluid"
                      alt="asogachakra logo"
                      title="asoga chakkaram"
                      id="asogachakram"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <hr />
                      <p>FATHER NAME :{data.fathername}</p>
                      <p> MOBILE NUMBER : {data.mobilenumber}</p>
                      <p>DOB :{data.dob}</p>
                      <hr />
                      <p>AADHAR NUMBER : {data.adharnumber}</p>
                      <hr />
                      <Button
                        variant="outline-primary"
                        onClick={(e) => editdata(data.id)}
                      >
                        UPDATE
                      </Button>
                      <Button
                        className="float-end"
                        variant="outline-danger"
                        onClick={(e) => deletedata(data.id)}
                      >
                        DELETE
                      </Button>

                      {show && (
                        <Modal show={show}>
                          <Modal.Header closeButton>
                            <Modal.Title>Modal</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            ARE YOU SURE DELETE THIS DATA!!!
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="outline-secondary">NO</Button>
                            <Button variant="outline-primary">YES</Button>
                          </Modal.Footer>
                        </Modal>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Viewcrud;
