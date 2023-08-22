import { NavLink } from "react-router-dom";



function Err404() {
    return (
     <> 
     <h1 class="error-title">404</h1>

        <h2 class="redirect">Oups! la page que vous demandez n'existe pas.</h2>
        <NavLink className ="redirect-link" to="/">Retourner sur la page d'accueil</NavLink>

     </>
    );
  }
  
  export default Err404;