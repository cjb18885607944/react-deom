// src/routes/index.js
import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import routeConfig from "./config"; // 引入路由配置
import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items = routeConfig.map(item => ({
    key: item.path,
    label: item.name,
    icon: <AppstoreOutlined />,
}));

const AppRoutes = () => {
    const navigate = useNavigate(); // 使用 useNavigate Hook
    const onClick = (e) => {
        console.log('click ', e);
        navigate(e.key); // 导航到对应的路由
    };
    return (
        <div>
            <Menu
                onClick={onClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['/']} // 默认选中首页
                mode="inline"
                items={items}
                theme="dark"
            />
                
        </div>
    );
};

export default AppRoutes;
