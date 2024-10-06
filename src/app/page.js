import TheFooter from "@/components/TheFooter";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { Tooltip } from "flowbite-react";

export default function Home() {
  return (
    <>
      <Navbar />
      {/*Hero section*/}
      <section className="bg-cover bg-[url('/hero.jpg')] bg-top bg-no-repeat bg-gray-500 bg-blend-multiply">
        <div className="px-4 max-w-6xl mx-auto text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Multi-Family Real Estate Investor
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            We value Relationships over Transactions.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              href="/about"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-blue-200 hover:text-gray-700"
            >
              Learn more
            </Link>
            <Link
              href="/#call"
              className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 hover:text-gray-100"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>
      <a
        target="_blank"
        href="mailto:jason@malabutecpa.com"
        className="bg-blue-400 rounded-full p-6 fixed z-10 bottom-3 right-2"
      >
        <Tooltip content="Get in touch" style="light" trigger="hover">
          <MdOutlineMail className="text-3xl text-white" />
        </Tooltip>
      </a>
      <Services />

      <div id="call">
        <CalendlyEmbed />
      </div>
      {/*<Testimonials />*/}
      <TheFooter />
    </>
  );
}
