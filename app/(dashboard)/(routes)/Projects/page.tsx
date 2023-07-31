"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const project = [
  {
    name: "FRIDAY!",
    title: "Nextjs 13, React, Tailwind CSS, Prismadb, Stripe",
    description: "FRIDAY! is a real world AI-SAAS application built with gpt-4 turbo engine that helps in Code Generation and Creating Content for the Coding Enthusiast and Content Creator respectively!"
  },
  {
    name: "THING!",
    title: "Nextjs 13, React, Tailwind CSS, Prismadb, Paytm-payments",
    description: "THING! is an online E-Commerce store for the Gen-z millinials in which they could buy customized sneakers, clothes and chains."
  },
  {
    name: "DOORS FACE DETECTION",
    title: "Computer Vision and (NLPs)",
    description:"It is an AI model on Computer Vision that uses deep neural networks for fake image detections in the company.It is basically a freelancing project given to me by one of my clients."
  },
  {
    name: "BREAST CANCER DETECTION",
    title: "Deep Learning",
    description:"It is a deep learning model for detecting breast cancer in womens and predicting the stage of cancer."
  },
];

 const ProjectPage = () => {
  return (
    <div className="bg-yellow-400">
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-black  mb-10 font-semibold font-sans">Projects!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-serif">
        {project.map((item) => (
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

export default ProjectPage;
// name: "AI/ML Lead",
// title: "DcrustODC",
// description: "Being the Lead of AI/ML in the official society of the Dcrust, I have guided and mentored more than 500 student regarding the same!",