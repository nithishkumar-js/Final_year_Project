import React from 'react'
import logo from '../../asserts/logo.jpg'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import './Navbar.css'
export default function Navbar() {
    return (
        <nav className="navbar_layout">
            {/* logo with Search bar */}
            <div style={{display:"flex",paddingTop:10}}>
                <img src={logo} alt="..." className="navbar_logo"/>
                <div className="navbar_search_bar">
                <SearchIcon color=''size={50} className="nav_search_icon"/>
                <input type='text' className ="navbar_input"placeholder="Search Facebook"/>
                </div>
            </div>
            {/* list of  */}
            <div>
                <ul className='nav_ul'>
                    <li className="nav_ul_li"><HomeIcon style={{fontSize:60}} className="nav_icons"/></li>
                    <li className="nav_ul_li"><HomeIcon style={{fontSize:60}} className="nav_icons"/></li>
                    <li className="nav_ul_li"><HomeIcon style={{fontSize:60}} className="nav_icons"/></li>
                </ul>
            </div>
        </nav>
    )
}
