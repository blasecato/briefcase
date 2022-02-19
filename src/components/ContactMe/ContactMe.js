import React from "react";
import { Form, Input, Button } from "antd";

const ContactMe = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
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
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. 
          </p>
        </div>
        <div className="ContactMe__content">
          <div className="ContactMe__box">
            <span>Hola</span>
          </div>
          <div className="ContactMe__form">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Email" type="email" />
              </Form.Item>

              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your Name!" }]}
              >
                <Input placeholder="Name" />
              </Form.Item>

              <Form.Item
                name="comment"
                rules={[{ required: true, message: "Please input your Comment!" }]}
              >
                <Input.TextArea placeholder="Comment" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
