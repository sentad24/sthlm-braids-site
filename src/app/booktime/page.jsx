export default function Booking() {
  return (
    <section className="bg-[#faf7f2] px-6 py-25">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-[#3d3b3a]">
            Boka Tid
          </h1>
          <div className="w-20 h-[2px] bg-[#b08d57] mx-auto mt-5" />

          <p className="mt-6 text-lg text-gray-600">
            Välj önskad behandling och tid som passar dig.
          </p>

        </div>


        <div
          className="
          bg-white
          rounded-3xl
          shadow-xl
          overflow-hidden
          "
        >

          <iframe
            src="https://sthlmbraids.as.me/schedule.php"
            title="Sthlm Braids Booking"
            className="
              w-full
              h-[1800px]
              border-0
            "
          />

        </div>

      </div>

    </section>
  );
}