"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WorkExperience = [
  {
    name: "Full Stack Developer",
    title: "Votigo Edge Private Limited",
    description: "I got a priveledge to work with the amazing team of the Votigo Edge that helps me understanding the how real life projects are worked upon.My job was to deal with UI Designing and creating the api routes for the same",
  },
  {
    name: "Open Source Contributer",
    title: "Social Summer of Code",
    description: "I have worked as Open Source Contributor helping in removing errors in Machine learning dataset provided on Githib! ",
  },
  {
    name: "Founder",
    title: "FRIDAY",
    description: "A real time AI-SAAS application that helps creators, code enthusiasts in Code Generation and Content Creation!",
  },
  {
    name: "AI/ML Lead",
    title: "DcrustODC",
    description: "Being the Lead of AI/ML in the official society of the Dcrust, I have guided and mentored more than 500 student regarding the same!",
  },
];

const WorkPage = () => {
  return (
    <div className="h-full bg-pink-400">
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-black font-extrabold mb-10">Work Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-serif">
        {WorkExperience.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
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

export default WorkPage
// name: "AI/ML Lead",
// title: "DcrustODC",
// description: "Being the Lead of AI/ML in the official society of the Dcrust, I have guided and mentored more than 500 student regarding the same!",