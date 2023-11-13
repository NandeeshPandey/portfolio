import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

// actions
import { getSkillByTitle } from "@/sanity/action";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import dynamic from "next/dynamic";

// no-ssr components
const PortableTextWrapper = dynamic(
  () => import("../../../components/PortableTextWrapper"),
  { ssr: false }
);

export const revalidate = 900;

interface Props {
  params: {
    language: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const language = decodeURIComponent(params.language).trim();
  const languageData = await getSkillByTitle(language);

  const fallbackDescription = `Discover the Power of ${language} Programming.I showcase the unmatched efficiency, performance, and versatility of the ${language} programming language. Explore real-world ${language} projects and find out how this language can elevate your software solutions in 2023. Interested in harnessing the potential of ${language} for your projects? Let's connect and explore the possibilities together.`;

  return {
    title: language,
    description: languageData?.metadataDescription || fallbackDescription,
    keywords: [
      "codinghelp",
      `codinghelp ${language}`,
      language,
      `${language} coding help`,
    ],
  };
}

async function Language({ params }: Props) {
  const language = decodeURIComponent(params.language).trim();
  const languageData = await getSkillByTitle(language);
  if (!languageData) {
    return (
      <>
        <Navbar />
        <main>
          <section className="min-h-[200px] bg-primary text-white flex justify-center items-center py-4 px-2">
            <h1 className="text-2xl text-center font-bold">Page Not Found</h1>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-[200px] bg-primary text-white flex flex-col justify-center items-center py-4 px-2">
          <div className="w-[120px] h-[120px] rounded-full bg-white flex items-center justify-center  border-4 border-accent">
            <Image
              src={urlForImage(languageData.image).width(70).url()}
              className="block"
              width={70}
              height={70}
              alt={language}
            />
          </div>
          <h1 className="text-3xl text-center font-bold mt-2 md:text-5xl lg:text-7xl">
            {language}
          </h1>
          <h2 className="text-center text-lg mt-4 lg:text-xl">
            {languageData.subTitle}
          </h2>
        </section>
        <section className="relative">
          <div className="absolute bg-primary h-[40px] w-full z-0"></div>
          <div className="p-2">
            <article className="bg-white rounded-md max-w-[800px] p-2 mx-auto shadow-md w-full relative z-10  md:p-3 lg:p-4">
              {languageData.article ? (
                <PortableTextWrapper languageData={languageData} />
              ) : (
                <p className="my-4 text-center text-xl">
                  No article found for {language}
                </p>
              )}
            </article>
          </div>
        </section>

        <CallToAction />
        <Footer />
      </main>
    </>
  );
}
export default Language;
