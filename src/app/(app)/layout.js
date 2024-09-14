import FooterComponent from "@/components/FooterComponent";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { Tooltip } from "flowbite-react";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen mt-3">{children}</main>
      <Link href="mailto:jason@malabutecpa.com">
        <div className="bg-blue-400 rounded-full p-6 fixed bottom-3 right-2">
          <Tooltip
            content="Get in touch jason@malabutecpa.com"
            style="light"
            trigger="hover"
          >
            <MdOutlineMail className="text-3xl text-white" />
          </Tooltip>
        </div>
      </Link>

      <FooterComponent />
    </>
  );
};

export default AppLayout;
