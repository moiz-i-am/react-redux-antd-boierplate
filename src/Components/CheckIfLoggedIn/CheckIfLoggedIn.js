import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";
import { connect } from "react-redux";

const CheckIfLoggedIn = (props) => {
  const [state, setState] = React.useState({
    data: null,
    loading: null,
    error: null,
  });

  useEffect(() => {
    const { data, loading, error } = state;

    if (!loading && !data && !error) {
      setState((obj) => ({
        ...obj,
        loading: false,
        data: props.currentUser.data,
      }));
    }
  }, [props.currentUser]);

  if (props.currentUser.data) return props.children;

  if (state.loading) {
    return <Spin />;
  }

  // if (state.data) {
  //   props.setFirstAuthState(true, state.data);
  // }

  // if (state.error) {
  //   props.setFirstAuthState(false, null);
  // }

  return props.children;
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    loggedIn: state.user.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {};

CheckIfLoggedIn.propTypes = {
  history: PropTypes.object.isRequired,
};

const connectedCheckIfLoggedIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckIfLoggedIn);

export default connectedCheckIfLoggedIn;
