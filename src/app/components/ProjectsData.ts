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
        projectImgURL: "/img/cardcafe.png",
        projectTitle: "Card Cafe",
        ProjectAbout: "A dynamic credit card generator website that allows authenticated users to create downloadable dummy credit card samples with card numbers, CVV, and card name on it for ecommerce testing purposes",
        stack: "NextJS | Typescript | TailwindCSS | Framer-Motion | Firebase Auth | Firebase Real-Time Database | Firebase Storage",
        projectGithubURL: "https://github.com/IamNaeto/cardcafe",
        projectLiveURL: "https://cardcafe.vercel.app/",
    },
    {
        id: 2,
        projectImgURL: "/img/qrcodego.png",
        projectTitle: "QR-Go",
        ProjectAbout: "A QR-Code generator website that allows authenticated users to effortlessly generate a downloadable QR codes that safeguards their data and help them advertise their businesses or idea either by file upload or via inputing a valid URL",
        stack: "NextJS | Typescript | TailwindCSS | Framer-Motion | Firebase Auth | Firestore | Firebase Storage",
        projectGithubURL: "https://github.com/IamNaeto/qr-go",
        projectLiveURL: "https://qrcode-go.vercel.app/",
    },
    {
        id: 3,
        projectImgURL: "/img/getlinked.png",
        projectTitle: "Get-Linked",
        ProjectAbout: "A technology innovation Hackathon established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology",
        stack: "React | Vite | Typescript | TailwindCSS",
        projectGithubURL: "https://github.com/IamNaeto/getlinked",
        projectLiveURL: "https://getlinked-ai-hackathon-challenge.vercel.app/",
    },
    {
        id: 4,
        projectImgURL: "/img/movieshowbox.png",
        projectTitle: "Music Box",
        ProjectAbout: "A dynamic movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies.",
        stack: "React | Vite | UnoCSS | IMDB API",
        projectGithubURL: "https://github.com/IamNaeto/moviebox",
        projectLiveURL: "https://movieshowbox.vercel.app/",
    },
    {
        id: 5,
        projectImgURL: "/img/analytics-admin-dashboard.png",
        projectTitle: "Analytics Dashboard",
        ProjectAbout: "A pixel perfect analytics admin dashboard that displays the flow and chart representation of data. A project sponsored by Geepay x DaveyHert as a frontend challenge",
        stack: "NextJS | TailwindCSS | Framer-Motion | ChartJS ",
        projectGithubURL: "https://github.com/IamNaeto/analytics-dashboard",
        projectLiveURL: "https://analytics-admin-dashboard.vercel.app/",
    },
    {
        id: 6,
        projectImgURL: "/img/galleryimagebox.png",
        projectTitle: "Gallery-Box",
        ProjectAbout: "A dynamic drag and drop image gallery using react that enables a user to sign-up, login and reorder images by dragging and dropping them.",
        stack: "React | Vite | Firebase | React-DnD | React Styled-Components",
        projectGithubURL: "https://github.com/IamNaeto/gallerybox",
        projectLiveURL: "https://galleryimagebox.vercel.app/",
    },
    {
        id: 7,
        projectImgURL: "/img/portfolio.png",
        projectTitle: "Portfolio",
        ProjectAbout: "This is the website you are currently on. My portfolio website that showcases my about, what I do, stack, journey, projects and contact information.",
        stack: "NextJS | Typescript | TailwindCSS | AOS",
        projectGithubURL: "https://github.com/IamNaeto/portfolio_v2",
        projectLiveURL: "https://iamnaeto.vercel.app/",
    },
    {
        id: 8,
        projectImgURL: "/img/jadoo.png",
        projectTitle: "Jadoo",
        ProjectAbout: "A travel agency landing web page that shows the services offered by the agency, the destinations and booking options associated with the agency",
        stack: "NextJS | Typescript | TailwindCSS",
        projectGithubURL: "https://github.com/IamNaeto/jadoo",
        projectLiveURL: "https://jadoo-travels.vercel.app/",
    },
  ]

  export default ProjectData