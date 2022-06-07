import React from "react";

const LoggedIn = ({ allEmails, setLoggedIn }) => {
  console.log(allEmails);
  return (
    <div>
      <h1> You are logged in. All the emails that have logged in are:</h1>
      {allEmails.map((email, index) => {
        return (
          <h2>
            {index + 1} . {email}
          </h2>
        );
      })}
      <button onClick={() => setLoggedIn(false)}>Logout</button>
    </div>
  );
};

export default LoggedIn;
