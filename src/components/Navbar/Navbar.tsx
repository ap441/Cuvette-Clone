import './Navbar.css'
import logo from '../../assets/logo.svg'

function Navbar(){
    return(
        <div className="nav">
            <div className="left">
                <img src={logo} alt="logo" />
            </div>
            <div className="right">
                <p>Aditya Patel</p>
            </div>
        </div>
    )
}

export default Navbar;