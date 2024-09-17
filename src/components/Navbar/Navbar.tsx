import './Navbar.css'
import logo from '../../assets/logo.svg'
import profilepic from '../../assets/profile.png'
import { IoIosArrowDown } from "react-icons/io";

function Navbar(){
    return(
        <div className="nav">
            <div className="left">
                <img src={logo} alt="logo" />
            </div>
            <div className="right">
                <img src={profilepic} alt='Profile' className='nav-profilepic' />
                <p>Aditya Patel</p>
                <IoIosArrowDown />
            </div>
        </div>
    )
}

export default Navbar;