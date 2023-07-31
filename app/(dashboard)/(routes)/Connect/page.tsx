"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const connect = [
  {
    name: "WORK WITH ME AS A FREELANCER",
    description:"Right skill can help can help you get a paid freelancing with me!"
  },
  {
    name: "ASK ANY QUERY REGARDING ML AND FULL STACK DEVELOPMENT",
    description:"Have a doubt, you can freely Email me using the chatbox provided at the bottom."
  },
  {
    name: "FREELY CONNECT WITH US VIA LINKEDIN",
    description: "You can connect with me for more information regarding the AI/ML related things.",
  },
  {
    name: "CHATBOX AND EMAIL SECTION PROVIDED AT THE BOTTOMOST RIGHT CORNER OF THE PAGE",
    description: "Chatbox being provided at the bottomost corner of this page can help you connect with me and sending your query via Email.",
  },
];

 const ConnectPage = () => {
  return (
    <div className="h-full bg-pink-800">
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-black  mb-10 font-semibold font-sans">Connect with me!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-serif">
        {connect.map((item) => (
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

export default ConnectPage;

