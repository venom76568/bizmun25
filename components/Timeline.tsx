import React from "react";

const TimelineItem = ({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) => {
  return (
    <li className="relative text-white">
      <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 bg-black w-4 h-4 border-2 border-white rounded-full"></div>
      <div className="ml-6 p-4 border-l border-black">
        <time className="text-sm p-1 font-normal leading-none">{date}</time>
        <h3 className="text-lg p-1 font-semibold">{title}</h3>
        <p className="text-base p-1 font-normal">{description}</p>
      </div>
    </li>
  );
};

const Timeline = () => {
  return (
    <div
      id="timeline"
      className="flex-col flex text-[#f4cb33] justify-center items-center bg-[#141414] relative"
    >
      <h2 className="w-full text-5xl xl:text-6xl text-center py-10 font-semibold uppercase">
        Timeline
      </h2>
      <ol className="relative p-4 max-w-2xl">
        <TimelineItem
          date="21 January 2025"
          title="Registration Starts"
          description="Registration for BIZ-MUN starts."
        />
        <TimelineItem
          date="08 February 2025"
          title="Opening Ceremony"
          description="The day's schedule includes an opening ceremony, followed by three committee sessions interspersed with breaks for lunch and high tea."
        />
        <TimelineItem
          date="09 February 2025"
          title="Final Day"
          description="The day's schedule includes three committee sessions with breaks for lunch and high tea, concluding by 9:00 PM."
        />
      </ol>
    </div>
  );
};

export default Timeline;
