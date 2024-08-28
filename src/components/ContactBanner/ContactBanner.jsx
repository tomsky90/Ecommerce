import "./contactBanner.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const ContactBanner = () => {
  return (
    <div className="contact-banner">
      <div className="contact-banner__wrapper">
        <h3>Stay in touch with us:</h3>
        <div className="contact-banner__email">
          <input
            className="contact-banner__email-input"
            type="text"
            placeholder="Enter your email..."
          />
          <button className="contact-banner__submit-btn">Join us</button>
        </div>
        <div className="contact-banner__icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
