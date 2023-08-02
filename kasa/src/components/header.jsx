
import logoImg from '../assets/images/LogoHeader.png' ;

function Header() {
    return (
      <nav>
                
        <img src={logoImg} alt ="aa"/>
            <ul>
              <li><a href="#"> Accueil</a> </li>
              <li className="mediaQ_link"> <a href="#">A propos</a></li>
            </ul>
      
      </nav>
    );
  }
  
  export default Header;