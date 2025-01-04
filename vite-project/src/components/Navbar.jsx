import './Navbar.css'
import logo33 from '../assets/logo33.png';


const Navbar = () => {

  return (
    <nav>
    <img src={logo33} alt="Website logo"  className='logo'/>
    <ul>
    <li>Offers</li>
    <li>Search</li>
    <li>Help</li>
    <li>Cart</li>
    <li><button className='btn'>Login/SignUp</button></li>
    </ul>
    </nav>
  )
}

export default Navbar