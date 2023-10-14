import { groq } from "next-sanity";
import { readClient } from "./lib/client";

export const getSkills = async () => {
  try {
    const skills = await readClient.fetch(
      groq`*[_type == "skill"]|order(orderRank){
                _id,
                title,
                image
            }`
    );
    return skills;
  } catch (error) {
    console.error(error);
  }
};

export const getTestimonials = async () => {
  try {
    const testimonials = await readClient.fetch(
      groq`*[_type == "testimonial"]|order(orderRank){
        _id,
        name,
        picture,
        content,
        position
      }`
    );
    return testimonials;
  } catch (error) {
    console.error(error);
  }
};
