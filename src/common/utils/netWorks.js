import {
  AiFillGithub,
  AiFillGitlab,
  AiFillLinkedin,
  AiFillGooglePlusCircle,
  AiOutlineInstagram,
} from "react-icons/ai";

const networks = [
  {
    id: 1,
    name: "git hub",
    icon: <AiFillGithub />,
    link: "https://github.com/blasecato",
  },
  {
    id: 2,
    name: "git lab",
    icon: <AiFillGitlab />,
    link: "https://gitlab.com/blasecato",
  },
  {
    id: 3,
    name: "Linkedin",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/blas-sebastian-calderon-desarrollador-frontend/",
  },
  {
    id: 4,
    name: "Gmail",
    icon: <AiFillGooglePlusCircle />,
    link: "mailto:bl.calderonn@gmail.com",
  },
  {
    id: 5,
    name: "Instagram",
    icon: <AiOutlineInstagram />,
    link: "https://www.instagram.com/blasecato",
  },
];

export default networks;
