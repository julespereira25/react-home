import React from "react";
import { supermilk } from "./supermilkdata";
import "./supermilkcontent.scss";

function SupermilkContent() {
  return (
    <div className="supermilk__content">
      {supermilk.map((item, index) => (
        <div className={`content card-${index + 1}`}>
          <div className="supermilk__content__cards">
            <img
              src={item.src}
              alt={item.alt}
              className="supermilk__content__images"
              key={item.contentImageKey}
            />
            <p key={item.contentKey}>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SupermilkContent;
