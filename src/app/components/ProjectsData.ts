interface ProjectDataTypes {
    id: number;
    projectImgURL: string;
    projectTitle: string;
    ProjectAbout: string;
    stack: string;
    projectGithubURL: string;
    projectLiveURL: string;
  }
  
  const ProjectData: ProjectDataTypes[] = [
    {
        id: 1,
        projectImgURL: "/img/movieshowbox.png",
        projectTitle: "Music Box",
        ProjectAbout: "A dynamic movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies.",
        stack: "React | Vite | UnoCSS | API",
        projectGithubURL: "https://github.com/IamNaeto/moviebox",
        projectLiveURL: "https://movieshowbox.vercel.app/",
    },
    {
        id: 2,
        projectImgURL: "/img/getlinked.png",
        projectTitle: "Get-Linked",
        ProjectAbout: "A technology innovation Hackathon established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology",
        stack: "React | Vite | Typescript | TailwindCSS",
        projectGithubURL: "https://github.com/IamNaeto/getlinked",
        projectLiveURL: "https://getlinked-ai-hackathon-challenge.vercel.app/",
    },
    {
        id: 3,
        projectImgURL: "/img/portfolio.png",
        projectTitle: "Portfolio",
        ProjectAbout: "This is the website you are currently on. My portfolio website that showcases my about, what I do, stack, journey, projects and contact information.",
        stack: "NextJS | Typescript | TailwindCSS | AOS",
        projectGithubURL: "https://github.com/IamNaeto/portfolio_v2",
        projectLiveURL: "https://iamnaeto.vercel.app/",
    },
    {
        id: 4,
        projectImgURL: "/img/galleryimagebox.png",
        projectTitle: "Gallery-Box",
        ProjectAbout: "A dynamic drag and drop image gallery using react that enables a user to sign-up, login and reorder images by dragging and dropping them.",
        stack: "React | Vite | Firebase | React-DnD | React Styled-Components",
        projectGithubURL: "https://github.com/IamNaeto/gallerybox",
        projectLiveURL: "https://galleryimagebox.vercel.app/",
    },
    {
        id: 5,
        projectImgURL: "/img/credit-cafe.png",
        projectTitle: "Credit-Cafe",
        ProjectAbout: "A dynamic credit card generator website that create downloadable dummy credit card samples with card numbers, CVV, and card name on it.",
        stack: "HTML | CSS | JavaScript | Local Storage | Session Storage",
        projectGithubURL: "https://github.com/IamNaeto/creditcafe",
        projectLiveURL: "https://credit-cafe.vercel.app/",
    },
    {
        id: 6,
        projectImgURL: "/img/just-do-it.png",
        projectTitle: "Just Do It",
        ProjectAbout: "A responsive, dynamic and aesthetic to-do list web app for keeping track of schedules and activties.",
        stack: "HTML | CSS | JavaScript | Local Storage",
        projectGithubURL: "https://github.com/IamNaeto/just-do-it",
        projectLiveURL: "https://iamnaeto.github.io/just-do-it/",
    },
  ]

  export default ProjectData