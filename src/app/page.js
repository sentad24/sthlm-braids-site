import Test from "./treatments/mainPageTreatments";


export default function Home() {
  return (
    <div>


      {/* HERO */}

      <div className="mainSection w-full">

        <div className="heroSection relative w-full h-screen overflow-hidden">

          <video
            src="/herosectionvid.mp4"
            playsInline
            autoPlay
            loop
            muted
            className="hero-video absolute inset-0 w-full h-full object-cover"
          />


          <div
            className="
              textContainer
              absolute
              inset-0
              flex
              flex-col
              justify-center
              items-center
              text-center
              px-4
              sm:px-6
              md:px-10
            "
          >

            <div className="firstText">

              <h1
                className="
                  wellcomeText
                  text-[clamp(2.5rem,6vw,5rem)]
                  leading-tight
                  text-center
                "
              >
                Välkommen till
                <br />
                Sthlm Braids
              </h1>

            </div>


            <div
              className="
                secondText
                mt-4
                sm:mt-5
                max-w-xs
                sm:max-w-xl
                md:max-w-2xl
              "
            >

              <h2
                className="
                  text-base
                  sm:text-lg
                  md:text-xl
                "
              >
                Braids done professional twists, turns, and total perfection
                boka din tid nu.
              </h2>

            </div>


            <div
              className="
                btnContainer
                mt-6
                sm:mt-8
                flex
                flex-col
                sm:flex-row
                w-full
                sm:w-auto
                gap-3
                sm:gap-5
              "
            >

              <button className="btn w-full sm:w-auto px-8 py-3">
                Webshop
              </button>


              <button className="btn w-full sm:w-auto px-8 py-3">
                Boka
              </button>

            </div>


          </div>


        </div>

      </div>




      {/* SERVICES */}

      <section
        className="
          w-full
          px-4
          sm:px-6
          md:px-10
        "
      >

        <Test />

      </section>





      {/* ABOUT PREVIEW */}

      <section
        className="
          max-w-6xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-20
          text-center
        "
      >

        <h2
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
          "
        >
          Om Sthlm Braids
        </h2>


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
          Vi skapar professionella flätor och kreativa frisyrer
          med fokus på kvalitet, detaljer och personlig stil.
          Varje behandling anpassas efter kunden för att skapa
          en unik och personlig look.
        </p>


        <a
          href="/about"
          className="
            inline-block
            mt-8
            px-8
            py-3
          "
        >
          Läs mer
        </a>


      </section>






      {/* WHY CHOOSE US */}

      <section
        className="
          max-w-6xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-20
        "
      >

        <h2
          className="
            text-center
            text-3xl
            sm:text-4xl
            lg:text-5xl
          "
        >
          Varför välja oss?
        </h2>



        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
            mt-12
          "
        >


          <div className="text-center">

            <h3 className="text-xl sm:text-2xl">
              Professionell kvalitet
            </h3>

            <p className="mt-4">
              Noggrant arbete med fokus på detaljer och hållbara resultat.
            </p>

          </div>



          <div className="text-center">

            <h3 className="text-xl sm:text-2xl">
              Personlig stil
            </h3>

            <p className="mt-4">
              Vi skapar frisyrer som passar din personlighet och stil.
            </p>

          </div>




          <div className="text-center">

            <h3 className="text-xl sm:text-2xl">
              Trygg upplevelse
            </h3>

            <p className="mt-4">
              En bekväm och professionell upplevelse från början till slut.
            </p>

          </div>


        </div>


      </section>






      {/* BOOKING CTA */}

      <section
        className="
          max-w-5xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-20
          text-center
        "
      >

        <h2
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
          "
        >
          Redo för din nya look?
        </h2>


        <p className="mt-5 text-base sm:text-lg">
          Boka din tid idag och hitta din nästa favoritstil.
        </p>


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


      </section>



    </div>
  );
}