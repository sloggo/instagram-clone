import { useState } from 'react';
import '../Header/Header.css';


export default function Header(props) {
    const profile = props.userOrGuestProfile()
    const [user, setUser] = useState(profile)

    return(
        <header className='header'>
            <img className='header-logo' src='./images/logo.png' alt='Instagram Logo'></img>

            <input className='header-search' type='search' placeholder='Search'></input>

            <div className='header-icons'>
                <img src='./images/home.png' alt='Home Icon'></img>
                <img src='./images/add.png' alt='Post Icon'></img>
                <img className='header-pfp' onClick={props.logOut} src={user.photoURL} alt='User Profile'></img>
            </div>
        </header>
    )
}