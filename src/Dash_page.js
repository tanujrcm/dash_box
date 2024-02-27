import React, { useState } from 'react'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

import { Layout, Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;

export default function Dash_page() {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'nav 1',
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'nav 2',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>


                    <Breadcrumb
                        items={[
                            {
                                href: '',
                                title: <HomeOutlined />,
                            },
                            {
                                href: '',
                                title: (
                                    <>
                                        <UserOutlined />
                                        <span>Application List</span>
                                    </>
                                ),
                            },
                            {
                                title: 'Application',
                            },
                        ]}
                    />


                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 1280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis risus, tincidunt sit amet ipsum quis, tincidunt elementum augue. Integer facilisis auctor rutrum. Vivamus vel commodo ex. Suspendisse ornare felis quis risus elementum condimentum. Nullam rutrum iaculis diam, id volutpat sem sollicitudin iaculis. Cras pharetra blandit sem, dictum porta orci dictum porttitor. Sed et consectetur metus. Fusce scelerisque mauris pulvinar lacus rutrum facilisis. Suspendisse eleifend lorem eget leo consequat suscipit. Cras nec purus lacinia, faucibus ipsum eget, iaculis mauris. Nunc ac imperdiet lectus. Pellentesque vitae sapien sit amet quam ultricies mollis. Donec suscipit purus id elit pretium feugiat. Phasellus sollicitudin fringilla ultrices. Quisque vitae sodales lectus. Vestibulum sit amet eros urna.
                    </Content>
                </Layout>
            </Layout>

        </>
    )
}
