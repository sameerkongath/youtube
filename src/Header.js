import React, { useState } from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="Header">
    <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img src="https://1000logos.net/wp-content/uploads/2017/05/logo-youtube.png" alt="" className="header__logo"/>
        </Link>
        </div>
    <div className="header__input">
        <input 
        onChange={e=>setInputSearch(e.target.value)} 
        value={inputSearch}
        type="text"
        placeholder="Search"/>

        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header__inputButton" />
        </Link>

    </div>  
    <div className="header__icons">
        <VideoCallIcon className="header__icon"/>
        <AppIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <Avatar alt="" src="https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg" />
    </div>
    </div>
  );
}

export default Header;
