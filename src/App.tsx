import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Editcrud from "./components/crud/viewedit/Editcrud";
import Create from "./components/crud/create/Create";
import { store } from "./components/crud/store/store";
import Viewcrud from "./components/crud/viewedit/Viewcrud";
import NewTodo from "./components/exercies/Newtodo";
import RegistrationForm from "./components/registerform/RegistrationFrom";
import LoginForm from "./components/loginform/LoginForm";
import Pages from "./Routes/Pages";
import Login from "./components/interceptors/Forntend/Login";
import Register from "./components/interceptors/Forntend/Register";
import Home from "./components/interceptors/Forntend/Home";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/sidenavbar/NavBar";

function App() {
  return (
    <div className="App">
      {/* <Todo items={["FIRST PROPS PASS", "SECOUND PROPS PASS"]}></Todo> */}
      {/* <NewTodo /> */}

      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Pages />}></Route>
            <Route path="/newtodo" element={<NewTodo />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/viewcrud" element={<Viewcrud />}></Route>
            <Route path="/editcrud/:id" element={<Editcrud />}></Route>
            <Route path="/registerationform" element={<RegistrationForm />}></Route>
            <Route path="/loginform" element={<LoginForm />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/sidenav" element={<Sidebar />}></Route>
            <Route path="/nav" element={<NavBar />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
