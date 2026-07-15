import clientPromise from "@/lib/mongodb";


export default async function Treatments() {

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const services = await db
    .collection("services")
    .find({})
    .toArray();


  const formatted = services.map((service) => ({
    ...service,
    _id: service._id.toString(),
  }));


  return (

    <section className="bg-[#faf7f2] py-24 px-6">

      <div className="max-w-7xl mx-auto">


        {/* Header */}

        <div className="text-center mb-16">

          <h1
            className="
            text-4xl
            md:text-5xl
            font-light
            tracking-wide
            text-[#3d3b3a]
            "
          >
            Våra tjänster
          </h1>


          <div
            className="
            w-20
            h-[2px]
            bg-[#b08d57]
            mx-auto
            mt-5
            "
          />


          <p
            className="
            max-w-2xl
            mx-auto
            mt-6
            text-lg
            text-gray-600
            leading-relaxed
            "
          >
            Professionella flättjänster skapade med
            precision, kreativitet och omsorg för ditt hår.
          </p>


        </div>





        {/* Cards */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-10
          "
        >


          {formatted.map((service) => (

            <div
              key={service._id}
              className="
              group
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-500
              "
            >



              {/* Image */}

              <div
                className="
                overflow-hidden
                h-[350px]
                "
              >

                <img
                  src={service.images}
                  alt={service.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                  "
                />

              </div>





              {/* Content */}

              <div
                className="
                p-7
                "
              >

                <h2
                  className="
                  text-2xl
                  font-medium
                  tracking-wide
                  text-[#3d3b3a]
                  mb-3
                  "
                >
                  {service.title}
                </h2>


                <p
                  className="
                  text-gray-600
                  leading-relaxed
                  "
                >
                  {service.description}
                </p>



                <button
                  className="
                  mt-6
                  text-sm
                  uppercase
                  tracking-widest
                  text-[#b08d57]
                  hover:text-black
                  transition
                  "
                >
                  Boka Tid →
                </button>


              </div>


            </div>


          ))}


        </div>


      </div>


    </section>

  );
}