import React from "react";
import { Layout, Menu, Typography } from "antd";
import { withRouter } from "react-router";

import "./Layouts.css";

const { Header, Footer, Content } = Layout;

const GuestLayout = (props) => (
  <Layout className="layout" style={{ minHeight: "100vh" }}>
    <Header style={{ height: "unset" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        selectedKeys={[props.location.pathname]}
        style={{ lineHeight: "65px", textAlign: "center" }}
      >
        <Menu.Item key="logo" className="logo-menu">
          <Typography style={{ color: "#fff" }}>SNG DASHBOARD</Typography>
        </Menu.Item>
      </Menu>
    </Header>
    <Content className={props.contentClass || "Content"}>
      {props.children}
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Copyright 2020 - SNG Dashboard
    </Footer>
  </Layout>
);

export default withRouter(GuestLayout);
