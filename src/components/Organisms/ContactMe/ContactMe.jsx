import React, { useState, useRef } from "react";
import { Map, Marker } from "pigeon-maps";
import iam from "assets/images/anime2.webp";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [hue, setHue] = useState(0);
  const color = `red`;
  const isForm = useRef();

  const sendEmail = (e) => {
    console.log("values", e, e.preventDefault());
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vzhkddh",
        "template_tzerlpg",
        isForm.current,
        "nXBXhvZJrRDOgZNTL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="ContactMe" id="contact">
      <div className="container">
        <h1 className="title-effect" data-text="CONTACT ME">
          CONTACT ME
        </h1>
        <div className="cont-text">
          <p className="description">¡Contactame y cambiemos el mundo!</p>
        </div>
        <div className="ContactMe__content">
          <div className="ContactMe__box">
            <Map
              className="map"
              height={450}
              defaultCenter={[4.669494, -74.093402]}
              defaultZoom={5.5}
            >
              <Marker
                width={50}
                anchor={[1.622569, -75.600685]}
                color={color}
                onClick={() => setHue(hue + 20)}
              >
                <img src={iam} className="location" alt="iam" />
              </Marker>
            </Map>
          </div>
          <div className="ContactMe__form">
            <form ref={isForm} onSubmit={sendEmail} className="form">
              <label className="label h2">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="What's your name?"
              />
              <label className="label h2">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="What's your email?"
              />
              <label className="label h2">Message</label>
              <textarea
                name="message"
                className="textarea"
                placeholder="What is your message?"
              />
              <input type="submit" value="Send" className="button-s" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
