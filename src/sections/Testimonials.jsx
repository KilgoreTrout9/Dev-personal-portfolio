import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Pete is an incredible person to work with.  The humor he brings to any project and his innate ability to solve problems is something I have always admired with Pete.  Listening to the methods he uses to solve problems, you can tell he combines his previous career with his experience as a software engineer in a masterful way.  I would recommend Pete to any team looking for an all star member!",
    author: "Aaron Fink",
    role: "Software Development Engineer II, Smartsheet",
    avatar:
      "https://media.licdn.com/dms/image/v2/C5603AQG32nc_AgiH7g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1609885634389?e=1778716800&v=beta&t=VShe7cATpL4OyTwhrNlXFV7iAmsgbGkvuTRTkJdHOeg",
  },
  {
    quote:
      "Pete's former career really shines through in his software engineering.  His ability to understand the mathematics of coding is uncanny.  I've watched him solve problems with a mathematical solution that was beyond me, which kept the code clean and concise.  Pete is an asset to any team in his ability to approach and solve problems reliably.",
    author: "Adam Whitman, DPT",
    role: "Product Manager, Medbridge",
    avatar:
      "https://media.licdn.com/dms/image/v2/C5603AQFbZyQjaAv0Cw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1616027714151?e=1778716800&v=beta&t=m4dw4z_kVfd0shIrrvXLLDWS23UGdigDovOLPUU5v6U",
  },
  {
    quote:
      "Responsible, determined, witty, genuine, and funny as hell!  It was an absolute pleasure working with Pete. We would work hard always and have a lot of laughs along the way.  I will always remember that even when we were super busy, Pete would always take the time to peers in other teams.  I appreciate Pete's resourcefulness and hunger to learn. You want Pete on your team!",
    author: "Chris Holley",
    role: "Software Engineer, Salesforce",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5635AQHukMaVVyIX2A/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1694449353118?e=1777586400&v=beta&t=dzVCJg9TBXyNZCU114l5tev3T6RsObGMJOs0iJc_Rnc",
  },
  {
    quote:
      "Pete has been an amazing student and SEiR here at Galvanize.  His technical skills are top notch, but what really sets him apart is his ability to mentor and inspire others.  He has a natural talent for breaking down complex concepts and making them accessible to students of all levels.  Pete will make an incredible software engineer and mentor in the future.",
    author: "Josh Elder",
    role: "Senior Software Engineering Instructor, Galvanize",
    avatar:
      "https://media.licdn.com/dms/image/v2/C5603AQEbdl3ywd5E9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1541454991512?e=1778716800&v=beta&t=Lw_t282TIbqXj5__1aRNj9WFUE1r1PCgkQAs0ZDmhI4",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((position) => (position + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (position) => (position - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};