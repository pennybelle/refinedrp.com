import logo from '../images/logo.png';
import icon from '../images/icon_black_yellow.png';

const Navbar = () => {
    return(
        <div className="Navbar">
            <div classname="Navlogo">
                <img src={logo} />
                <img src={icon} />
            </div>
            <div className="Navbuttons">
              <button className='NavButton'>Gallery</button>
              <button className='NavButton'>Stats</button>
              <button className='NavButton'>Rules</button>
              <button className='NavButton'>Home</button>
            </div>
        </ div>
    )
};

export default Navbar;