import "./PersonalizedNutrition.scss";
import NutrientCard from "../NutrientCard/NutrientCard";

function PersonalizedNutrition() {
  return (
    <div className="PersonalizedNutrition">
      <h1 className="PersonalizedNutrition__header">
        PERSONALIZED NUTRITION FOR NEXTGEN KIDS
      </h1>
      <p className="PersonalizedNutrition__content">
        The times have changed, so have your kids. Not the ground, they want to
        conquer the world. But, every kid is unique and so are their needs.
        GRITZO is the personalized nutrition brand to provide the nutrition they
        need as per their age, gender, and requirement.
      </p>
      <NutrientCard />
    </div>
  );
}

export default PersonalizedNutrition;
