import React, { useState } from "react";

const ForgotPassword = () => {
  const [type, settype] = useState("email");
  const [abc, setabc] = useState("");

  const changeType = (e) => {
    e.preventDefault();
    settype("text");
    setabc("");
  };

  return (
    <div>
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center">
            <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
          </h4>
          <div className="image">Forgot password</div>
        </div>

        <div className="body-form">
          <form onSubmit={changeType}>
            <div className="input-group mb-3">
              <input
                value={abc}
                onChange={(e) => setabc(e.target.value)}
                type={type}
                className="form-control"
                placeholder={`Enter ${type === "email" ? "email" : "OTP"}`}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button type="submit" className="btn btn-secondary btn-block">
                {type === "email" ? "Send to Email" : "Enter OTP"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
