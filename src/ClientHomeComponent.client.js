// ClientHomeComponent.client.js
"use client"
//
// import { Button,UnstyledButton, MantineProvider, AppShell, Burger, Group, Skeleton } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
import { useState} from 'react';
// import { MantineLogo } from '@mantine/ds';
import { Button, DatePicker } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
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


function ClientHomeComponent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  // const [isClient, setIsClient] = useState(false);
  // const [opened, setOpened] = useState(false);
  // const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  // const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  // const disclosure = useDisclosure();
  // let toggle = null;
  //
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  //
  //
  // useEffect(() => {
  //   if(isClient) {
  //     setOpened(disclosure.opened);
  //     toggle = disclosure.toggle;
  //   }
  // }, [isClient, disclosure.opened])
  // // if (isClient) {
  // //   toggle = disclosure.toggle;
  // //   setOpened(disclosure.opened);
  // // }
  // const items = [
  //   {
  //     label: 'Navigation One',
  //     key: 'mail',
  //     icon: <MailOutlined />,
  //   },
  //   {
  //     label: 'Navigation Two',
  //     key: 'app',
  //     icon: <AppstoreOutlined />
  //   },
  //   {
  //     label: 'Navigation Three - Submenu',
  //     key: 'SubMenu',
  //     icon: <SettingOutlined />}
  // ]

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
        <Menu style={{ minWidth: 1000}} onClick={onClick} selectedKeys={[current]}  mode="horizontal" items={items} />
        <Button type="text" block>
          Contact
        </Button>
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
      // <MantineProvider>
      //   {/*<AppShell*/}
      //   {/*    header={{ height: 60 }}*/}
      //   {/*    navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}*/}
      //   {/*    padding="md"*/}
      //   {/*>*/}
      //   {/*  <AppShell.Header>*/}
      //   {/*    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />*/}
      //   {/*    <div>Logo</div>*/}
      //   {/*  </AppShell.Header>*/}
      //
      //   {/*  <AppShell.Navbar p="md">Navbar</AppShell.Navbar>*/}
      //
      //   {/*  <AppShell.Main>Main</AppShell.Main>*/}
      //   {/*</AppShell>*/}
      //   {/*<Button>Hello from Mantine!</Button>*/}
      //   {/*<AppShell*/}
      //   {/*    header={{ height: 60 }}*/}
      //   {/*    navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}*/}
      //   {/*    padding="md"*/}
      //   {/*>*/}
      //   {/*  <AppShell.Header>*/}
      //   {/*    <Group h="100%" px="md">*/}
      //   {/*      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />*/}
      //   {/*      <Group justify="space-between" style={{ flex: 1 }}>*/}
      //   {/*        <MantineLogo size={10} />*/}
      //   {/*        <Group ml="xl" gap={0} visibleFrom="sm">*/}
      //   {/*          <UnstyledButton className={classes.control}>Home</UnstyledButton>*/}
      //   {/*          <UnstyledButton className={classes.control}>Blog</UnstyledButton>*/}
      //   {/*          <UnstyledButton className={classes.control}>Contacts</UnstyledButton>*/}
      //   {/*          <UnstyledButton className={classes.control}>Support</UnstyledButton>*/}
      //   {/*        </Group>*/}
      //   {/*      </Group>*/}
      //   {/*    </Group>*/}
      //   {/*  </AppShell.Header>*/}
      //
      //   {/*  <AppShell.Navbar py="md" px={4}>*/}
      //   {/*    <UnstyledButton className={classes.control}>Home</UnstyledButton>*/}
      //   {/*    <UnstyledButton className={classes.control}>Blog</UnstyledButton>*/}
      //   {/*    <UnstyledButton className={classes.control}>Contacts</UnstyledButton>*/}
      //   {/*    <UnstyledButton className={classes.control}>Support</UnstyledButton>*/}
      //   {/*  </AppShell.Navbar>*/}
      //
      //   {/*  <AppShell.Main>*/}
      //   {/*    Navbar is only visible on mobile, links that are rendered in the header on desktop are*/}
      //   {/*    hidden on mobile in header and rendered in navbar instead.*/}
      //   {/*  </AppShell.Main>*/}
      //   {/*</AppShell>*/}
      //   <AppShell
      //       header={{ height: 60 }}
      //       navbar={{
      //         width: 300,
      //         breakpoint: 'sm',
      //         collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      //       }}
      //       padding="md"
      //   >
      //     <AppShell.Header>
      //       <Group h="100%" px="md">
      //         <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
      //         <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
      //         <MantineLogo size={30} />
      //       </Group>
      //     </AppShell.Header>
      //     <AppShell.Navbar p="md">
      //       Navbar
      //       {Array(15)
      //           .fill(0)
      //           .map((_, index) => (
      //               <Skeleton key={index} h={28} mt="sm" animate={false} />
      //           ))}
      //     </AppShell.Navbar>
      //     <AppShell.Main>Main</AppShell.Main>
      //   </AppShell>
      // </MantineProvider>
  );
}

export default ClientHomeComponent;
