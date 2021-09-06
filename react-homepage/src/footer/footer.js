import React from "react";
import "./footer.scss";
import gritzo from "../components/assets/gritzo_footer.png";
import { socialMediaImage } from "./footerData1";
import { bankIcons } from "./footerData2";
import { footerLinks } from "./footerData3";
import { bankImage } from "./footerData4";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__image">
          <img className="footer__image__header" src={gritzo} alt="gritzo" />
          <div className="footer__content">
            <p>
              Disclaimer: All Gritzo products are manufactured at FSSAI approved
              manufacturing facilities and are not intended to diagnose, treat,
              cure, or prevent any disease. Please read product packaging
              carefully prior to purchase and use. The information/articles on
              Gritzo (gritzo.com or subdomains) is provided for informational
              purpose only and is not meant to substitute for the advice
              provided by your doctor or other healthcare professional. These
              statements are not ratified by any government agency and are for
              general guidance only.
            </p>
          </div>
        </div>
        <div className="footer__update d-flex align-items-center">
          <div className="footer__update__content">
            Want to stay updated with us
          </div>

          <div className="footer__update__socialMedia d-flex">
            {socialMediaImage.map((item) => (
              <div>
                <img
                  className="footer__update__socialMedia__images"
                  key={item.socialMediaKey}
                  alt={item.socialMediaAlt}
                  src={item.socialMedia}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="footer__returns d-flex">
          <div className="d-flex">
            {bankIcons.map((item) => (
              <div className="d-flex align-items-center priceContent">
                <img src={item.bankIcon} key={item.bankIconKey} />
                <span key={item.bankIconContentKey} className="price">
                  {item.bankIconContent}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="footer__Link">
          <div className="footer__Link__header">
            <h6>QUICK LINKS</h6>
          </div>
          {footerLinks.map((item) => (
            <ul className="footer__Link__Info">
              <li>
                <a key={item.footerLinkKey}>{item.footerLink}</a>
              </li>
            </ul>
          ))}
        </div>
        <div className="footer__Contact">
          <div className="footer__Contact__header">
            <h6>GET TO KNOW US</h6>
          </div>
          <ul className="footer__Link__Info">
            <li>
              <a>Call us at +91 9205487429</a>
            </li>
            <li>
              <a>Email us on care@gritzo.com </a>
            </li>
          </ul>
        </div>
        <div className="footer__copywright d-flex justify-content-between align-items-center">
          <div className="footer__copywright__content">
            &copy;Copyright © 2021, Gritzo.com, or its affiliates
          </div>
          <div>
            {bankImage.map((item) => (
              <img
                className="footer__copywright__image"
                src={item.bankImage}
                alt={item.bankImageAltkey}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
