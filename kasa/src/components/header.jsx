
import logoImg from '../assets/images/LogoHeader.png' ;
import { Link } from 'react-router-dom'

function Header() {
    return (
      <nav>
                
        <img src={logoImg} alt ="aa"/>
            <ul>
            <Link to={"/Home/"}> <li>Accueil</li>
            </Link>
            <Link to={'/about/'}> <li className="mediaQ_link">A propos</li>
            </Link>
            </ul>
      
      </nav>
    );
  }
  
  export default Header;