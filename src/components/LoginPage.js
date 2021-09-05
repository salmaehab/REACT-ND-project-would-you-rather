import React, { Component } from "react";
import { connect } from "react-redux";
 import logo from "../images/logo512.png";
import { setAuthedUser } from "../actions/authedUser";
class LoginPage extends Component {
  render() {
    return (
      <div>
        <div className="center">
          <img style={{ position: "center", height: "200px" }} src={logo} alt="" />
          <p style={{ color: "#0066ff", "fontWeight": 'bold' }}> Login To continue</p>
        </div>
        <br></br>
        <div className="center">
          <select
            style={{ color: "#0066ff", width: "30%"}}
            value="null"
            onChange={e => {
              this.props.dispatch(setAuthedUser(e.target.value));
              this.props.history.push("/");
            }}
          >
            <option value="null" disabled>
              User Name
            </option>
            <option value="tylermcginnis">Tyler Mcginnis</option>
            <option value="sarahedo">Sarah Edo</option>
            <option value="johndoe">John Doe</option>
          </select>
        </div>
      </div>
    );
  }
}

export default connect()(LoginPage);
