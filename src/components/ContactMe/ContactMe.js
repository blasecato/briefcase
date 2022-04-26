import React from "react";
import { Form, Input, Button } from "antd";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: 15, name: "Florencia", coordinates: [-75.60419, 1.62696] },
];

const ContactMe = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    const $buttonMailto = document.querySelector("#mailTo");
    $buttonMailto.setAttribute(
      "href",
      `mailto:bl.calderonn@gmail.com?subject=Nombre - ${values.name}, Correo - ${values.email}&body=${values.comment}`
    );
    $buttonMailto.click();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="ContactMe">
      <div className="container">
        <h1 className="title">Contact me</h1>
        <div className="cont-text">
          <p className="description">
            ¡Contactame y cambiemos el mundo!
          </p>
        </div>
        <div className="ContactMe__content">
          <div className="ContactMe__box">
            <ComposableMap
              projection="geoAzimuthalEqualArea"
              projectionConfig={{
                rotate: [78, -5, 0],
                scale: 1900,
              }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies
                    .filter((d) => d.properties.REGION_UN === "Americas")
                    .map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#4a27b4"
                        stroke="#D6D6DA"
                      />
                    ))
                }
              </Geographies>
              {markers.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates}>
                  <g
                    fill="none"
                    stroke="#00dbd0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fontFamily: "system-ui", fill: "#ffffff" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>
          <div className="ContactMe__form">
            <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su email",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Email" type="email" />
              </Form.Item>

              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Por favor ingrese su nombre" },
                ]}
              >
                <Input placeholder="Nombre" />
              </Form.Item>

              <Form.Item
                name="comment"
                rules={[
                  { required: true, message: "Por favor ingrese su mensaje" },
                ]}
              >
                <Input.TextArea placeholder="Mensaje" />
              </Form.Item>

              <Form.Item className="item-button">
                <Button type="primary" htmlType="submit">
                  Send Message
                </Button>
              </Form.Item>
              <a href="mailto:bl.calderonn@gmail.com" id="mailTo">
                hola
              </a>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
