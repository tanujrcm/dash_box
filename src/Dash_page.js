import React, { useState, useRef } from 'react'
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Space, Typography, Tour } from 'antd';
import { Col, Row, Divider } from 'antd';
import Logo from './img/rcm_logo.png';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    HomeFilled,
    SwapOutlined,
    ProfileOutlined,
    ReconciliationOutlined,
    QuestionCircleOutlined,
    LogoutOutlined,
    BarChartOutlined,
    PieChartOutlined,
    HeatMapOutlined,
} from '@ant-design/icons';

import { Layout, Menu, Button, theme } from 'antd';

const { Title, Paragraph } = Typography;

const { Header, Sider, Content } = Layout;

export default function Dash_page() {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();



    // Tour start

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const [open, setOpen] = useState(false);
    const steps = [
        {
            title: 'Sales 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget turpis magna. Morbi a dolor a libero ullamcorper elementum quis vel enim. Vivamus quis egestas dui, a luctus elit.',
            target: () => ref1.current,
        },
        {
            title: 'Sales 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget turpis magna. Morbi a dolor a libero ullamcorper elementum quis vel enim. Vivamus quis egestas dui, a luctus elit.',
            target: () => ref2.current,
        },
        {
            title: 'Sales 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget turpis magna. Morbi a dolor a libero ullamcorper elementum quis vel enim. Vivamus quis egestas dui, a luctus elit.',
            target: () => ref3.current,
        },
    ];

    // Tour end


    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Space style={{ padding: 15 }}>
                        <img className='img_res' src={Logo} />
                    </Space>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <HomeFilled />,
                                label: 'Home',
                            },
                            {
                                key: '2',
                                icon: <UserOutlined />,
                                label: 'My Profile',
                            },
                            {
                                key: '3',
                                icon: <SwapOutlined />,
                                label: 'Transactions',
                            },
                            {
                                key: '4',
                                icon: <ProfileOutlined />,
                                label: 'Masters',
                            },
                            {
                                key: '5',
                                icon: <ReconciliationOutlined />,
                                label: 'Reports',
                            },
                            {
                                key: '6',
                                icon: <QuestionCircleOutlined />,
                                label: 'Utilities',
                            },
                            {
                                key: '7',
                                icon: <LogoutOutlined />,
                                label: 'Logout',
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
                    <Row>
                        <Col span={18} style={{ padding: 15 }}>
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
                        </Col>
                    </Row>
                    <Content
                        style={{
                            margin: '0 16px 24px',
                            padding: 24,
                            minHeight: '100vh',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card>
                                    <BarChartOutlined style={{ fontSize: '80px', color: '#265787' }} />
                                    <Title level={2}>Sales 11</Title>
                                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas lectus non massa facilisis malesuada.</Paragraph>
                                    <Button ref={ref1}>Button One</Button>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <PieChartOutlined style={{ fontSize: '80px', color: '#265787' }} />
                                    <Title level={2}>Sales 22</Title>
                                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas lectus non massa facilisis malesuada.</Paragraph>
                                    <Button ref={ref2}>Button Two</Button>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <HeatMapOutlined style={{ fontSize: '80px', color: '#265787' }} />
                                    <Title level={2}>Sales 33</Title>
                                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas lectus non massa facilisis malesuada.</Paragraph>
                                    <Button ref={ref3}>Button Three</Button>
                                </Card>
                                <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
                            </Col>


                            <Col style={{ marginTop: '20px' }}>
                                <Button type="primary" onClick={() => setOpen(true)}>Start Tour</Button>
                            </Col>

                            <Col span={24} style={{ marginTop: '10px' }}>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas lectus non massa facilisis malesuada. Ut non hendrerit odio, in congue sem. Pellentesque condimentum ex sed nisl facilisis, vitae dictum diam commodo. Proin id justo vel libero tincidunt feugiat id ut massa. Maecenas bibendum gravida molestie. Ut mollis mattis leo, sed facilisis nisl tempus vitae. Pellentesque mollis, nulla vitae rutrum tristique, metus justo malesuada neque, non dictum arcu erat nec mi. Phasellus porta nunc a mi ultrices molestie. Integer dapibus pharetra ex, a mattis ligula pretium lobortis. Cras mattis augue consectetur orci pellentesque sollicitudin ut sit amet quam. Sed ac felis neque.
                                </Paragraph>
                                <Divider />
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas lectus non massa facilisis malesuada. Ut non hendrerit odio, in congue sem. Pellentesque condimentum ex sed nisl facilisis, vitae dictum diam commodo. Proin id justo vel libero tincidunt feugiat id ut massa. Maecenas bibendum gravida molestie. Ut mollis mattis leo, sed facilisis nisl tempus vitae. Pellentesque mollis, nulla vitae rutrum tristique, metus justo malesuada neque, non dictum arcu erat nec mi. Phasellus porta nunc a mi ultrices molestie. Integer dapibus pharetra ex, a mattis ligula pretium lobortis.
                                </Paragraph>
                            </Col>
                            <Col span={12}>
                                <Card>
                                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas lectus non massa facilisis malesuada. Ut non hendrerit odio, in congue sem. Pellentesque condimentum ex sed nisl facilisis, vitae dictum diam commodo. Proin id justo vel libero tincidunt feugiat id ut massa. Maecenas bibendum gravida molestie. Ut mollis mattis leo, sed facilisis nisl tempus vitae.</Paragraph>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card>
                                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas lectus non massa facilisis malesuada. Ut non hendrerit odio, in congue sem. Pellentesque condimentum ex sed nisl facilisis, vitae dictum diam commodo. Proin id justo vel libero tincidunt feugiat id ut massa. Maecenas bibendum gravida molestie. Ut mollis mattis leo, sed facilisis nisl tempus vitae.</Paragraph>
                                </Card>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}