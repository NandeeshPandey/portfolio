import Image from "next/image";
import { Metadata } from "next";

// components
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "CodingHelp | Contact Page",
  description: "codinghelp contact page",
  keywords: ["codinghelp contact"],
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container mx-auto px-2 py-4">
          <div className="flex justify-center items-center flex-col">
            <Image src="/avatar.svg" alt="avatar" width={80} height={80} />
            <h1 className="text-3xl text-center mt-8 xl:text-5xl">
              Thanks for taking the time to reach out.
            </h1>
            <h2 className="text-3xl text-center xl:text-5xl mt-2">
              How can I help you today?
            </h2>
          </div>
          <div className="my-10 text-center">
            <p className="text-lg">
              Reach me at:{" "}
              <span className="text-primary">contact@gmail.com</span>
            </p>
          </div>
          <form
            action="/"
            className="max-w-[800px] mx-auto mt-16 border p-4 rounded-md flex flex-col gap-6 shadow-md lg:p-6"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                required
                className="border p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                className="border p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                className="border p-2 rounded-md"
                rows={10}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white p-4 rounded-md"
            >
              Send
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
