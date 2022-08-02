
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars fa-2xl"></i>
            </button>
            <Link className="navbar-brand" to="/"><img className="logo" src={require("../images/logo.png")} alt="Anemoon" /></Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Welkom</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="teamleden">Teamleden</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="psychodiagnostisch-onderzoek">Psychodiagnostisch Onderzoek</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="therapie-begeleiding">Therapie/begeleiding</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="tarieven">Tarieven</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="contact">Contact</Link>
                    </li>

                </ul>
            </div>
            </div>
        </nav>
      </header>
    </div>
  )
}

export const Footer = () => {
  return (
    <div>
        <footer>
        <p>Groepspraktijk Anemoon Wilrijk</p>  
           <p><i className="fa-solid fa-location-dot"></i>  Prins Boudewijnlaan 347, 2610 Wilrijk</p>
        <p><i className="fa-solid fa-envelope"></i><a href="mailto:info@groepspraktijkanemoon.be"> info@groepspraktijkanemoon.be</a></p>
        <p><i className="fa-solid fa-phone"></i> 0485-730190 (tussen 9-9.30u bereikbaar)</p>
        <div className="social-icons">
            <a href="https://facebook.com/groepspraktijkanemoon.be/"><i className="fa-brands fa-facebook fa-3x"></i></a>
            <a href="https://instagram.com/anemoon_groepspraktijk"><i className="fa-brands fa-instagram fa-3x"></i></a>
        </div> 
    </footer>
    </div>
  )
}
