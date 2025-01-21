import React from "react";

const TimelineItem = ({
  title,
  description,
  agenda,
}: {
  title: string;
  description: string;
  agenda: string;
}) => {
  return (
    <div className="relative p-6 min-h-[320px] bg-gradient-to-br from-black via-yellow-500 to-yellow-300 border border-yellow-400 rounded-lg shadow transition-transform duration-300 hover:scale-105 flex flex-col justify-between">
      <h5 className="mb-4 text-3xl font-bold tracking-tight text-white">
        {title}
      </h5>
      <p className="font-normal text-lg text-gray-100 mb-4">{description}</p>
      <p className="font-medium text-lg text-gray-900 mb-4">
        <span className="font-bold text-black">Agenda: </span>
        {agenda}
      </p>
    </div>
  );
};

const Timeline = () => {
  return (
    <div
      id="timeline"
      className="flex-col flex text-[#f4cb33] justify-center items-center bg-[#141414] py-10"
    >
      <h2 className="w-full text-5xl xl:text-6xl text-center py-10 font-semibold uppercase text-white">
        Our Committees
      </h2>
      {/* Responsive grid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4">
        <TimelineItem
          title="Finance Committee"
          description="The committee’s vision is to help the executives introspect upon the key developmental issues and understand an organization’s growth through the analysis of financial data while preparing to face challenges that can affect the global market."
          agenda="Impact of Global Climate Agreements on Corporate Investment Strategies and Financial Performance. (Discuss carbon credits, ESG investment trends, and corporate responsibilities in mitigating climate risks.)"
        />
        <TimelineItem
          title="Marketing Committee"
          description="The committee’s vision is to make executives understand the global trends in marketing and bring innovative ideas to the sector while redefining the definition of ethics."
          agenda="Personalized Marketing in the AI Era: Balancing Data Privacy and Consumer Engagement. (Debate the ethics and effectiveness of AI-driven consumer profiling in global campaigns.)"
        />
        <TimelineItem
          title="Legal Rights Committee"
          description="The committee’s vision is to understand and deliberate upon issues with sociological importance and to submit a resolution pertaining to their views at the end of the exercise."
          agenda="Intellectual Property Rights in the Age of AI and Automation: Challenges and Innovations. (Discuss the need for updating IP laws to cover AI-generated content and patents.)"
        />
      </div>

      {/* Register Button below committees section with added gap */}
      <div className="mt-14">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdzitidy_a3V0QZujdsSNsPfHDtNCkUFZWfklwosddX9rl2dQ/viewform?usp=sharing"
          className="inline-block py-4 px-8 text-xl font-semibold text-white bg-black border-2 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
          target="_blank"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default Timeline;
