import logoFooter from "../assets/images/LogoFooter.png" ;


function Footer() {
    return (
      <footer>
        <div class="footer">
        <img src={logoFooter} alt ="logo_footer" />
        <div className="footer_text">
        <p>© 2020 Kasa.</p>
        <p>All right reserved</p>
        </div>
      </div>
    </footer> 

    );
  }
  
  export default Footer;