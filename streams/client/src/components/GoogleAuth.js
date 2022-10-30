import React from "react";
import "../css/index.css";

import jwt_decode from "jwt-decode";
import { connect, useSelector, useDispatch } from "react-redux";
import { signIn, signOut, sumbitForm } from "../actions";

class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.button = React.createRef();
    this.state = { clicked: false };
  }
  // * FOR FUNCTION COMPONENT
  // const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  // const dispatch = useDispatch();
  // const googleRef = useRef();

  handleCallbackResponse = (response) => {
    // dispatch(signIn());
    const decoded = jwt_decode(response.credential);

    this.props.signIn(decoded.sub);

    this.setState({ clicked: true });
  };

  componentDidMount() {
    /* global google */
    window.onload = () => {
      google.accounts.id.initialize({
        client_id:
          "454230999350-mb521o901s4113kfqbj2n6p60rlh3nm4.apps.googleusercontent.com",
        auto_select: true,
        callback: this.handleCallbackResponse,
      });
      this.displayGoogleButton();
      google.accounts.id.prompt();
    };
  }

  displayGoogleButton = () => {
    this.setState({ clicked: false });
    google.accounts.id.renderButton(this.button.current, {
      theme: "filled_blue",
      size: "large",
      shape: "circle",
    });
  };

  signOut = () => {
    this.displayGoogleButton();
    this.props.signOut();
  };

  render() {
    return (
      <div>
        {/* {console.log(this.props)} */}
        <div
          className={`${this.state.clicked && "display-none"}`}
          ref={this.button}
          id="signInButton"
        />

        {this.state.clicked && (
          <button className="ui primary google button" onClick={this.signOut}>
            <i className="google icon" />
            Sign out
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
