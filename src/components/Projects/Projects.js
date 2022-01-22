import React from "react";
import celagem from "../../assets/images/projects/celagem.svg";
import red from "../../assets/images/projects/red.png";
import luker from "../../assets/images/projects/luker.png";
import gp from "../../assets/images/projects/gp.jpg";
import liftit from "../../assets/images/projects/liftit.svg";
import berrysafe from "../../assets/images/projects/berrysafe.svg";
import splash from "../../assets/images/projects/splash.png";
import amasfac from "../../assets/images/projects/amasfac.png";
import carmenta from "../../assets/images/projects/carmenta.png";
import cubbo from "../../assets/images/projects/cubbo.svg";
import babu from "../../assets/images/projects/babu.svg";
import atg from "../../assets/images/projects/title-menu.png";
import bmw from "../../assets/images/projects/bmw.png";
import { LaptopOutlined, TabletOutlined } from '@ant-design/icons';

const Projects = () => {
  const dummyCardsWorks = [
    {
      id: 1,
      name: "Celagem",
      desciption:
        "Centro Latinoamericano en Diagnóstico Genético y molecular, CELAGEM, Especialistas en Salud reproductiva, reproducción asistida y genética.",
      link: "https://celagem.com/",
      image: celagem,
      rol: "maquetador developer",
      technologies: "",
      type:"Web"
    },
    {
      id: 2,
      name: "Territorios Caqueteños Sostenibles para la Paz)",
      desciption:
        "Somos una institución sin ánimo de lucro de carácter privado comprometidos con los territorios en la generación de desarrollo desde las acciones locales y la construcción de país bajo principios de corresponsabilidad, transparencia, compromiso y solidaridad.",
      link: "https://www.redadelco.org/",
      image: red,
      rol: "Front-end developer",
      technologies: "",
      type:"Web"
    },
    {
      id: 3,
      name: "Luker Chocolate",
      desciption:
        "Luker Chocolate es un fabricante de chocolate familiar colombiano de chocolates finos y cacao elaborado en origen. En nuestro esfuerzo por impulsar el bienestar en toda la cadena de valor del cacao.",
      link: "https://www.lukerchocolate.com/es/",
      image: luker,
      rol: "Front-end developer",
      technologies: "",
      type:"Web"
    },
    {
      id: 4,
      name: "No Olvidar GP APP (Gomez Pinzon)",
      desciption:
        "Aplicación móvil realizada en react native para el control de información y agendamiento de citas, consultorías y eventos de la empresa. ",
      link: "https://apps.apple.com/co/app/gpapp/id1528171382",
      image: gp,
      rol: "Maquetador developer",
      technologies: "",
      type:"Movil"
    },
    {
      id: 5,
      name: "Liftit",
      desciption:
        "Somos la plataforma tecnológica líder en automatizar y ejecutar entregas de última milla en América Latina.",
      link: "https://liftit.co/",
      image: liftit,
      rol: "Front-end developer",
      technologies: "",
      type:"Web"
    },
    {
      id: 6,
      name: "BerrySafe Client",
      desciption:
        "Berrysafe es la plataforma inteligente que te conecta en minutos con el agente experto en seguros más cercano, para que te ayude a escoger la mejor opción. Ingresa tu código postal para ayudarnos a localizarte e indícanos el tipo de seguro que te interesa. ¡Estamos listos para ayudarte!",
      link: "https://www.berrysafe.com/",
      image: berrysafe,
      rol: "Front-end developer",
      technologies: "",
      type:"Web"
    },
    {
      id: 7,
      name: "BerrySafe Agent",
      desciption:
        "Berrysafe es la plataforma inteligente que te conecta en minutos con el agente experto en seguros más cercano, para que te ayude a escoger la mejor opción. Ingresa tu código postal para ayudarnos a localizarte e indícanos el tipo de seguro que te interesa. ¡Estamos listos para ayudarte!",
      link: "https://agente.berrysafe.com/",
      image: berrysafe,
      rol: "Front-end developer",
      technologies: "",
      type:"Web"
    },
    {
      id: 8,
      name: "BerrySafe App",
      desciption:
        "Berrysafe es la plataforma inteligente que te conecta en minutos con el agente experto en seguros más cercano, para que te ayude a escoger la mejor opción. Ingresa tu código postal para ayudarnos a localizarte e indícanos el tipo de seguro que te interesa. ¡Estamos listos para ayudarte!",
      link: "",
      image: splash,
      rol: "Front-end developer",
      technologies: "",
      type:"Movil"
    },
    {
      id: 9,
      name: "AMASFAC",
      desciption:
        "La Asociación Mexicana de Agentes de Seguros y Fianzas, AC, se constituyó el 6 de septiembre de 1958, con el objetivo de contribuir al profesionalismo del Agente de Seguros y Fianzas.",
      link: "https://www.amasfac.org/",
      image: amasfac,
      rol: "Front-end developer",
      technologies: "",
      type:"Web"
    },
    {
      id: 10,
      name: "Carmenta Labs",
      desciption:
        "We partner with companies, from startups to large corporations, to transform ideas into successful businesses. We leverage our expertise in VC investing, investment banking, tech development, and our extensive network to boost entrepreneurial and intrapreneurial ventures in LATAM",
      link: "https://carmentalabs.com/",
      image: carmenta,
      rol: "Front-end developer",
      technologies: "",
      type:"Web"
    },
    {
      id: 10,
      name: "ATG",
      desciption:
        "Training Ground is an all encompassing, self-development education app by athletes, for athletes. Many athletes at all levels struggle with the transition to life after sport yet each of them have intangible skills that can be used to find success off the playing field.",
      link: "https://apps.apple.com/co/app/training-ground/id1575812785?l=en",
      image: atg,
      rol: "Front-end developer",
      technologies: "",
      type:"Movil"
    },
    {
      id: 11,
      name: "Cubbo",
      desciption:
        "Con Cubbo tu ecommerce se enfoca en crecer, sin preocuparse por la logística de fulfillment. Almacenamos, Empacamos y Entregamos en México 🇲🇽 , Colombia 🇨🇴 y Brasil 🇧🇷.",
      link: "https://cubbo-a5078.web.app/",
      image: cubbo,
      rol: "Maquetador developer",
      technologies: "",
      type:"Web"
    },
    {
      id: 12,
      name: "Babytop",
      desciption:
        "Cuidar de tu bebé es una tarea de tiempo completo, en Babytop te damos una mano llevando hasta la puerta de tu casa los pañales y pañitos de tu bebé.",
      link: "https://www.babytop.com.co/",
      image: babu,
      rol: "Maquetador developer",
      technologies: "",
      type:"Web"
    },
    {
      id: 13,
      name: "Technical Test BMW store.",
      desciption:
        "Presentada por: Blas Sebastian Calderon Torres",
      link: "https://bmw-store.web.app/",
      image: bmw,
      rol: "Front-end developer",
      technologies: "",
      type:"Web"
    },
    
  ];
  return (
    <div className="Projects">
      <div className="container">
        <h1 className="title">Projects</h1>
        <div className="Projects__content">
          {dummyCardsWorks?.map((item,index)=>
            <div key={index} className="Projects__content--card">
              <div className="head">
                <img src={item.image} className="project-image" alt="project"/>
              </div>
              <div className="body">
                <div className="">
                  <div className="cont-title">
                    <h2>{item.name}</h2>
                  </div>
                  <div className="divider"/>
                  <p>{item.desciption}</p>
                  <div className="rol">
                    <p>{item.rol}</p>
                    {item.type === "Web" ? <LaptopOutlined /> : <TabletOutlined />}
                  </div>
                </div>
                <div>
                  <a className="link" target="_blank" rel="noopener noreferrer" href={`${item.link}`}>
                    <div className="demo">
                      Demo
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
