import React, { useState, useEffect } from "react";
import classes from "./Profile.module.scss";

const Profile = props => {
  const [email, setEmail] = useState();
  const [newEmail, setNewEmail] = useState();

  const [emailError, setEmailError] = useState("");

  const [action, setAction] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);

  const onHandleChanges = actionName => {
    if (actionName) {
      setNewEmail(email);
    }
    setAction(actionName);
  };

  const onProfileUpdate = () => {
    localStorage.setItem("email", newEmail);
    setEmail(newEmail);
    setAction("");
  };

  const validateEmail = () => {
    if (!newEmail) {
      setEmailError("Please enter email");
    } else if (!newEmail.includes("@")) {
      setEmailError("Please enter valid email");
    } else {
      setEmailError("");
    }
  };

  const changedEmail = (
    <div className="form-group">
      <input
        required
        type="text"
        value={newEmail}
        className={`form-control ${emailError ? `is-invalid` : null}`}
        onChange={event => setNewEmail(event.target.value)}
        onKeyUp={validateEmail}
        placeholder="New Email"
        noValidate
      />
      {emailError && (
        <div className="mt-2">
          <p className={classes.err}>{emailError}</p>
        </div>
      )}
    </div>
  );

  const profileInfo = (
    <div className="form-group row">
      <label className="col-sm-3 col-form-label">Email</label>
      <div className="col-6">
        <p className="mt-2">{email}</p>
      </div>
    </div>
  );

  return (
    <div>
      <form>
        <div className={`profile ${classes.profile} `}>
          <div className="card">
            <div className="card-header">
              <b>My Profile</b>
            </div>
            <div className="card-body">
              {!email ? (
                <div>
                  <p>No Data</p>
                </div>
              ) : (
                <div>{action ? changedEmail : profileInfo}</div>
              )}
            </div>
            {email ? (
              <div className="card-footer">
                {action ? (
                  <div>
                    <button
                      type="button"
                      onClick={onProfileUpdate}
                      className="btn btn-success btn-sm"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={onHandleChanges.bind(this, "")}
                      className="btn btn-secondary btn-sm ml-2"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={onHandleChanges.bind(this, "edit")}
                    className="btn btn-primary btn-sm"
                  >
                    Edit profile
                  </button>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
