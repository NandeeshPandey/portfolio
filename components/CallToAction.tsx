import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="mt-20 relative py-10 p-4">
      <div className="absolute bottom-0 h-[100px] bg-primary w-full z-10 left-0"></div>
      <div className="relative bg-[#141C3A] z-20 max-w-[900px] w-full mx-auto text-white p-4 py-10 rounded-xl flex items-center justify-around gap-6 flex-col lg:flex-row">
        <h2 className="font-bold text-2xl">Start a project</h2>
        <p className="max-w-[300px] text-sm">
          Interested in working together? We should queue up a time to chat.
          I&apos;ll buy the coffee.
        </p>
        <Link
          href="/contact"
          className="p-2 border-2 rounded-full border-accent text-accent max-w-[150px] w-full text-center transition-all hover:bg-accent hover:text-white"
        >
          Let&apos;s do this
        </Link>
      </div>
    </section>
  );
}
