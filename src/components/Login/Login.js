import React, { useState } from "react";
import classes from "./Login.module.scss";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();

  const validateEmail = () => {
    if (!email) {
      setEmailError("Please enter email");
    } else if (!email.includes("@")) {
      setEmailError("Please enter valid email");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Please enter password");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem("email", email);
    history.push("/chat");
  };

  return (
    <div>
      <h1 className={classes.welcomeTitle}>Welcome to Chat-App</h1>
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="row justify-content-center">
            <div className="col-12">
              <input
                required
                type="text"
                value={email}
                className={`form-control ${emailError ? `is-invalid` : null}`}
                onChange={event => setEmail(event.target.value)}
                onKeyUp={validateEmail}
                placeholder="New Email"
                noValidate
              />
              {emailError && (
                <div className="mt-2">
                  <p className={classes.err}>{emailError}</p>
                </div>
              )}
              <input
                required
                type="password"
                name="password"
                className={`form-control mt-2 ${
                  passwordError ? `is-invalid` : null
                }`}
                placeholder="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                onKeyUp={validatePassword}
              />
              {passwordError ? (
                <div className="mt-2">
                  <p className={classes.err}>Please enter password</p>
                </div>
              ) : (
                ""
              )}
              <div className="d-flex justify-content-center mt-2">
                <button
                  disabled={!email || !password}
                  type="submit"
                  className={`btn btn-primary ${classes.loginButton}`}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
