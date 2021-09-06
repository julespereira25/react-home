import React from "react";
import "./NutrientCard.scss";
import { NutritionData } from "../Personalized nutrition/nutritiondata";

function NutrientCard() {
  return (
    <div className="PersonalizedNutrition__cards">
      {NutritionData.map((item, index) => (
        
        <div className={`nutrientCard item-${index + 1}`}>
          <img
            className="nutrientCard__image"
            key={item.nutritionImageKey}
            alt=""
            src={item.src}
          />
          <h2 className="nutrientCard__header" key={item.nutritionKey}>
            {item.txt}
          </h2>
          <p className="nutrientCard__content" key={item.nutritionContentKey}>
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NutrientCard;
