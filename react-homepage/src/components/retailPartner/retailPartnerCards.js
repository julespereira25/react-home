import React from "react";
import "./retailPartnerCards.scss";
import { retailPartner } from "./retailPartnerData";

function RetailPartnerCard() {
  return (
    <div className="retailCard">
      {retailPartner.map((item) => (
        <div className="retailPartnerCard">
          <img className="retailPartnerCard__image" src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}

export default RetailPartnerCard;
