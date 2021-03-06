import React from 'react';
import styles from './SideNavBar.module.css';

const SideNavBar = ({

}) => {

  return (
    <div className={styles.sideNavBar}>

      {/* TODO: Make this whole thing into an HREF that links to home, not just GGP */}
      {/* <div className={styles.sideNavBarLogo}>
        <a className={styles.sideNavBarLogoHeader} href="/working-new-home">GGP</a>
        <div className={styles.sideNavBarLogoText}>Boston College Clough Center for Constitutional Democracy</div>
      </div> */}

      <div className={styles.sideNavBarLogo}>
        <a className={styles.sideNavBarLogoHeader} href="/">
          <div>GGP</div>
          <div className={styles.sideNavBarLogoText}>Boston College Clough Center for Constitutional Democracy</div>
        </a>
      </div>

      {/* All the items below the logo, spaced for readability */}
      <div className={styles.sideNavBarAllItems}>

        {/* 2021 Section, headers, links to all maps, etc */}
  
        <div className={styles.sideNavBarItem}>
          <a href="/democracy-maps">Democracy Maps</a>
        </div>
        <div className={styles.sideNavBarItemAccent}>
          <a href="/">2021 Priorities</a>
        </div>
        <ul className={styles.sideNavBarItemsList}>
          <li className={styles.sideNavBarSubItem}>
            <a href="/election-day-registration">Election Day Registration</a>
          </li>
          <li className={styles.sideNavBarSubItem}>
            <a href="/early-mail-voting">Early Mail Voting</a>
          </li>
          <li className={styles.sideNavBarSubItem}>
            <a href="/campaign-finance">Publically Financed Campaigns</a>
          </li>
        </ul>
        <div className={styles.sideNavBarItem}>
          <a href="/other-legislative-endorsements">Other Endorsements</a>
        </div>

        <br/>

        {/* About, FAQ, Contact */}
        <div className={styles.sideNavBarItem}>
          <a href="/about">About</a>
        </div>
        <div className={styles.sideNavBarItem}>
          <a href="/disclaimer">Disclaimer</a>
        </div>
        <div className={styles.sideNavBarItem}>
          <a href="mailto: GGP.BCLaw@gmail.com">Contact Us</a>
        </div>

      </div>


        
      </div>

  );

}

export default SideNavBar;