import logoFooter from "../assets/images/LogoFooter.png" ;


function Footer() {
    return (
      <footer>
        <div className="footer">
        <img src={logoFooter} alt ="logo_footer" />
        <div className="footer_text">
        <p>© 2020 Kasa.All right reserved</p>
        </div>
      </div>
    </footer> 

    );
  }
  
  export default Footer;