import { urlForImage } from "@/sanity/lib/image";
import { Skill } from "@/types";
import Image from "next/image";

interface Props {
  skill: Skill;
}

function SkillCard({ skill }: Props) {
  return (
    <li className="flex justify-center items-center flex-col min-h-[200px] bg-gray-100 rounded-xl flex-grow flex-shrink basis-[200px]">
      <Image
        src={urlForImage(skill.image).width(120).url()}
        alt={skill.title}
        width={100}
        height={100}
      />
      <p className="text-lg uppercase font-bold mt-6">{skill.title}</p>
    </li>
  );
}

export default SkillCard;
