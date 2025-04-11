// import { AppleCardsCarouselDemo } from "@/components/ProductCard";

// const page = () => {
//   return (
//     <div className="bg-green-900 min-h-screen h-screen w-full">
//       <AppleCardsCarouselDemo />
//     </div>
//   );
// };

// export default page;

"use client";
import { ProductCard } from "@/components/ProductCard";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Image from "next/image";

const page = () => {
  return (
    <div className="z-50 h-screen min-h-screen relative w-full overflow-hidden bg-green-950 flex flex-col items-center">
      <div className="absolute inset-0 w-full h-full bg-green-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="z-30 my-10 md:mt-28 items-center justify-center flex flex-col gap-2">
        <div className="bg-green-100 rounded-lg py-2 px-5">
          <Image
            src="/geotravels.png"
            alt="geomeridien logo"
            width={2006}
            height={714}
            className="object-cover w-24 md:w-32 h-auto"
            priority={true}
          />
        </div>
        <p className={cn("md:text-5xl text-3xl font-semibold text-green-100 relative z-20")}>
          Geomeridian
        </p>
        <p className="max-w-md text-center mt-2 text-white relative z-20">
          Geo Travels is a company that makes your visit to major destinations
          easier by bundling prepaid admissions to local top attractions.
        </p>

        <div className="container mx-auto">
          <p>Explore Our Other Products</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
