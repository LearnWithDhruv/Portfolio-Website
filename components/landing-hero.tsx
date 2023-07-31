"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Learn With Dhruv...</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Full Stack Development.",
                "Machine Learning.",
                "Computer Vision.",
                "(NLPs) and Transformers Networking.",
                "Data Structures and Algorithms.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div>
        <Link href="/dashboard">
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Go To Dashboard
          </Button>
        </Link>
      </div>
      <div className="text-white-400 text-xm md:text-sm font-size-3xl font-medium font-serif">
        Hello Everyone! My Name is Dhruv Khatter and I am third year student pursuaing Computer Science and Engineering at Deenbandhu Chotturam University of Science and Technology, Sonipat.For more details click on the (Go to Dashboard) button above.
      </div>
      <div className="text-white-400 text-xm md:text-sm font-bold font-serif">
        THANK YOU!
      </div>
    </div>
  );
};