import React from "react";
import { withRouter, Route } from "react-router";
import { Layout, Breadcrumb, Icon } from "antd";

import Dashboard from "../../Components/dashboard";
import Sidebar from "./Components/sidebar/index";

const { Sider, Content } = Layout;

const DashboardPage = (props) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [mode, setMode] = React.useState("inline");
  const [minHeight, setMinHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    window.onresize = (e) => {
      setMinHeight(e.target.innerHeight);
    };
  }, []);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
    setMode(collapsed ? "vertical" : "inline");
  };

  return (
    <Layout style={{ minHeight: minHeight }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Sidebar mode={mode} />
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px", position: "relative" }}>
          <Dashboard />
        </Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(DashboardPage);
