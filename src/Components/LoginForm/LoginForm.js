import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Form, Input, Button, Checkbox, Card, Alert } from "antd";

import validators from "../../validators/validators";
import { FormInputField } from "../FormInputField/FormInputField";

import * as userActions from "../../actionCreators/User";

import "./LoginForm.css";

const LoginForm = ({ logIn }) => {
  const handleSubmitForm = async (values, actions) => {
    logIn(values);
  };

  return (
    <Card className={"LoginFormCard"}>
      <p
        style={{ fontWeight: "bold", fontSize: "1.05rem", textAlign: "center" }}
      >
        Log In
      </p>
      <div className="loginFormForgot">
        <a href="/">Forgot password</a>
      </div>
      <div style={{ textAlign: "center", margin: "1%" }}>or</div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validators.user.loginSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, actions) => handleSubmitForm(values, actions)}
        render={(formikProps) => {
          const { errors, isSubmitting, handleSubmit } = formikProps;

          return (
            <>
              {Object.keys(errors).length > 0 && (
                <Alert
                  message={errors.email || errors.password || errors.auth}
                  type="error"
                  showIcon
                  style={{ marginBottom: "1.05rem", maxWidth: "300px" }}
                />
              )}
              <Form onFinish={handleSubmit}>
                <label htmlFor="email">Email</label>
                <Field
                  InputType={Input}
                  component={FormInputField}
                  name="email"
                  placeholder="Email"
                  hideErrorMessage={true}
                />
                <label htmlFor="password">Password</label>
                <Field
                  InputType={Input}
                  component={FormInputField}
                  name="password"
                  placeholder="Password"
                  type="password"
                  hideErrorMessage={true}
                />
                <Form.Item style={{ marginBottom: "unset" }}>
                  <Checkbox>Remember me</Checkbox>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={isSubmitting}
                    className={"loginFormButton"}
                  >
                    Log in
                  </Button>
                  <div style={{ textAlign: "center", margin: "1%" }}>
                    <Link to="/register">Sign up</Link>
                  </div>
                </Form.Item>
              </Form>
            </>
          );
        }}
      />
    </Card>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  logIn: bindActionCreators(userActions.logIn, dispatch),
});

LoginForm.propTypes = {
  user: PropTypes.object.isRequired,
  logIn: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      redirectUrl: PropTypes.string,
      search: PropTypes.string,
    }),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
