import React from "react";
import { Menu, message } from "antd";
import { HomeFilled, LoginOutlined } from "@ant-design/icons";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as userActions from "../../../../actionCreators/User";

import "./style/index.less";

const Sidebar = ({ history, mode, logOut }) => {
  const handleClick = (e) => {
    switch (e.key) {
      case "logout":
        handleLogOut();
        break;
      default:
        return;
    }
  };

  const handleLogOut = () => {
    logOut();
    history.push("/login");
    message.success("You are successfully logout.");
  };

  return (
    <div>
      <div className="logo" />
      <Menu
        theme="dark"
        mode={mode}
        defaultSelectedKeys={["dashboard"]}
        onClick={handleClick}
      >
        <Menu.Item key="dashboard">
          <HomeFilled />
          <span>Dashboard</span>
          <Link to="/" />
        </Menu.Item>
        <Menu.Item key="home">
          <HomeFilled />
          <span>Home</span>
          <Link to="/home" />
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

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  logOut: bindActionCreators(userActions.logOut, dispatch),
});

Sidebar.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
