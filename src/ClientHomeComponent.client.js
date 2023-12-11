// ClientHomeComponent.client.js
"use client"


import { useState, useRef, useEffect} from 'react';
import './main.css'
// import { MantineLogo } from '@mantine/ds';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import { ConfigProvider, Card,  Col, Row, Switch } from 'antd';
import ContactForm from "@/components/ContactForm";
import { ParallaxBanner } from "react-scroll-parallax";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import {Expertise} from "@/components/Expertise";
import {Advertisers} from "@/components/Advertisers";
import {SupplyPartners} from "@/components/SupplyPartners";
import {Promotions} from "@/components/Promotions";
import {Imprint} from "@/components/Imprint";
import {CompatibleWith} from "@/components/CompatibleWith";
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
  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);


  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const customTheme = {
    components: {
      Menu: {
        horizontalItemHoverBg: '#eee5ff',
        horizontalItemSelectedColor: "#9c74da"
      },
      // Add other components or update as needed
    },
    // Update other theme settings as needed
    darkMode: darkMode ? 'dark' : 'light',
  };




  const menuRef = useRef();

  const onClick = (e) => {
    const sectionId = e.key;
    scrollToSection(sectionId);
  }
  const [current, setCurrent] = useState('mail');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
  <div className={darkMode ? 'dark' : 'light'}>
    <ConfigProvider theme={customTheme}>
    <Layout className={darkMode ? 'dark' : 'light'}>
      <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: darkMode ? '#424141' : 'white'
          }}
      >
        <div>
        <img
            src="/d_lab.png"
            width="100px"
            style={{marginTop: '15px'}}
            className='dark_d_lab'
        />
        </div>
        <Menu
            ref={menuRef}
            style={{
          minWidth: '80%',
          color: '#696969',
              backgroundColor: darkMode ? '#424141' : 'white',
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
        <Switch
            checked={darkMode}
            onChange={handleThemeToggle}
            style={{ marginLeft: 'auto', marginRight: '10px' }}
            checkedChildren={<FontAwesomeIcon icon={faSun} />}
            unCheckedChildren={<FontAwesomeIcon icon={faMoon} />}
        />
        <ContactForm darkMode={darkMode} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></ContactForm>
      </Header>

      <Content style={{ padding: '0 0px' }}>
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={12} lg={8}><p className="text-center title">Grow your loyal user base</p>
          <p className="subtitle">We have created a platform that analyses hundreds of data points during your mobile user acquisition campaign,
          provides actionable reports and optimises your ROI in real-time. This creates an opportunity of attracting
            the right users who will stay loyal to the apps.</p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <img className="iphone" src="/i_phone.png" width='450px'/>
            </Col>
        </Row>
        <ParallaxBanner
            layers={[
              {
                image: '/parallax.jpeg',
                speed: -20,
                scale: [1, 1.2],
                opacity: [0.9, 1],
              }
            ]}
            style={{
              height: '400px'
            }}
        >
        </ParallaxBanner>
          <Expertise></Expertise>
        <Advertisers></Advertisers>
        <SupplyPartners></SupplyPartners>
        <Promotions></Promotions>
        <CompatibleWith></CompatibleWith>
      </Content>
      <Imprint></Imprint>
    </Layout>
    </ConfigProvider>
  </div>
  );
}

export default ClientHomeComponent;
