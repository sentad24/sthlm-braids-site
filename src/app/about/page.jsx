import Image from "next/image";
import AboutImage from "@/../public/main.jpg";


export default function AboutPage() {
  return (
    <main className="aboutPage">

      <section
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-25
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-16
            items-center
          "
        >

          {/* Image */}

          <div className="aboutImage">

            <Image
              src={AboutImage}
              alt="Sthlm Braids"
              className="
                w-full
                h-auto
                object-cover
              "
            />

          </div>



          {/* Text */}

          <div className="aboutContent">

            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
              "
            >
              Om Oss
            </h1>


            <p
              className="
                mt-6
                text-base
                sm:text-lg
                leading-relaxed
              "
            >
              Välkommen till Sthlm Braids. Vi skapar professionella flätor
              och kreativa frisyrer med fokus på kvalitet, detaljer och
              personlig stil.
            </p>


            <p
              className="
                mt-5
                text-base
                sm:text-lg
                leading-relaxed
              "
            >
              Varje kund är unik och därför anpassar vi varje behandling
              efter dina önskemål och din hårtyp.
            </p>

          </div>


        </div>


      </section>


    </main>
  );
}