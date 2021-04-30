import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import "antd/dist/antd.css";

import * as userActions from "./actionCreators/User";

function App({ children, getCurrentUser }) {
  React.useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div className="App">
      <main>{children}</main>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: bindActionCreators(userActions.getCurrentUser, dispatch),
});

App.propTypes = {
  user: PropTypes.object.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
