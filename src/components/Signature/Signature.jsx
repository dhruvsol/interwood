import React from "react";
import "./Signature.scss";
export const Signature = ({ heading, description, signature, url }) => {
  return (
    <>
      <div className="signature">
        <h1>{heading}</h1>
        <div className="signature-image">
          <div>
            <img src={url} alt="chairman" />
          </div>

          <div className="signataure-h2">
            <h2 className="signature-sign">{signature}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
