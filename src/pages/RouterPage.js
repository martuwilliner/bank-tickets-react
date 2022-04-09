import React from 'react'

import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import {Ingresar} from './Ingresar';
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket';
import { Escritorio } from './Escritorio';
 
const { Sider, Content } = Layout;

export const RouterPage = () => {
  return (
    <Router>
    <Layout style={{height: '100vh'}}>
    <Sider>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/ingresar">Ingresar</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        
        <Link to="/cola">Cola de tickets</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/crear">Crear Ticket</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <Routes>
          <Route path="/ingresar" element={<Ingresar />} />
          <Route path="/cola" element={<Cola />} />
          <Route path="/crear" element={<CrearTicket />} />
          <Route path="/escritorio" element={<Escritorio />} />

          <Route path="*" element={<Ingresar/>} />
        </Routes>
      </Content>
    </Layout>
  </Layout>
  </Router>
    )
}
