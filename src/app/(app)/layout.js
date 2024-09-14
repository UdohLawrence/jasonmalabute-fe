import TheFooter from "@/components/TheFooter";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { Tooltip } from "flowbite-react";

const AppLayout = ({ children }) => {
  return (
      <div className="min-h-screen flex flex-col">
          <Navbar className="shrink-0"/>
          <main className="flex-1 w-full mt-12">{children}</main>
          <Link target="_blank" href="mailto:jason@malabutecpa.com"
                className="bg-blue-400 rounded-full p-6 fixed bottom-3 right-2">
              <Tooltip
                  content="Get in touch"
                  style="light"
                  trigger="hover"
              >
                  <MdOutlineMail className="text-3xl text-white"/>
              </Tooltip>
          </Link>

          <TheFooter className="shrink-0"/>
      </div>
  );
};

export default AppLayout;
