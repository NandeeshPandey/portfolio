import Image from "next/image";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

// actions
import { getSkillByTitle } from "@/sanity/action";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";

interface Props {
  params: {
    language: string;
  };
}

async function Language({ params }: Props) {
  const language = decodeURIComponent(params.language);
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

  const portableTextcomponents: Partial<PortableTextReactComponents> = {
    marks: {
      strong: ({ children }) => (
        <h2 className="text-primary text-lg mt-8 mb-2 font-semibold">
          {children}
        </h2>
      ),
    },
    block: {
      normal: ({ children }) => <p className="text-gray-500">{children}</p>,
    },
  };

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
        </section>
        <section className="relative">
          <div className="absolute bg-primary h-[40px] w-full z-0"></div>
          <div className="p-2">
            <article className="bg-white rounded-md max-w-[800px] p-2 mx-auto shadow-md w-full relative z-10  md:p-3 lg:p-4">
              {languageData.article ? (
                <PortableText
                  value={languageData.article}
                  components={portableTextcomponents}
                />
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
