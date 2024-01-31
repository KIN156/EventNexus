import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Slider from "@/components/ui/slider";

export default function Home() {
  return (
   <>
   <section className="bg-primary-50 bg-contain py-5 md:py-10">
    <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
      <div className="flex flex-col justify-center gap-8">
        <h1 className="h1-bold">
          Host, Connect, Celebrate
        </h1>
        <p className="p-regular-20 md:p-regular-24">
        Grow your business and delight your attendees with a seamless online registration experience — powered by EventNexus all-in-one events management and ticketing platform.
        </p>
        <Button asChild className="w-full button sm:w-fit" size="lg">
        <Link href="#events">
          Get started &#8594;
        </Link>
        </Button>
      </div>

      <Image src="/assets/images/hero.png" alt="hero image" width={800} height={800} className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"/>  </div>
    

   </section>

   <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search
          CategoryFilter
        </div>
    </section>
   </>
  );
}
