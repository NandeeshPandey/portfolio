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

export const getSkillByTitle = async (title: string) => {
  try {
    const skill = await readClient.fetch(
      groq`*[_type == "skill" && lower(title) == lower($title)] {
        _id,
        title,
        image,
        article,
        metadataDescription,
        subTitle
      }`,
      {
        title,
      }
    );
    return skill[0];
  } catch (error) {
    console.log(error);
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
