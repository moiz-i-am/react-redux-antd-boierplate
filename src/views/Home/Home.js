import React from "react";
import { withRouter } from "react-router";

import LoginForm from "../../Components/LoginForm/LoginForm";
import LoggedLayout from "../../Components/Layouts/LoggedLayout";

const Home = (props) => (
  <div style={{ padding: 24, background: "#fff", minHeight: 500 }}>Home</div>
);

export default withRouter(Home);
