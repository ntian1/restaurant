import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from './AccountInfo.module.css';

const AccountInfo = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className={styles.container}>
      <div className={styles.body}>Account Information</div>
        <div>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div className="field">
            <label className="label">Where do you live</label>
            <div className="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button class="button is-link is-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountInfo;
