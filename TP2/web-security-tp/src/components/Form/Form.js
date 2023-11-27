import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleRegistration = async () => {
    try {
      const usernameLower = username.toLowerCase();
      const response = await axios.post("http://localhost:3001/users", {
        username,
        email,
        usernameLower,
        phoneNumber,
        password,
      });
      if (response.status === 201) {
        setErrorMessage(false);
        setSuccessMessage(true);
        console.log("User registered successfully", response.config.data);
      }
    } catch (error) {
      setSuccessMessage(false);
      setErrorMessage(true);
      console.error("Error registering user:", error.response.data);
    }
  };

  const getActiveColor = (type) => {
    switch (type) {
      case "medium":
        return "#fe804d";
      case "strong":
        return "#4fbb60";
      default:
        return "#ff0054";
    }
  };

  const handlePassword = (passwordValue) => {
    const strengthChecks = {
      length: 0,
      hasUpperCase: false,
      hasLoweCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    strengthChecks.length = passwordValue.length >= 8 ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLoweCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    let verifiedList = Object.values(strengthChecks).filter((value) => value);

    let strength =
      verifiedList.length === 5
        ? "strong"
        : verifiedList.length >= 2
        ? "medium"
        : "weak";

    setPassword(passwordValue);
    setMessage(strength);
    setProgress(`${verifiedList.length * 20}%`);
  };

  const isDisabled = () => {
    if (
      username.length > 0 &&
      email.length > 0 &&
      phoneNumber.length > 0 &&
      (message === "medium" || message === "strong")
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  useEffect(() => {
    isDisabled();

    // eslint-disable-next-line
  }, [username, phoneNumber, email, password]);

  return (
    <div className="form-container">
      <div className="card">
        {successMessage && <div className="notification success">
          <h4>Successfully created account</h4>
        </div>}
        {errorMessage &&<div className="notification error">
          <h1>Something went wrong :C</h1>
        </div>}
        <div className="card-body">
          <div className="form-group">
            <div className="input-box">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                className="input"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-box">
              <label htmlFor="phone">Phone</label>
              <input
                name="phone"
                type="tel"
                className="input"
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <div className="input-box">
                <label htmlFor="password">Password</label>
                <div className="input-group">
                  <input
                    name="password"
                    value={password}
                    onChange={({ target }) => {
                      handlePassword(target.value);
                    }}
                    type={hidePassword ? "password" : "text"}
                    className="input"
                    placeholder="Enter your password"
                  />
                  <button
                    className="toggle-btn"
                    onClick={() => {
                      setHidePassword(!hidePassword);
                    }}>
                    <span
                      style={{ color: !hidePassword ? "#1364FF" : "#c3c3c3" }}>
                      Show
                    </span>
                  </button>
                </div>
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: progress,
                    backgroundColor: getActiveColor(message),
                  }}></div>
              </div>
            </div>

            {password.length !== 0 ? (
              <p className="message" style={{ color: getActiveColor(message) }}>
                Your password is {message}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <button
        className="submit-btn"
        disabled={buttonDisabled}
        onClick={handleRegistration}>
        Register
      </button>
    </div>
  );
};

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
