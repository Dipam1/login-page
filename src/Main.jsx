import React from "react";
import { useState } from "react";
import LoggedIn from "./LoggedIn";
import captcha from "./assets/captcha.png";
import PasswordStrengthBar from "react-password-strength-bar";
import Captcha from "demos-react-captcha";

const Main = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [scoree, setScore] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [acaptcha, setCaptcha] = useState(false);

  const loginClicked = (e) => {
    e.preventDefault();
    validatePassword(password);

    if (!acaptcha) {
      alert("Captcha is incorrect");
      return;
    }

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
              <div className="center">
                {/* <img src={captcha} width={200} height={60} />
                <input
                  placeholder="Enter Captcha"
                  onChange={(event) => setCaptcha(event.target.value)}
                /> */}
                {acaptcha ? (
                  ""
                ) : (
                  <Captcha
                    onChange={(item) => {
                      console.log(item);
                      setCaptcha(item);
                    }}
                    placeholder="Enter captcha"
                  />
                )}
              </div>
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
