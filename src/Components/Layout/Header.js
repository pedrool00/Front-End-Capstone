import './Header.css';
import header_logo from './assets/header_logo.svg';

const Header = () => {
    return (
      <header>
         <nav>
            <div className="container grid">
               <img 
                   className="site-footer-logo" 
                   src={header_logo} 
                   alt="Little Lemon" 
               />
               <button 
                   className="nav-bar-hamburger" 
                   type="button" 
               >
               </button>
               <ul>
                   <li>

                   </li>
               </ul>
            </div>
        </nav>
      </header>
    );
  };
  
  export default Header;