// ClientHomeComponent.client.js
"use client"

import { useState} from 'react';
// import { MantineLogo } from '@mantine/ds';
import { Button,  Image } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import { ConfigProvider } from 'antd';

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
  },
  {
    label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
    ),
    key: 'alipay',
  },
];


const customTheme = {
  components: {
    Button: {
      defaultBorderColor: '#8347e5',
      defaultColor:'#8347e5'
    },
  },
};

function ClientHomeComponent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
  <div>
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
            src="/d-lab-2.png"
            width="100px"
            style={{marginTop: '15px'}}
        />
        </div>
        <Menu style={{ minWidth: '80%'}} onClick={onClick} selectedKeys={[current]}  mode="horizontal" items={items} />
        <ConfigProvider theme={customTheme}>
        <Button block>
          Contact
        </Button>
        </ConfigProvider>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  </div>
  );
}

export default ClientHomeComponent;
