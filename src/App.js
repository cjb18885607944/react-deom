// src/APP.js
import React from 'react';
import zhCN from "antd/es/locale/zh_CN";
import { Layout, theme, ConfigProvider } from 'antd';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes'; // 引入 AppRoutes
import routeConfig from "./routes/config"; // 引入路由配置

const { Header, Content, Footer, Sider } = Layout;
const siderStyle = {
  overflow: 'auto',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const APP = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <ConfigProvider locale={zhCN} direction='ltr'>
      <Router>
        <Layout hasSider>
          <Sider style={siderStyle}>
            <div className="demo-logo-vertical" >123</div>
            <AppRoutes />
          </Sider>
          <Layout
            style={{
              marginInlineStart: 200,
            }}
          >
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            />
            <Content
              style={{
                margin: '24px 16px 0',
              }}
            >
              <div
                style={{
                  padding: 24,
                  textAlign: 'center',
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {
                  <Routes>
                    {routeConfig.map(({ path, component: Component }) => (
                      <Route key={path} path={path} element={<Component />} />
                    ))}
                  </Routes>
                }
              </div>
            </Content>
            <Footer
              style={{
                textAlign: 'center',
              }}
            >
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default APP;
