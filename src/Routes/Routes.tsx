import { Link } from "react-router-dom";

const Routes = () => {
  return (
    <div>
      Routes
      <ol>
      <li>
          <Link to="*">typescript </Link>
        </li>
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
      </ol>
    </div>
  );
};

export default Routes;
