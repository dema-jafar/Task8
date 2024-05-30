import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navSection">
            <div className="navLogo">
                <img src="./../../../public/image/logo.svg" alt="logo image" />
                <h1>Digital marketing agency</h1>
            </div>
            <ul className="navLinks">
                <li><a href="#">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Clients&partners</a></li>
                <li><a href="#">X Academy</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Let's Talk</a></li>
            </ul>
        </nav>
    )
}
