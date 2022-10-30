import { Link } from "react-router-dom";
import GooglelAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All streams
        </Link>
        <GooglelAuth />
      </div>
    </div>
  );
};

export default Header;
