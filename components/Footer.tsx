import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-primary p-6 md:p-10 lg:p-20 text-white">
      <div className="flex flex-col justify-center items-center container mx-auto">
        <div className="text-center flex items-center flex-col justify-center">
          <Image src="/logo.svg" alt="Nandeesh Pandey" width={70} height={70} />
          <p className="mt-6">Living, Learning, & Leveling Up</p>
          <p className="mt-2">One day at a time</p>
        </div>
      </div>
      <div className="flex gap-10 my-8 justify-center items-center">
        <a
          href="https://t.me/mytelegramusername"
          className="bg-white rounded-full p-2"
        >
          <Image
            src="/social-icons/telegram.png"
            width={28}
            height={28}
            alt="telegram"
          />
        </a>
        <a
          href="mailto:nandeespandey@gmail.com"
          className="bg-white rounded-full p-2"
        >
          <Image
            src="/social-icons/gmail.png"
            width={28}
            height={28}
            alt="gmail"
          />
        </a>
        <a
          href="https://wa.me/917007168138"
          className="bg-white rounded-full p-2"
        >
          <Image
            src="/social-icons/whatsapp.png"
            width={28}
            height={28}
            alt="whatsapp"
          />
        </a>
      </div>

      <div className="text-sm mt-16 text-center flex items-center justify-center gap-2">
        <p>copyrights &copy; 2023.</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
