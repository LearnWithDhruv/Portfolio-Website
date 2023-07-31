"use client";

import { ArrowRight, MessageSquare, Music, ImageIcon, VideoIcon, Code } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";

const tools = [
  {
    label: "About",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/About"
  },
  {
    label: "Connect with me",
    color: "text-emarald-500",
    bgColor: "bg-emarald-500/10",
    href: "/Connect"
  },
  {
    label: "Projects",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/Projects"
  },
  {
    label: "Skills",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/Services"
  },
  {
    label: "Work Experience",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/Work"
  },
  {
    label: "Achievements",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    href: "/Achievement"
  }
]

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div className="h-full">
    <div className= " bg-blue-100">
      <div className="mb-8 space-y-4 ">
        <h2 className="text-2xl md:text-4xl font-bold text-center font-serif">
           More details about me!
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          You can Chat with me as well with the small Chatbox provided near the bottomost right corner!
        </p>
      </div>
      <div className=" h-full px-4 md:px-20 lg:px-32 space-y-10">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              {/* <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div> */}
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
}

export default DashboardPage