"use client";

import { useState } from "react";
import Image from "next/image";

import MainImage from "@/../public/main1.jpg";
import DownArrowIcon from "@/../public/icons/down-arrow.png";


const treatmentOptions = [
  { 
    id: 1, 
    title: "Box Braids", 
    description: "Enskilda, jämnt fördelade flätor som ger både volym och skydd för ditt naturliga hår." 
  },
  { 
    id: 2, 
    title: "Cornrows", 
    description: "Tighta, eleganta flätor nära hårbotten som kan stylas på många olika sätt." 
  },
  { 
    id: 3, 
    title: "Knotless Braids", 
    description: "En mjukare variant av box braids som ger en naturlig känsla och minskar trycket på hårbotten." 
  },
  { 
    id: 4, 
    title: "Twists", 
    description: "Skyddande stil med tvåsträngade twists som är lätta att underhålla." 
  },
  { 
    id: 5, 
    title: "Feed-in Braids", 
    description: "Flätor med extra hår för att skapa längre och fylligare resultat." 
  },
  { 
    id: 6, 
    title: "Customized Style", 
    description: "Har du en specifik stil i åtanke? Kontakta oss så hjälper vi dig." 
  },
];


export default function TreatmentsSection() {

  const [expandedId, setExpandedId] = useState(null);


  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };


  return (

    <section className="
      bg-[#faf7f2]
      px-6
      py-20
    ">

      <div className="
        max-w-7xl
        mx-auto
      ">


        {/* Vision */}

        <div className="
          max-w-5xl
          mx-auto
          text-center
          mb-16
        ">

          <h1 className="
            text-xl
            md:text-3xl
            font-light
            leading-relaxed
            tracking-wide
            text-[#3d3b3a]
          ">

            Our vision is a world where everyone, no matter their background or
            hair type, feels confident and celebrated.

            At Sthlm Braids, we
            believe every braid is an opportunity to express individuality and
            style. With precision, care, and creativity, we make sure every
            twist and turn reflects your true self.

          </h1>

        </div>



        {/* Content */}

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          lg:gap-16
          items-start
        ">


          {/* Image */}

          <div className="
            overflow-hidden
            rounded-3xl
          ">

            <Image
              className="
                w-full
                h-[350px]
                md:h-[500px]
                object-cover
              "
              src={MainImage}
              alt="Braiding service"
            />

          </div>





          {/* Services */}

          <div>

            <div className="
              bg-white
              rounded-3xl
              shadow-md
              p-6
              md:p-10
            ">


              <h1 className="
                text-3xl
                md:text-4xl
                font-semibold
                text-[#3d3b3a]
                mb-5
              ">
                Tjänster
              </h1>



              <p className="
                text-base
                md:text-lg
                leading-relaxed
                text-[#6b6258]
                mb-8
              ">

                In for a little glow up? We keep our prices fair and worth their
                weight. Don&apos;t be afraid to give us a call for a little talk
                before you make your booking. We&apos;re here for you. Prices in
                the list below are starting prices.

              </p>




              {/* Accordion */}

              <div className="
                border-t
                border-[#e8dfd3]
              ">

                {treatmentOptions.map((treatment) => (

                  <div
                    key={treatment.id}
                    className="
                      border-b
                      border-[#e8dfd3]
                    "
                  >

                    <button

                      className="
                        w-full
                        flex
                        justify-between
                        items-center
                        py-5
                        text-left
                        text-lg
                        md:text-xl
                        font-medium
                        text-[#3d3b3a]
                        hover:text-[#b08d57]
                        transition
                      "

                      onClick={() => handleToggle(treatment.id)}

                      aria-expanded={
                        expandedId === treatment.id
                      }

                    >

                      {treatment.title}


                      <Image

                        alt="expand arrow"

                        width={18}

                        height={18}

                        className={`
                          transition-transform
                          duration-300

                          ${
                            expandedId === treatment.id
                            ? "rotate-180"
                            : ""
                          }
                        `}

                        src={DownArrowIcon}

                      />


                    </button>




                    <div

                      className={`

                        overflow-hidden
                        transition-all
                        duration-300
                        text-[#6b6258]

                        ${
                          expandedId === treatment.id
                          ? "max-h-40 opacity-100 pb-5"
                          : "max-h-0 opacity-0"
                        }

                      `}

                    >

                      {treatment.description}

                    </div>


                  </div>

                ))}

              </div>


            </div>

          </div>


        </div>


      </div>


    </section>

  );
}