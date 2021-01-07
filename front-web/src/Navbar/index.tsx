import './styles.css';
import { ReactComponent as logo, ReactComponent } from './logo.svg';


function Navbar(){
    return (
        <nav className="main-navbar">
            <ReactComponent />
            <a href="home" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Navbar;