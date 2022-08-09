import React from "react";
import "./Optin.css";
import { SocialIcon } from "react-social-icons";

function Optin() {
  return (
    <div className="optin">
      <p>Want to be the first to know when we launch?</p>
      <div>
        <SocialIcon
          url="https://linkedin.com/company/bracketsmiths"
          target="_blank"
          style={{ height: 30, width: 30, paddingLeft: 10, paddingRight: 10 }}
        />
        <SocialIcon
          url="https://twitter.com/bracketsmiths"
          target="_blank"
          style={{ height: 30, width: 30, paddingLeft: 10, paddingRight: 10 }}
        />
        <SocialIcon
          url="https://facebook.com/bracketsmiths"
          target="_blank"
          style={{ height: 30, width: 30, paddingLeft: 10, paddingRight: 10 }}
        />
      </div>
    </div>
  );
}

export default Optin;
