import { urlForImage } from "@/sanity/lib/image";
import { Skill } from "@/types";
import Image from "next/image";

interface Props {
  skill: Skill;
}

function SkillCard({ skill }: Props) {
  return (
    <li className="flex justify-center items-center flex-col min-h-[100px] bg-gray-100 rounded-xl flex-grow flex-shrink basis-[100px] p-1">
      <Image
        src={urlForImage(skill.image).width(120).url()}
        alt={skill.title}
        width={50}
        height={50}
      />
      <p className="text-sm uppercase font-semibold mt-3">{skill.title}</p>
    </li>
  );
}

export default SkillCard;
