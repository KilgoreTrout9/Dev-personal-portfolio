import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown  } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import Github from "/github.png";
import Linkedin from "/linkedin.png";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Tailwind CSS",
  "Jest",
  "Cypress",
  "Figma",
  "Git",
  "Refine",
  "Code Rabbit",
];

const backgroundImages = [
  "/hero-background1.png",
  "/nasa-background.png",
  "/usgs-background.png",
  "/sparkle-background.png"
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImages[Math.floor(Math.random() * backgroundImages.length)]}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        
      </div>
      {/* Green Dots */}
      <div>
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))} 
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="animate-fade-in gap-5 flex-wrap flex">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full Stack Software Engineer
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Aerospace Structural Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="text-white font-serif italic font-normal">precision.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-400">
                You have found me, Pete Cowles.  Your search for a skilled software engineer ends here.  
                With a passion for crafting elegant solutions and a knack for turning complex problems 
                into seamless user experiences, I am ready to bring your digital visions to life.  
                Let's build something amazing together.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight  className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 animate-fade-in animation-delay-400">
              <span className="text-md text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/KilgoreTrout9", alt: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/pete-cowles-engineer", alt: "LinkedIn" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <img 
                    src={social.icon}
                    alt={social.alt}
                    className="w-8 h-8"
                  />
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
                  rounded-3xl bg-gradient-to-br 
                  from-primary/30 via-transparent 
                  to-primary/10 blur-2xl animate-pulse"
                />
                <div className="relative glass rounded-3xl p-2 glow-border">
                  <img 
                    src="/petebull.png"
                    alt="Hero Image"
                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                  />
                  {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-float" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-primary/">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div> 
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};