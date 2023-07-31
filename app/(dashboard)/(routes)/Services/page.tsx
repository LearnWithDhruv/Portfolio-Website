"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    name: "FULL STACK DEVELOPMENT",
    title: "Nextjs 13, React, Tailwind CSS, Prismadb, Stripe",
    description:"Experiance in building full stack web apps using above technogies for my personal projects and for my freelancing work. "
  },
  {
    name: "MERN STACK DEVELOPMENT",
    title: "Mongodb, ExpressJs, ReactJs, NodeJS",
    description:"Experiance in building full stack web apps using above technogies for my personal projects and for my freelancing work. "
  },
  {
    name: "MACHINE LEARNING",
    title: "Supervised and Unsupervised learning using neural networks and all.",
    description:"Experiance in building Machine learning models in both Supervised and Unsupervised learning."
  },
  {
    name: "COMPUTER VISION",
    title: "Deep Learning and use of (NLPs)",
    description:"Worked on this computer vision project during my freelancing work for one of my client."
  },
  {
    name: "DATA STRUCTURES AND ALGORITHIMS",
    title: "Data structure and Algorithms",
    description:"Have a good knowledge of all the basic and advanced concepts of data structure and algorithms including Trees and Maps."
  },
  {
    name: "TEACHING",
    title: "Physics of class 11th and 12th.",
    description:"Taught physics to class 11th and 12th during my Jee Preparation."
  },
];

 const ServicePage = () => {
  return (
    <div className="h-full bg-blue-400">
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-black  mb-10 font-semibold font-sans">Skills and Services!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-serif">
        {services.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}:-</p>
                  <p className="text-lg">{item.title}</p>
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

export default ServicePage;
// name: "AI/ML Lead",
// title: "DcrustODC",
// description: "Being the Lead of AI/ML in the official society of the Dcrust, I have guided and mentored more than 500 student regarding the same!",