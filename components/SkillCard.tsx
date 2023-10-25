import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { Skill } from "@/types";
import Image from "next/image";

interface Props {
  skill: Skill;
}

function SkillCard({ skill }: Props) {
  return (
    <li className="flex justify-center items-center min-h-[100px] bg-gray-100 rounded-xl flex-grow flex-shrink basis-[100px] p-1 cursor-pointer">
      <Link
        href={`/languages/${skill.title}`}
        className="text-center flex items-center justify-center flex-col"
      >
        <Image
          src={urlForImage(skill.image).width(50).url()}
          alt={skill.title}
          width={50}
          height={50}
        />
        <p className="text-sm uppercase font-semibold mt-3">{skill.title}</p>
      </Link>
    </li>
  );
}

export default SkillCard;
