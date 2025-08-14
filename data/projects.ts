export interface ProjectCardProps {
    title: string,
    img?: string,
    description: string,
    stack: string[],
    live?: string,
    github?: string

}

const projects: ProjectCardProps[] = [
    {
        title:"SketchyDraw",
        img: "/sketchydraw.png",
        description: "A collaborative online whiteboard built with RoughJS for sketch-style drawing. Features real-time multi-user editing via WebSockets, room-based collaboration, and Postgres persistence for saving sketches.",
        stack: [
            "Typescript",
            "WebSocket",
            "Nodejs",
            "RoughJS",
            "NextJS",
            "Postgres",
            "Prisma",
          ],
        live: "https://sketchydraw.bhagat.dev",
        github: "https://github.com/Rakesh-Bhagat/sketchyDraw"
    },
    {
        title: "GGV Lost & Found",
        description: "A campus-focused lost and found platform for reporting and locating items. Includes user authentication, item posting, and a community-driven way to reunite owners with their belongings.",
        img: "/lost.png",
        stack: [
            "Typescript",
            "NextJS",
            "Postgres",
            "Prisma",
          ],
        live: "https://lost-found-drab.vercel.app/",
        github: "https://github.com/Rakesh-Bhagat/Lost-Found"
    },
    {
        title: "Plantify AI",
        img: "/plantify.png",
        description:"An AI-driven plant identifier that lets users upload images for instant species recognition. Powered by Google’s Gemini AI, it provides plant names, species, and care instructions through a simple, user-friendly interface.",
        stack: [
            "Javascript",
            "ReactJS",
            "Tailwind CSS",
            "Gemini API"
        ],
        live: "https://plantify-hazel.vercel.app/",
        github: "https://github.com/Rakesh-Bhagat/Plantify"
    },
    {
        title: "Portfolio",
        img: "/portfolio.png",
        description: "A personal portfolio website showcasing my skills, projects, and experience. Designed for clean navigation and responsive performance across all devices.",
        stack: [
            "Typescript",
            "NextJS",
            "Postgres",
            "Prisma",
          ],
        live: "https://bhagat.dev",
    },
    {
        title: "Career Compass",
        img: "/careerLight.png",
        description:"An AI-powered career guidance platform that recommends personalized job opportunities and courses based on user profiles, academic history, and preferences.",
        stack: [
            "Typescript",
            "NextJS",
            "Postgres",
            "Prisma",
        ],
        live: "https://career-compass-seven.vercel.app/",
        github: "https://github.com/Rakesh-Bhagat/Career-Compass"
    },
    
]
export default projects