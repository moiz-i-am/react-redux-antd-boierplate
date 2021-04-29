import React from "react";
import { withRouter } from "react-router";

import LoginForm from "../../Components/LoginForm/LoginForm";
import GuestLayout from "../../Components/Layouts/GuestLayout";

import "./Login.css";

const LoginPage = (props) => (
  <GuestLayout contentClass="LoginContent">
    <LoginForm history={props.history} />
  </GuestLayout>
);

export default withRouter(LoginPage);
