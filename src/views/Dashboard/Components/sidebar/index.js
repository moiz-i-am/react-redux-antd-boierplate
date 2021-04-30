import React, { Component } from "react";
import { Menu, message } from "antd";
import { HomeFilled, LoginOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import "./style/index.less";

const Sidebar = (props) => {
  const handleClick = (e) => {
    switch (e.key) {
      case "dashboard":
        this.props.history.push("/dashboard");
        break;
      case "logout":
        logOut();
        break;
      default:
        return;
    }
  };

  const logOut = () => {
    message.success("You are successfully logout.");
    props.history.push("/login");
  };

  return (
    <div>
      <div className="logo" />
      <Menu
        theme="dark"
        mode={props.mode}
        defaultSelectedKeys={["dashboard"]}
        onClick={handleClick}
      >
        <Menu.Item key="dashboard">
          <span>
            <HomeFilled />
            <span className="nav-text">Dashboard</span>
          </span>
        </Menu.Item>
        <Menu.Item key="logout">
          <span>
            <LoginOutlined />
            <span className="nav-text">LogOut</span>
          </span>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(Sidebar);
