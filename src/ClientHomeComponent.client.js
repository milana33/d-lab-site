// ClientHomeComponent.client.js
"use client"

import { useState} from 'react';
import './main.css'
// import { MantineLogo } from '@mantine/ds';
import { Button,  Image } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import { ConfigProvider, Card,  Col, Row } from 'antd';
import ContactForm from "@/components/ContactForm";

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {
  UserOutlined,
  VideoCameraOutlined,
  AppstoreAddOutlined,
  SearchOutlined,
} from '@ant-design/icons';
const items = [
  {
    label: 'Expertise',
    key: 'expertise',
  },
  {
    label: 'Advertisers/Agencies',
    key: 'advertisers',
  },
  {
    label: 'Supply Partners',
    key: 'partners',
  },
  {
    label: 'Promotions',
    key: 'promotions',
  },  {
    label: 'Compatible With',
    key: 'compatible',
  },
  {
    label: 'Imprint',
    key: 'imprint',
  }
];

// {
//   label: (
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Navigation Four - Link
//       </a>
//   ),
//       key: 'alipay',
// },

const fontSettings = {
  fontFamily: "Aeonik Pro, sans-serif",
  fontWeight: 500,
  fontSize: '18px'
}

const customTheme = {
  components: {
    Menu: {
      horizontalItemHoverBg: '#eee5ff',
      horizontalItemSelectedColor: "#9c74da"
    },
  },
};

function ClientHomeComponent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [current, setCurrent] = useState('mail');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
  <div>
    <ConfigProvider theme={customTheme}>
    <Layout>
      <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor:'white'
          }}
      >
        <div>
        <img
            src="/d_lab.png"
            width="100px"
            style={{marginTop: '15px'}}
        />
        </div>
        <Menu style={{
          minWidth: '80%',
          color: '#696969',
          ...fontSettings
        }}
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items} />
        {/*<Button block>*/}
        {/*  Contact*/}
        {/*</Button>*/}
        <ContactForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></ContactForm>
      </Header>
      <Content className="site-layout" style={{ padding: '0 0px' }}>
        <Row type="flex" justify="center">
            <Col span={8}><p className="text-center title">Grow your loyal user base</p>
          <p className="subtitle">We have created a platform that analyses hundreds of data points during your mobile user acquisition campaign,
          provides actionable reports and optimises your ROI in real-time. This creates an opportunity of attracting
            the right users who will stay loyal to the apps</p>
              <div> <Button className='sbt-button'>
                Let's Connect
              </Button>
              </div>
            </Col>
            <Col span={8}>
              <img className="iphone" src="/i_phone.png" width='550px'/>
            </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
    </ConfigProvider>
  </div>
  );
}

export default ClientHomeComponent;
