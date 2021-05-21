import React from "react";
import { withRouter } from "react-router";
import { Layout } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from "./Components/sidebar/index";
import Inspectors from "./Components/Inspectors";
import Properties from "./Components/Properties/Properties";

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
    <Router>
      <Layout style={{ minHeight: minHeight }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Sidebar mode={mode} />
        </Sider>
        <Layout>
          <Content style={{ margin: "0 16px", position: "relative" }}>
            <Route exact path="/inspectors" component={Inspectors} />
            <Route path="/properties" component={Properties} />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default withRouter(DashboardPage);
