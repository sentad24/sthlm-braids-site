import Image from "next/image";

import Cellphone from "@/../public/icons/phone.png";
import Email from "@/../public/icons/email.png";
import FacebookIcon from "@/../public/socialmedia/facebook.png";
import InstagramIcon from "@/../public/socialmedia/instagram.png";


export default function ContactPage() {

  return (

    <main className="contactPage">

      <section
        className="
          max-w-5xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-20
        "
      >

        {/* Header */}

        <div className="text-center">

          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
            "
          >
            Kontakta Oss
          </h1>


          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-base
              sm:text-lg
              leading-relaxed
            "
          >
            Har du frågor om våra behandlingar, priser eller vill du veta
            vilken stil som passar dig? Kontakta oss så hjälper vi dig gärna.
          </p>

        </div>



        {/* Contact + Opening Hours */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-10
          "
        >


          {/* Contact */}

          <div>

            <h2 className="text-2xl sm:text-3xl">
              Kontakt
            </h2>


            <div className="mt-6 space-y-4">


              <a
                href="tel:+46712345678"
                className="
                  flex
                  items-center
                  gap-4
                  hover:text-amber-700
                  transition
                "
              >

                <Image
                  src={Cellphone}
                  width={22}
                  height={22}
                  alt="Phone"
                />

                <span>
                  071-234 56 78
                </span>

              </a>



              <a
                href="mailto:braidsonpoint@hotmail.com"
                className="
                  flex
                  items-center
                  gap-4
                  hover:text-amber-700
                  transition
                "
              >

                <Image
                  src={Email}
                  width={22}
                  height={22}
                  alt="Email"
                />

                <span>
                  braidsonpoint@hotmail.com
                </span>

              </a>


            </div>


          </div>




          {/* Opening Hours */}

          <div>

            <h2 className="text-2xl sm:text-3xl">
              Öppettider
            </h2>


            <div className="mt-6 space-y-2">

              <p>
                Måndag - Fredag
              </p>

              <p>
                10:00 - 18:00
              </p>


              <p className="mt-4">
                Lördag
              </p>

              <p>
                10:00 - 16:00
              </p>


              <p className="mt-4">
                Söndag: Stängt
              </p>

            </div>


          </div>


        </div>




        {/* Social Media */}

        <div
          className="
            mt-14
            text-center
          "
        >

          <h2 className="text-2xl sm:text-3xl">
            Följ Oss
          </h2>


          <p className="mt-3">
            Se våra senaste frisyrer och inspiration.
          </p>



          <div
            className="
              mt-6
              flex
              justify-center
              gap-6
            "
          >

            <a
              href="https://www.instagram.com/sthlmbraids/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:scale-110
                transition
              "
            >

              <Image
                src={InstagramIcon}
                width={40}
                height={40}
                alt="Instagram"
              />

            </a>



            <a
              href="https://www.facebook.com/p/sthlmbraids-100042176092014/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:scale-110
                transition
              "
            >

              <Image
                src={FacebookIcon}
                width={40}
                height={40}
                alt="Facebook"
              />

            </a>


          </div>


        </div>




        {/* Booking */}

        <div
          className="
            mt-14
            flex
            justify-center
          "
        >

            <a
            href="/booktime"
            className="
                inline-flex
                items-center
                justify-center
                mt-8

                w-full
                sm:w-auto

                px-12
                py-4

                text-lg
                sm:text-xl
                font-semibold

                rounded-xl

                transition
                duration-300

                hover:scale-105
            "
            >
            Boka Tid
            </a>

        </div>


      </section>


    </main>

  );
}