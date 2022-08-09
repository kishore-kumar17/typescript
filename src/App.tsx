import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Create from "./components/crud/Create";
import Editcrud from "./components/crud/Editcrud";
import Viewcrud from "./components/crud/Viewcrud";
import NewTodo from "./components/exercies/Newtodo";
import Todo from "./components/exercies/Todo";

function App() {
  return (
    <div className="App">
      {/* <Todo items={["FIRST PROPS PASS", "SECOUND PROPS PASS"]}></Todo> */}
      {/* <NewTodo /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Routes />}></Route>
          <Route path="/newtodo" element={<NewTodo />}></Route>
          <Route path="/crud" element={<Create />}></Route>
          <Route path="/viewcrud" element={<Viewcrud />}></Route>
          <Route path="/editcrud/:id" element={<Editcrud />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
