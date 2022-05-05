import '../style/Navbar.css'
import logo from '../image/logo.png'


export default function Navbar() {
    

    return (
        <header>
        <nav>
            <ul>
                <li> <img id="logo" src={logo} /></li>                
                <li id="space2"></li>
                
                <li> <a className="tooltip active" data-tooltip="Home" href="#" id="home"> <i className="fas fa-home    "></i> </a> </li>
                <li> <a className="tooltip" data-tooltip="Groups" href="#" id="groups"> <i className="fas fa-user-friends    "></i> </a></li>
                <li> <a className="tooltip" data-tooltip="Trending" href="#" id="trending"> <i class="fa-regular fa-compass"></i> </a> </li>
                <li> <a className="tooltip" data-tooltip="Profile" href="#" id="profile"> <i className="fas fa-user-alt    "></i> </a> </li>
                <li> <a className="tooltip" data-tooltip="Notification" href="#" id="notification">  <i className="fas fa-bell    "></i> </a> </li>
                <li id="space1"></li>

                <li> <button id="search_btn" className="tooltip" data-tooltip="Search"> <i className="fas fa-search    "></i> </button> </li>
                <li><input type="text" placeholder="Search" id="search"></input></li>
                <li className="tooltip" id='menu' data-tooltip="menu"><i class="fa-solid fa-bars" id='menu'></i><span>Menu</span> </li>
            </ul>
        </nav>
    </header>
    )

}