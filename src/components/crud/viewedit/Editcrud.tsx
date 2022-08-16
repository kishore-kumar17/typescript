import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUsers, fetchUsers } from "../store/postSlice";
import { Dispatched, RootState } from "../store/store";

const Editcrud = () => {
  const dispatch = useDispatch<Dispatched>();
  const [editdata, seteditdata] = useState<change>({});
  const [error, seterror] = useState<change>({});
  const upgrad: any = useSelector((state: RootState) => state.post);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const updatedata =
    Array.isArray(upgrad.posts) &&
    upgrad.posts.find((data: any) => data.id === Number(id));

  // console.log(updatedata);

  useEffect(() => {
    if (updatedata) {
      seteditdata(updatedata);
    }
  }, [updatedata]);

  type change = {
    id?: number;
    name?: string;
    fathername?: string;
    adharnumber?: number | string;
    mobilenumber?: number | string;
    dob?: number | string;
  };
  //   console.log(changeval);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    seteditdata({ ...editdata, [e.target.name]: e.target.value });
    if (!e.target.value) {
      seterror({
        ...error,
        [e.target
          .name]: `${e.target.name} CAN'T BE EMPTY SO FILL IN THE VALUES `,
      });
    } else {
      seterror({ ...error, [e.target.name]: "" });
    }
    // console.log(editdata);
  };

  const handlesubmit = (e: React.FormEvent) => {
    //validation....

    e.preventDefault();
    if (!editdata.name) {
      seterror({ name: "NAME is important in adhar card" });
    } else if (!editdata.fathername) {
      seterror({ fathername: "FATHER NAME  is important in adhar card" });
    } else if (!editdata.adharnumber) {
      seterror({ adharnumber: "ADHAR NUMBER is must" });
    } else if (!editdata.mobilenumber) {
      seterror({ mobilenumber: "MOBILE NUMBER  is important in adhar card" });
    } else if (!editdata.dob) {
      seterror({ dob: "DATE OF BIRTH is important in adhar card" });
    } else {
      dispatch(editUsers(changeval));
      navigate("/viewcrud");
    }
  };
  const changeval = {
    id: editdata.id,
    name: editdata.name,
    fathername: editdata.fathername,
    adharnumber: editdata.adharnumber,
    mobilenumber: editdata.mobilenumber,
    dob: editdata.dob,
  };
  return (
    <div>
      <h2>SIGNIN ADHAR </h2>
      <div className="container mt-5 box col-4">
        <div>
          <div className="row">
            <Form onSubmit={handlesubmit}>
              <div>
                <Form.Label> NAME :</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  autoFocus
                  value={editdata.name}
                  onChange={change}
                ></Form.Control>
                <span style={{ color: "red" }}>{error.name}</span>
              </div>
              <br />
              <div>
                <Form.Label> FATHER'S NAME :</Form.Label>
                <Form.Control
                  type="text"
                  name="fathername"
                  onChange={change}
                  value={editdata.fathername}
                ></Form.Control>
                <span style={{ color: "red" }}>{error.fathername}</span>
              </div>
              <br />
              <div>
                <Form.Label> ADHAR NUMBER :</Form.Label>
                <Form.Control
                  type="number"
                  name="adharnumber"
                  placeholder="0394-2839-7825"
                  value={editdata.adharnumber}
                  onChange={change}
                ></Form.Control>
                <span style={{ color: "red" }}>{error.adharnumber}</span>
              </div>
              <br />
              <div>
                <Form.Label> MOBILE NUMBER :</Form.Label>
                <Form.Control
                  type="number"
                  name="mobilenumber"
                  onChange={change}
                  value={editdata.mobilenumber}
                ></Form.Control>
                <span style={{ color: "red" }}>{error.mobilenumber}</span>
              </div>
              <br />
              <div>
                <Form.Label> DOB :</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  onChange={change}
                  value={editdata.dob}
                ></Form.Control>
                <span style={{ color: "red" }}>{error.dob}</span>
              </div>
              <br />
              <div>
                <Button type="submit" variant="secondary">
                  UPDATE
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editcrud;
