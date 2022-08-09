import { Link } from "react-router-dom";

const Routes = () => {
  return (
    <div>
      Routes
      <ol>
        <li>
          <Link to="/todo">todo </Link>
        </li>
        <li>
          <Link to="/newtodo">newtodo</Link>
        </li>
        <li>
          <Link to="/crud">CREATE </Link>
        </li>
        <li>
          <Link to="/viewcrud">VIEW </Link>
        </li>
        <li>
          <Link to="/editcrud/:id">EDIT </Link>
        </li>
      </ol>
    </div>
  );
};

export default Routes;
