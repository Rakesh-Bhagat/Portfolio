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
        description: "The ultimate sketchy canvas for teams. Brainstorm, wireframe, and visualize ideas in real-time with your team",
        stack: [
            "Typescript",
            "Nodejs",
            "RoughJS",
            "WebSocket",
            "NextJS",
            "Postgres",
            "Prisma",
          ],
        live: "http://ec2-54-147-49-18.compute-1.amazonaws.com:3000",
        github: "https://github.com/Rakesh-Bhagat/sketchyDraw"
    },
    {
        title: "GGV Lost & Found",
        description: "The easiest way to find your lost items or report found items on campus. Connect with the community and help each other out.",
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
        title: "Portfolio",
        img: "/portfolio.png",
        description: "I'm a 21-year-old full stack developer from India, with a focus on building clean and functional web applications.",
        stack: [
            "Typescript",
            "NextJS",
            "Postgres",
            "Prisma",
          ],
        live: "https://lost-found-drab.vercel.app/",
        github: "https://github.com/Rakesh-Bhagat/Portfolio"
    },
    {
        title: "Career Compass",
        img: "/careerLight.png",
        description:"Career Compass helps you navigate your professional journey by recommending personalized work opportunities or educational courses based on your unique profile.",
        stack: [
            "Typescript",
            "NextJS",
            "Postgres",
            "Prisma",
        ],
        live: "https://career-compass-seven.vercel.app/",
        github: "https://github.com/Rakesh-Bhagat/Career-Compass"
    }
]
export default projects