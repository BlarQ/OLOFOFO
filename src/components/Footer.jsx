

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            OLOFOFO
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Building a better digital experience for everyone.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-gray-600 dark:text-gray-400">
            <Link href="/about" className="hover:text-gray-900 dark:hover:text-white">
              About Us
            </Link>
            <Link href="/services" className="hover:text-gray-900 dark:hover:text-white">
              Services
            </Link>
            <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white">
              Privacy Policy
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <AiOutlineTwitter size={24} />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <AiOutlineInstagram size={24} />
            </Link>
            <Link
              href="https://github.com"
              aria-label="Github"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <AiOutlineGithub size={24} />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; 2024 OLOFOFO. All rights reserved.
          </p>

          <Button variant="outline" className="mt-4 md:mt-0 dark:bg-gray-900 dark:text-white">
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;