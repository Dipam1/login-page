import React from "react";

const LoggedIn = ({ allEmails, setLoggedIn }) => {
  //Remove duplicates from array
  const e = [...new Set(allEmails)];

  return (
    <div
      style={{
        border: "2px solid red",
        padding: "20px 40px",
        background: "#dfd",
        borderRadius: "10px",
        color:"rgb(103 142 15)"
      }}
    >
      <h1> You are logged in. All the emails that have logged in are:</h1>
      {e.map((email, index) => {
        return (
          <h2>
            {index + 1} . {email}
          </h2>
        );
      })}
      <button className="btn btn-success" onClick={() => setLoggedIn(false)}>Logout</button>
    </div>
  );
};

export default LoggedIn;
