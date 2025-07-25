"use client";
import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    {
      num: 1,
      text: "Years of Experience",
    },
    {
      num: 12,
      text: "Project Completed",
    },
    {
      num: 5,
      text: "Technologies Masterd",
    },
    {
      num: 500,
      text: "Codes Commited",
    },
  ];
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
  return (
    <div
      key={`${item.text}-${index}`}
      className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
    >
      <CountUp
        end={item.num}
        duration={5}
        delay={2}
        className="text-4xl xl:text-6xl font-semibold"
      />
      <p
        className={`${
          item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
        } leading-snug`}
      >
        {item.text}
      </p>
    </div>
  );
})}

        </div>
      </div>
    </section>
  );
};

export default Stats;
