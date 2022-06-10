import React from "react";
import { useState } from "react";
import LoggedIn from "./LoggedIn";
import { ReCAPTCHA } from "react-google-recaptcha";
import PasswordStrengthBar from "react-password-strength-bar";

const Main = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [scoree, setScore] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const loginClicked = (e) => {
    e.preventDefault();
    validatePassword(password);

    if (scoree > 2) {
      const emails = JSON.parse(localStorage.getItem("emails")) || [];
      emails.push(email);
      localStorage.setItem("emails", JSON.stringify(emails));

      setLoggedIn(true);
    }
  };

  function validatePassword(p) {
    if (p.length < 8) {
      setFeedback({
        suggestions: ["Password must be at least 8 characters long"],
      });
    }
  }

  const capchaChange = (value) => {
    console.log(value);
  };

  return (
    <div>
      {loggedIn ? (
        <LoggedIn
          allEmails={JSON.parse(localStorage.getItem("emails"))}
          setLoggedIn={setLoggedIn}
        />
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
              <PasswordStrengthBar
                password={password}
                onChangeScore={(score, feedback) => {
                  setScore(score);
                  setFeedback(feedback);
                  console.log(scoree, feedback);
                }}
                minLength={8}
              />
              {scoree < 3 && scoree !== null ? (
                <div className="">
                  <strong>
                    <i className="fa fa-exclamation-triangle"></i>
                  </strong>
                  {feedback.suggestions ? feedback.suggestions[0] : ""}
                </div>
              ) : (
                ""
              )}

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
