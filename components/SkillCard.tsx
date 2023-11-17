import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { Skill } from "@/types";
import Image from "next/image";

interface Props {
  skill: Skill;
}

function SkillCard({ skill }: Props) {
  return (
    <li className="flex justify-center items-center min-h-[100px] bg-gray-100 rounded-xl flex-grow flex-shrink basis-[100px] p-1 cursor-pointer group transition duration-300 hover:bg-accent hover:shadow-[0_0_10px_2px] hover:shadow-accent">
      <Link
        href={`/languages/${encodeURIComponent(skill.title)}`}
        className="text-center flex items-center justify-center flex-col"
      >
        <Image
          src={urlForImage(skill.image).width(50).url()}
          alt={skill.title}
          width={50}
          height={50}
          className="group-hover:scale-110 transition duration-300"
        />
        <p className="text-sm uppercase font-semibold mt-3">{skill.title}</p>
      </Link>
    </li>
  );
}

export default SkillCard;
