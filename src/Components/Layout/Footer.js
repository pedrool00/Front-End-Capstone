import './Footer.css';
import footer_logo from './assets/footer_logo.svg';

const Footer = () => {
    return (
      <footer className="site-footer">
        <div className="container grid">
          <img 
            className="site-footer-logo" 
            src={footer_logo} 
            alt="Little Lemon" 
          />
          <nav className="site-footer-nav">
            <h4>Sitemap</h4>
            <ul>
                <li>
                  
                </li>
            </ul>
          </nav>
          <div className="site-footer-contact">
            <h4>Contact us</h4>
            <address>
              <p>

              </p>
            </address>
          </div>
          <div className="site-footer-social">
            <h4>Connect with us</h4>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;