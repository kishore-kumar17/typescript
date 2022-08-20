import { Link } from "react-router-dom";

const Pages = () => {
  return (
    <div>
      Routes
      <ol>
        <li>
          <Link to="/todo">todo </Link>
        </li>
        <li>
          <Link to="/newtodo">NEWTODO</Link>
        </li>
        <li>
          <Link to="/create">CREATE </Link>
        </li>
        <li>
          <Link to="/viewcrud">VIEW </Link>
        </li>
        <li>
          <Link to="/editcrud/:id">EDIT </Link>
        </li>
        <li>
          <Link to="/registerationform">REGISTER </Link>
        </li>
        <li>
          <Link to="/loginform">LOGIN </Link>
        </li>
        <li>
          <Link to="/login">INTERCEPTORS</Link>
        </li>
        <li>
          <Link to="/mui">sidenav</Link>
        </li>
        <li>
          <Link to="/nav"> side navigation</Link>
        </li>
      </ol>
    </div>
  );
};

export default Pages;
