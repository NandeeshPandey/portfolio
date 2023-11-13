import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-primary p-6 md:p-10 lg:p-20 text-white">
      <div className="flex flex-col justify-center items-center container mx-auto">
        <div className="text-center flex items-center flex-col justify-center">
          <div className="bg-white rounded-md p-1">
            <Image src="/logo.png" alt="Codinghelp" width={60} height={60} />
          </div>
          <p className="mt-6">Living, Learning, & Leveling Up</p>
          <p className="mt-2">One day at a time</p>
        </div>
      </div>
      <div className="flex flex-col gap-10 my-10 justify-center items-center lg:flex-row max-w-[900px] mx-auto divide-y-2 lg:divide-y-0 lg:divide-x-2">
        <div className="flex-1">
          <p className="text-center max-w-[300px] mx-auto font-bold">
            We accept Paypal, Payoneer, and Western Union
          </p>
          <div className="flex gap-5 justify-center items-center mt-4">
            <div className="bg-white rounded-full p-2">
              <Image
                src="/social-icons/paypal.png"
                width={28}
                height={28}
                alt="paypal"
              />
            </div>
            <div className="bg-white rounded-full p-2">
              <Image
                src="/social-icons/payoneer.png"
                width={28}
                height={28}
                alt="payoneer"
              />
            </div>
            <div className="bg-white rounded-full p-2">
              <Image
                src="/social-icons/western-union.png"
                width={28}
                height={28}
                alt="western union"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 pt-8 lg:pt-0">
          <p className="text-center font-bold max-w-[300px] mx-auto">
            Connect with us on social media
          </p>
          <div className="flex gap-5 justify-center items-center mt-4">
            <a
              href="https://t.me/+917007168138"
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
              href="mailto:nandeespandey1@gmail.com"
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
        </div>
      </div>

      <div className="text-sm mt-16 text-center flex items-center justify-center gap-2">
        <p>copyrights &copy; 2023.</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
