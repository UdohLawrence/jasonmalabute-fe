import FooterComponent from "@/components/FooterComponent";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import Link from 'next/link';
import { IoChatbubbleOutline } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <Navbar />
      {/*Hero section*/}
      <section className="bg-cover bg-[url('/hero-image.jpg')] bg-no-repeat bg-gray-700 bg-blend-multiply">
        <div className="px-4 max-w-6xl mx-auto text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Multi-Family Real Estate Investor
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            We value Relationships over Transactions.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              href="/call"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Book a Call
            </Link>
            <Link
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
      <Link href="mailto:jason@malabutecpa.com">
        <div className="bg-blue-400 rounded-full p-6 fixed bottom-3 right-2">
          <IoChatbubbleOutline className="text-2xl text-white" />
        </div>
      </Link>
      <Services />
      {/*<Testimonials />*/}
      <FooterComponent />
    </>
  );
}
