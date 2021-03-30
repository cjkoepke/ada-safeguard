import * as React from "react";
import * as ReactDOM from "react-dom";

import '../styles/popup.css';

const Welcome = () => {
  return (
    <>
      <h1>✅ ADA Scam Alert</h1>
      <p>You're good! We did not detect this site as a scam. You can see the <a href="#">full list of scam sites here</a>.</p>
    </>
  );
};

ReactDOM.render(
    <Welcome />,
  document.getElementById("root")
);
