import { List } from "antd";
import React from "react";
import { Dropdown } from "react-bootstrap";

const Navheader = () => {
  return (
    <div>
      <h1>Navheader</h1>
      <List>
        <ul>
          <li>dashboard</li>
          <li>Home</li>
          <li>Aout</li>
          <li>Menu</li>
          <ul>
            <Dropdown>
              <li>forntend</li>
              <li>backend</li>
              <li>data base</li>
            </Dropdown>
          </ul>

          <li>Logout</li>
        </ul>
      </List>
    </div>
  );
};

export default Navheader;
