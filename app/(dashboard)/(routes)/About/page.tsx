"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const about = [
  {
    name: "HOME",
    description: "I belong from karnal district of haryana but from last three year we were being living in destrict Mohali, Punjab."
  },
  {
    name: "EDUCATION",
    description: "I did my schooling from the karnal district upto my class 10th and later got shifted to Delhi for my classes 11th and 12th! ",
  },
  {
    name: "UNIVERSITY",
    description: "Currently I am pursuaing my Earlier Btech in Computer Science and Engineering branch in Deenbandhu Chotturam University of Science and Technology, Sonipat. I am in my prefinal year of my graduation with AI/ML as my majors.",
  },
  {
    name: "HOBBIES/INTERESTS",
    description: "I have very keen interest in reading books of Finance and playing Badminton!.",
  },
];

 const AboutPage = () => {
  return (
    <div className="h-full bg-red-800">
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-black  mb-10 font-semibold font-sans">About Me!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-serif">
        {about.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}:-</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
    </div>
  )
}

export default AboutPage;
// name: "AI/ML Lead",
// title: "DcrustODC",
// description: "Being the Lead of AI/ML in the official society of the Dcrust, I have guided and mentored more than 500 student regarding the same!",