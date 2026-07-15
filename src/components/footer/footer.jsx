"use client";

import Image from "next/image";

import Logo from "@/../public/logos/SbDark.png";
import Cellphone from "@/../public/icons/phone.png";
import Email from "@/../public/icons/email.png";
import FacebookIcon from "@/../public/socialmedia/facebook.png";
import InstagramIcon from "@/../public/socialmedia/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-[#F8F5F2] border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Logo */}
          <div className="space-y-5">
            <Image
              src={Logo}
              alt="Sthlm Braids Logo"
              className="w-36 h-auto"
            />

            <p className="text-gray-600 leading-7 max-w-sm">
              Flätor, skyddande styling och kreativa frisyrer
              skapade med omsorg och kvalitet.
            </p>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Kontakta oss
            </h3>

            <div className="space-y-4">

              <a
                href="tel:+46712345678"
                className="flex items-center gap-3 text-gray-700 hover:text-amber-700 transition"
              >
                <Image
                  src={Cellphone}
                  width={18}
                  height={18}
                  alt="Phone"
                />

                <span>
                  071-234 56 78
                </span>
              </a>


              <a
                href="mailto:braidsonpoint@hotmail.com"
                className="flex items-center gap-3 text-gray-700 hover:text-amber-700 transition"
              >
                <Image
                  src={Email}
                  width={18}
                  height={18}
                  alt="Email"
                />

                <span>
                  braidsonpoint@hotmail.com
                </span>
              </a>

            </div>
          </div>


          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Följ oss
            </h3>

            <div className="flex gap-5">

              <a
                href="https://www.facebook.com/p/sthlmbraids-100042176092014/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <Image
                  src={FacebookIcon}
                  width={34}
                  height={34}
                  alt="Facebook"
                />
              </a>


              <a
                href="https://www.instagram.com/sthlmbraids/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <Image
                  src={InstagramIcon}
                  width={34}
                  height={34}
                  alt="Instagram"
                />
              </a>

            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>
            © 2026 Sthlm Braids. All rights reserved.
          </p>

          <a
            href="/privacy-policy"
            className="hover:text-black transition"
          >
            Privacy Policy
          </a>

          <p>
            Designed & Developed by ArtThroughCode
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;