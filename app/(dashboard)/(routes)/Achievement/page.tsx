"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const achievement = [
  {
    name: "SCHLORSHIP AWARDEE",
    description:"For Being in top 1% student in my class 10th board, I have been awarded full schlorship for my class 11th and 12th. "
  },
  {
    name: "RANK OPENER",
    description: "I am Rank Opener for the batch 2021-2025 in the entire university with Jee percentile 97.5%.",
  },
  {
    name: "PRMO QUALIFIED",
    description:" A PRMO qualified student is someone who has successfully cleared the Pre-Regional Mathematical Olympiad (PRMO), which is the first stage of the Indian National Mathematical Olympiad (INMO) program. This is an extremely prestigious achievement as the INMO program is highly competitive and is designed to identify and nurture exceptional mathematical talent among students in India."
  },
  {
    name: "CREDLY PLATINUM BADGE F0R BUILDING DEEP LEARNING MODELS",
    description: "I have earned a platinum badge for my contributions to Credly by Coursera.Credly provides this badge for achieving a high level of proficiency or completing an advanced program related to deep learning models.",
  },
];

 const AchievementPage = () => {
  return (
    <div className="h-full bg-pink-400">
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-black  mb-10 font-semibold font-sans">Achievements!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-serif">
        {achievement.map((item) => (
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

export default AchievementPage;
// name: "AI/ML Lead",
// title: "DcrustODC",
// description: "Being the Lead of AI/ML in the official society of the Dcrust, I have guided and mentored more than 500 student regarding the same!",