import '../Header/Header.css';

export default function Header() {
    return(
        <header className='header'>
            <img className='header-logo' src='./images/logo.png'></img>

            <input className='header-search' type='search' placeholder='Search'></input>

            <div className='header-icons'>
                <img src='./images/home.png'></img>
                <img src='./images/add.png'></img>
                <img src={'./images/placeholder-user.png'}></img>
            </div>
        </header>
    )
}