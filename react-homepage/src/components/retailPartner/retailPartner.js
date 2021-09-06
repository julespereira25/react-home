import React from "react";
import "./retailPartner.scss";
import RetailPartnerCard from "./retailPartnerCards";

function RetailPartner() {
  return (
    <div className="retail">
      <h1 className="retail__header">RETAIL PARTNERS</h1>
      <RetailPartnerCard txt="RETAIL PARTNERS" />
    </div>
  );
}

export default RetailPartner;
