import React, { useState } from 'react';
import { Button, Modal,  ConfigProvider, Row, Col, Space, Flex, Form, Input, message  } from 'antd';
import { push, ref } from 'firebase/database';
import { database } from '../../firebase-config';

const customTheme = {
  components: {
    Button: {
      defaultBorderColor: '#8347e5',
      defaultColor:'#8347e5',
    }
  }
}

// const onFinish = (values) => {
//   console.log('Received values of form: ', values);
//   // Здесь вы можете обработать данные формы, например, отправить на сервер
// };

// const onFinish = async (values) => {
//   try {
//     // Допустим, вы используете Realtime Database
//     await firebase.database().ref('contacts').push(values);
//     console.log('Data sent successfully to Firebase');
//   } catch (error) {
//     console.error('Error sending data to Firebase:', error);
//   }
// };


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const layout = {
  labelCol: { span: 9 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const ContactForm = ({ darkMode }) => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalStyle = {
    color: darkMode ? 'white' : 'black'
  };

  const onFinish = async (values) => {
    try {
      const contactsRef = ref(database, 'contacts');
      await push(contactsRef, values);
      message.success('Your message has been sent successfully!');

      closeModal()
      console.log('Data sent successfully to Firebase');
    } catch (error) {
      console.error('Error sending data to Firebase:', error);
      message.error('Failed to send the message. Please try again.');
    }
  };
  return (
      <>
        <ConfigProvider >
        <Button className="contact-button" onClick={showModal}>
          Contact
        </Button>
        <Modal getContainer={false} width={700} open={isModalOpen} footer={null} onCancel={closeModal} style={modalStyle} >
          <Flex gap="middle" vertical justify="center" style={{ alignItems: 'center', textAlign: 'center' }}>
          <h1 style={{ marginBottom: '-12px'}}>LET US CONNECT</h1>
            <span className="subtitle" style={{color: darkMode ? 'white' : '#696969'}}>Send us an email with your queries. We are looking forward to hearing from you!</span>
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
                <Row>
                  <Col xs={4}>
                <Button className="sbt-button" htmlType="submit">
                  Submit
                </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Flex>
        </Modal>
        </ConfigProvider>
      </>
  );
};
export default ContactForm;
