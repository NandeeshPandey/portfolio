import Image from "next/image";

// components
import SkillCard from "@/components/SkillCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// actions
import { getSkills, getTestimonials } from "@/sanity/action";
import { Skill } from "@/types";
import CallToAction from "@/components/CallToAction";

export const revalidate = 900;

export default async function Home() {
  const skills = await getSkills();
  const testimonials = await getTestimonials();

  return (
    <>
      <Navbar />
      <main>
        {/* hero section */}
        <section className="max-w-[1200px] mx-auto mt-8 flex items-center flex-col py-0 lg:flex-row lg:py-6">
          <div className="pt-8 flex-1 text-center lg:text-left">
            <h1 className="font-bold leading-tight text-5xl lg:text-6xl lg:leading-tight">
              Connecting Vision with
              <span className="text-primary"> Expertise</span>
            </h1>
            <p className="mt-4">
              Your bridge to exceptional developmental solutions
            </p>
            <a
              className="inline-block text-center mt-8 bg-white text-primary border border-primary text-md uppercase px-5 py-3 rounded-full max-w-[200px] w-full font-bold transition-all hover:bg-primary hover:text-white"
              href="#aboutUs"
            >
              Get to know us
            </a>
            {/* <div className="flex items-center justify-center py-8 my-4">
              <Image src="/avatar.svg" alt="avatar" width={150} height={150} />
            </div> */}
          </div>
          <div className="flex-1 mt-12 lg:mt-0 flex justify-end">
            <Image
              width={600}
              height={600}
              src="/hero-banner.svg"
              alt="hero banner"
            />
          </div>
        </section>

        {/* why hire us section */}
        <section className="bg-slate-100 px-2 py-10">
          <h2 className="text-3xl text-center">Why to hire us?</h2>
          <ul className="max-w-[1200px] mx-auto mt-8 text-center leading-relaxed flex flex-wrap gap-10 justify-center">
            <li className="bg-white rounded-md basis-[500px] shadow-md">
              <h3 className="text-xl text-white bg-gradient-to-r from-[#57b194] to-accent py-2 mb-2 rounded-t-md uppercase">
                Quality Work
              </h3>
              <p className="p-2 text-sm">
                Here at codinghelp we believe in 100% customer satisfaction. We
                provide quality work, all the codes provided by us will be
                original work, no copy paste from any source. We add comments in
                codes so you can understand logics been used. Also, if needed we
                will make free edits, and if needed we can arrange meetings to
                clear all doubts.
              </p>
            </li>
            <li className="bg-white rounded-md basis-[500px] shadow-md">
              <h3 className="text-xl text-white bg-gradient-to-r from-[#57b194] to-accent py-2 mb-2 rounded-t-md uppercase">
                Sticking To Requirements
              </h3>
              <p className="p-2 text-sm">
                We will complete projects as per the given requirements, here at
                codinghelp we have all types of framework and libraries based on
                your preferred language. So once you share proper requirements
                you can sit back and relax.
              </p>
            </li>
            <li className="bg-white rounded-md basis-[500px] shadow-md">
              <h3 className="text-xl text-white bg-gradient-to-r from-[#57b194] to-accent py-2 mb-2 rounded-t-md uppercase">
                Best Prices
              </h3>
              <p className="p-2 text-sm">
                Codinghelp will provide you best possible prices in market, we
                don&apos;t charge extra for urgent work. We don&apos;t take
                advance payments, first we will share updates and then you can
                pay us in parts, depending on updates. We accept PayPal, Direct
                Bank Transfer, Western Union, Payoneer and UPI also.
              </p>
            </li>
            <li className="bg-white rounded-md basis-[500px] shadow-md">
              <h3 className="text-xl text-white bg-gradient-to-r from-[#57b194] to-accent py-2 mb-2 rounded-t-md uppercase">
                Fast Delivery
              </h3>
              <p className="p-2 text-sm">
                Codinghelp believes in fast delivery without compromising with
                quality, so that our client can get enough time to review codes/
                projects and ask their doubts. Also, if needed we can provide
                working videos of projects without any extra charges.
              </p>
            </li>
            <li className="bg-white rounded-md basis-[500px] shadow-md ">
              <h3 className="text-xl text-white bg-gradient-to-r from-[#57b194] to-accent py-2 mb-2 rounded-t-md uppercase">
                Around-the-clock Support
              </h3>
              <p className="p-2 text-sm">
                Once we agree on terms and deal is confirmed then codinghelp
                will provide you regular updates, if it is urgent work then we
                can provide hourly updates also. In this way our customers stay
                updated throughout the project.
              </p>
            </li>
          </ul>
        </section>

        {/* about section */}
        <section
          className="mt-0 bg-primary text-white min-h-[300px] flex items-center justify-center"
          id="aboutUs"
        >
          <div className="max-w-[800px] mx-auto text-center py-6">
            <h2 className="text-2xl font-bold lg:text-3xl">
              Hi, We are <span>CodingHelp. Nice to meet you!</span>
            </h2>
            <p className="mt-6 text-white leading-relaxed text-md">
              Codinghelp is dedicated to provide coding solutions related to all
              programming languages. We have more than 10 years of experience in
              Development be it Software Development, Android Development, IOS
              Development, Embedded System, Web Development, Verification
              Languages like Dafny. We believe in 100% customer satisfaction,
              for which we are dedicated to provide regular updates through the
              project, follow all instructions as stated by customer, and taking
              payment after updates are provided and that too in parts.
              Codinghelp will always provide well organized and well commented
              codes so our customers can easily understand logic applied in
              codes.
            </p>
          </div>
        </section>

        {/* skills section */}
        <section className="relative">
          <div className="absolute h-20 bg-primary w-full z-0"></div>

          <ul className="flex justify-center items-center flex-wrap text-center z-10 relative bg-white rounded-md max-w-[400px] mx-auto md:max-w-[1200px] shadow-md gap-10 p-5 max-h-[800px] overflow-auto scrollbar-hide">
            {skills?.length > 0 &&
              skills.map((skill: Skill) => (
                <SkillCard key={skill._id} skill={skill} />
              ))}
          </ul>
        </section>

        {/* testimonials section */}
        <section className="mt-20 container mx-auto">
          <div className="my-4 text-center">
            <h2 className="text-2xl font-bold lg:text-3xl">Testimonials</h2>
            <p className="mt-2 text-md">
              People I&apos;ve worked with have said some nice things...
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </section>

        {/* cta section */}
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
