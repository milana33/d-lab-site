import React, { useState } from 'react';
import { Button, Modal,  ConfigProvider, Row, Col, Space, Flex, Form, Input, message  } from 'antd';

const customTheme = {
  components: {
    Button: {
      defaultBorderColor: '#8347e5',
      defaultColor:'#8347e5',

    }
  }
}

const onFinish = (values) => {
  console.log('Received values of form: ', values);
  // Здесь вы можете обработать данные формы, например, отправить на сервер
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const ContactForm = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
      <>
        <ConfigProvider theme={customTheme}>
        <Button className="contact-button" onClick={showModal}>
          Contact
        </Button>
        <Modal width={800} open={isModalOpen} footer={null} onCancel={closeModal}>
          <Flex gap="middle" vertical justify="center" style={{ alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '-10px'}}>LET'S CONNECT</h2>
            <span className="subtitle">Send us an email with your queries. We are looking forward to hearing from you!</span>
            <Form
                {...layout}
                form={form}
                name="contact"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
              <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'Invalid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please enter your E-mail!',
                    },
                  ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                  label="Full Name"
                  name="name"
                  rules={[{ required: true, message: 'Please enter your Full name!', whitespace: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                  label="Your Message"
                  name="message"
                  rules={[{ required: true, message: 'Please enter your message!' }]}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button className="sbt-button" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Flex>
        </Modal>
        </ConfigProvider>
      </>
  );
};
export default ContactForm;