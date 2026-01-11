import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import AnimatedBorderButton from "../../components/AnimatedBorderButton.jsx";

const projects = [
  {
    title: "Weather App",
    description:
      "A full-stack weather forecasting application built with React (Vite) and a custom Node.js/Express backend. It delivers real-time conditions, hourly trends, and 7-day forecasts using WeatherAPI. The backend securely handles API communication and CORS, deployed on Render, while the frontend is deployed on Vercel.",
    image: "/projects/project1.png",
    tags: ["React", "JavaScript", "Node.js", "API", "Vercel", "Render"],
    link: "https://weather-app-blue-psi-92.vercel.app/",
    github: "https://github.com/NirjalaP/Weather-App.git",
  },
  {
    title: "Movie Ticket Booking App",
    description:
      "QuickShow is a production-ready movie ticket booking platform built with Node.js, Express, and MongoDB. It uses Clerk for authentication and Inngest for asynchronous webhook processing. The app exposes REST APIs for movies, seats, bookings, and payments, deployed on Vercel using serverless functions.",
    image: "/projects/project2.png",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "Clerk",
      "Inngest",
      "REST API",
      "Vercel",
    ],
    link: "https://quickshow-server-lime-gamma.vercel.app/",
    github: "https://github.com/NirjalaP/Ticket-Booking-App.git",
  },
  {
    title: "Grocery E-Commerce Platform",
    description:
      "Koseli Mart is a MERN-stack grocery e-commerce platform featuring Google Authentication, product browsing, cart management, and order workflows. It demonstrates full-stack architecture, RESTful APIs, authentication, and real-world CRUD operations.",
    image: "/projects/project3.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Auth",
      "MERN Stack",
    ],
    link: "#",
    github: "https://github.com/NirjalaP/FinalProject.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, showcasing modern web applications
            and real-world solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
