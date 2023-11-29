// ClientHomeComponent.client.js
"use client"

import { useState, useRef} from 'react';
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
import {Expertise} from "@/components/Expertise";
import {Advertisers} from "@/components/Advertisers";
import {SupplyPartners} from "@/components/SupplyPartners";
import {Promotions} from "@/components/Promotions";
import {Imprint} from "@/components/Imprint";
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
    key: 'suppliers',
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

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

function ClientHomeComponent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuRef = useRef();

  const onClick = (e) => {
    const sectionId = e.key;
    scrollToSection(sectionId);
  }
  const [current, setCurrent] = useState('mail');
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Menu
            ref={menuRef}
            style={{
          minWidth: '80%',
          color: '#696969',
          ...fontSettings
        }}
              onClick={onClick}
            selectedKeys={[]}
              mode="horizontal"
              >
          {items.map((item) => (
              <Menu.Item key={item.key}>
                <a onClick={() => scrollToSection(item.key)}>{item.label}</a>
              </Menu.Item>
          ))}
        </Menu>
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
          <Expertise></Expertise>
        <Advertisers></Advertisers>
        <SupplyPartners></SupplyPartners>
        <Promotions></Promotions>
      </Content>
      <Imprint></Imprint>
    </Layout>
    </ConfigProvider>
  </div>
  );
}

export default ClientHomeComponent;
