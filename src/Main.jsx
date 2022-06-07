import React from "react";
import { useState } from "react";
import LoggedIn from "./LoggedIn";
import { ReCAPTCHA } from "react-google-recaptcha";

const Main = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [strong, setstrong] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [allEmails, setEmails] = useState([]);

  var errors = [];

  const loginClicked = (e) => {
    e.preventDefault();
    validatePassword(password);

    if (strong) {
      const a = allEmails;

      a.push(email);

      setEmails(a);

      setLoggedIn(true);
    }
  };

  function validatePassword(p) {
    errors = [];
    if (p.length < 8) {
      errors.push("Your password must be at least 8 characters");
    }
    if (p.search(/[a-z]/i) < 0) {
      errors.push("Your password must contain at least one letter.");
    }
    if (p.search(/[0-9]/) < 0) {
      errors.push("Your password must contain at least one digit.");
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
      setstrong(false);
      return false;
    }
    setstrong(true);
  }

  const capchaChange = (value) => {
    console.log(value);
  };

  return (
    <div>
      {" "}
      {loggedIn ? (
        <LoggedIn allEmails={allEmails} setLoggedIn={setLoggedIn} />
      ) : (
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">
              <i
                className="fa fa-user-circle"
                style={{ fontSize: "110px" }}
              ></i>
            </h4>
            <div className="image">LOGIN</div>
          </div>

          <div className="body-form">
            <form onSubmit={loginClicked}>
              <div className="input-group mb-3">
                <input
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <ReCAPTCHA
                sitekey="6Le8vU8gAAAAAPYPFDiR2pOkfYpF4o2rFQ1Pc_o5"
                onChange={capchaChange}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button type="submit" className="btn btn-secondary btn-block">
                  LOGIN
                </button>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href="/forgot">Forgot Password</a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
