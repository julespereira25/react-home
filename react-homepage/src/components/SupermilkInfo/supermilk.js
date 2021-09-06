import React from "react";
import "./supermilk.scss";
import SupermilkContent from "./supermilkcontent";
import kids from "../assets/kids_image.png";

function SupermilkInfo() {
  return (
    <div className="supermilk">
      <h1 className="supermilk__header">
        NATURALLY BOOST GROWTH, STRENGTH, IMMUNITY & RECOVERY WITH
        <span>SUPERMILK</span>
      </h1>
      <SupermilkContent />
      <div className="supermilk__image">
        <img className="supermilk__image__kids" src={kids} />
      </div>
      <div className="supermilk__cards">
        <div className="supermilk__cards__content d-flex justify-content-center  align-items-center">
          <div className="supermilk__cards1">NO</div>
          <div className="supermilk__cards2">
            Refined Sugar, Preservatives, Colours, Trans Fats, Artificial
            Flavours, Gluten, Soya Protein, Sweeteners
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupermilkInfo;
