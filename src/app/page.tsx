import { Marquee } from "@/components/magicui/marquee";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="relative w-full min-h-screen bg-cover bg-center bg-[url(/skyline2.jpg)] pb-7 md:pb-0 md:flex md:justify-center md:items-center">
        <div className="absolute inset-0 opacity-70 bg-black" />
        <div className="relative z-10 flex flex-col justify-center items-center">
          {/* Visible Only On mobile */}
          <main className="flex md:hidden w-11/12 h-[375px] mb-9">
            <div className="flex-1 relative">
              <div className="relative mx-auto max-w-4xl mt-7 md:mt-10">
                <div className="relative mx-auto w-11/12 h-[375px]">
                  <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/cocoa.jpg"
                      alt="cocoa house"
                      width={544}
                      height={681}
                      className="object-cover rounded-2xl w-full h-full"
                    />
                  </div>

                  <div className="absolute -top-2 -left-2 w-12 h-12 bg-[#3b2cac] rounded-lg transform rotate-12 flex items-center justify-center">
                    <Star className="text-white" size={20} fill="white" />
                  </div>

                  <div className="z-10 absolute bottom-5 right-2.5 w-16 h-16 bg-[#ffc107] rounded-full flex items-center justify-center">
                    <div className="w-14 h-14 border border-dashed border-[#1a0a2e] rounded-full flex items-center justify-center">
                      <div className="text-[#1a0a2e] text-center text-xs font-bold">
                        BEST TOUR
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-10 right-3 w-32 h-48 bg-white rounded-xl overflow-hidden shadow-lg transform rotate-6">
                  <div className="relative w-full h-full">
                    <Image
                      src="/bowers.jpg"
                      alt="City view"
                      width={800}
                      height={450}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <Check className="text-[#1a0a2e]" size={12} />
                    </div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="text-white text-xs">♥</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Headline */}
          <section className="relative text-center md:mt-6 px-6 md:px-12 mx-auto max-w-6xl">
            <div className="text-amber-500 opacity-90 text-3xl md:text-4xl md:-mb-4 font-bold">
              Experience
            </div>
            <div className="flex items-center justify-center -ml-10 md:-ml-24 -mt-2">
              <div className="text-white text-2xl md:text-4xl font-semibold -mr-2 md:-mr-3 rotate-270">
                The
              </div>
              <div className="text-amber-500 text-7xl md:text-8xl font-bold">
                City
              </div>
              <div className="text-white text-6xl md:text-7xl font-bold ml-2">
                of
              </div>
            </div>
            <div className="text-amber-500 -mt-5 md:-mt-8 text-8xl md:text-9xl font-bold leading-none">
              Brown
            </div>
            <div className="text-amber-500 ml-10 md:ml-32 -mt-5 md:-mt-8 text-8xl md:text-9xl font-bold leading-none">
              Roofs
            </div>

            <div className="max-w-md md:max-w-2xl mx-auto flex flex-col gap-2">
              <div className="my-4 md:my-9">
                <Link
                  href={"/discover"}
                  className="transition-all duration-700 order-none px-6 md:px-7 py-2 md:py-3 border border-[#7AC142] text-[#F5F5F5] hover:bg-[#7AC142] rounded-full text-sm md:text-base"
                >
                  EXPLORE TOURS
                </Link>
              </div>
              <p className="text-white md:font-semibold text-base md:text-xl">
                ...Connecting Communities, Travel, Culture, Heritage,
                Creativity, And Hospitality!
              </p>
            </div>

            <div className="z-10 absolute top-2/6 left-4/5 rotate-12 w-22 h-22 bg-[#ffc107] rounded-full hidden md:flex items-center justify-center">
              <div className="w-20 h-20 border border-dashed border-[#1a0a2e] rounded-full flex items-center justify-center">
                <div className="text-[#1a0a2e] text-center text-base font-bold">
                  BEST TOUR
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={index}
              src="/geotravels.png"
              alt="geomeridien logo"
              width={2006}
              height={714}
              className="object-cover w-24 h-auto"
            />
          ))}
        </Marquee>
      </div>

      {/* laptop */}
      <div className="hidden md:block relative w-full bg-cover bg-center bg-[url(/micra.jpg)]">
      {/* <div className="hidden md:block relative w-full bg-green-300"> */}
        <div className="absolute inset-0 opacity-90 bg-black" />
        <div className="relative z-10 flex justify-evenly">
          <p className="max-w-xs px-5 text-lg text-left mt-20 font-medium text-white leading-8">
            <span className="font-bold text-[#ffc107] text-lg leading-12">
              Ibadan and its environs
            </span>{" "}
            offer a fascinating mixture of cultures rich in tradition, heritage,
            and crafts. Experience music, dance, and food from across the state,
            as well as museums, hills, crafts, and original palm wine; and don&apos;t
            forget the magical clicking language of the Ibadan people.
          </p>

          <div className="relative flex h-[700px] max-w-xl bg-cover bg-center shadow-xl">
            <div className="flex items-center justify-center gap-1">
              <div className="flex items-center gap-4 font-extrabold text-7xl text-[#ffc107] text-center">
                <div className="text-6xl -rotate-12">
                  <p>E</p>
                  <p>X</p>
                  <p>P</p>
                  <p>E</p>
                </div>
                <div>
                  <p>R</p>
                  <p>I</p>
                  <p>E</p>
                  <p>N</p>
                  <p>C</p>
                  <p>E</p>
                </div>
              </div>
              <div className="relative w-full h-full">
                <div className="absolute inset-0 opacity-50 bg-black" />
                <Image
                  src="/micra.jpg"
                  alt="City view"
                  width={1280}
                  height={1460}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center font-extrabold text-7xl text-[#ffc107] text-center">
                <p>I</p>
                <p>B</p>
                <p>A</p>
                <p>D</p>
                <p>A</p>
                <p>N</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-5 items-end px-5 justify-end mb-20 max-w-sm">
            <div className="w-full z-10 text-[#ffc107] text-right text-lg  mt-10 font-medium leading-7">
              Explore with us as you witness authentic experiences in and around
              the city of Ibadan as we take you on a memorable journey.
            </div>

            <div className="mt-5 w-20 h-20 transition-all duration-700 flex items-center justify-center text-center rounded-full bg-[#7AC14299] text-[#F5F5F5] hover:border-[#7AC14299] hover:border hover:bg-[#7AC14240] z-10">
              <Link
                href={"/discover"}
                className="transition-all duration-700 order-none text-sm"
              >
                EXPLORE TOURS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block md:hidden relative w-full bg-green-300 ">
        <div className="absolute inset-0 opacity-90 bg-black" />
        <div className="relative z-10">
          <div className="relative group transition-transform duration-300 mx-auto min-h-screen h-screen max-w-lg md:max-w-md bg-cover bg-center bg-[url(/micra.jpg)] backdrop-blur-md shadow-xl">
            <div className="absolute inset-0 opacity-50 bg-black" />
            <div className="absolute inset-0 top-10 font-extrabold text-[#ffc107] flex flex-col justify-center items-center text-center">
              <div>
                <p className="text-5xl">EXPE-</p>
                <p className="text-5xl">RIENCE</p>
                <p className="text-7xl -mt-2">IBADAN</p>
              </div>

              <div className="group transition-transform duration-300 backdrop-blur-xs w-5/6 mx-auto rounded-lg py-7 px-4 shadow-xl">
                <p className="text-base text-center font-medium text-white leading-8">
                  <span className="font-bold text-[#ffc107] text-lg">
                    Ibadan and its environs
                  </span>{" "}
                  offer a fascinating mixture of cultures rich in tradition,
                  heritage, and crafts. Experience music, dance, and food from
                  across the state, as well as museums, hills, crafts, and
                  original palm wine; and don&apos;t forget the magical clicking
                  language of the Ibadan people.
                </p>
              </div>

              <div className="w-full px-4 font-medium">
                Explore with us as you witness authentic experiences in and
                around the city of Ibadan as we take you on a memorable journey.
              </div>

              <div className="my-5 w-20 h-20 transition-all duration-700  text-center rounded-full bg-[#7AC14299] text-[#F5F5F5] hover:border-[#7AC14299] hover:border hover:bg-[#7AC14240] z-10">
                <Link
                  href={"/discover"}
                  className="transition-all duration-700 text-xs flex items-center justify-center  w-20 h-20"
                >
                  EXPLORE TOURS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
