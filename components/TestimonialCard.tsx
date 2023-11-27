import Image from "next/image";

// types
import { Testimonial } from "@/types";

import { urlForImage } from "@/sanity/lib/image";

interface Props {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="flex justify-center items-center flex-col h-full text-center max-w-[500px] mx-auto my-8">
      {testimonial.picture && (
        <Image
          src={urlForImage(testimonial.picture).width(84).url()}
          width={84}
          height={84}
          alt={testimonial.name}
        />
      )}

      <q className="my-8 text-xl">{testimonial.content}</q>
      <div className="mt-4">
        <p className="font-bold text-lg">{testimonial.name}</p>
        <p>{testimonial.position}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
