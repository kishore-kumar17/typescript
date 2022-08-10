import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Editcrud from "./components/crud/viewedit/Editcrud";
import Create from "./components/crud/create/Create";
import { store } from "./components/crud/store/store";
import Viewcrud from "./components/crud/viewedit/Viewcrud";
import NewTodo from "./components/exercies/Newtodo";
import RegistrationForm from "./components/login,register form/RegistrationFrom";
import LoginForm from "./components/login,register form/LoginForm";

function App() {
  return (
    <div className="App">
      {/* <Todo items={["FIRST PROPS PASS", "SECOUND PROPS PASS"]}></Todo> */}
      {/* <NewTodo /> */}
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Routes />}></Route>
            <Route path="/newtodo" element={<NewTodo />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/viewcrud" element={<Viewcrud />}></Route>
            <Route path="/editcrud/:id" element={<Editcrud />}></Route>
            <Route path="/registerationform" element={<RegistrationForm />}></Route>
            <Route path="/loginform" element={< LoginForm/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
