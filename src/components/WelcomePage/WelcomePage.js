import '../WelcomePage/WelcomePage.css'

export default function WelcomePage(){
    return(
        <div className='welcome-content-container'>
            <img className='welcome-image' src='./images/welcomeimage.png'></img>

            <div className='welcome-sidebar'>
                <div className='welcome-sidebar-box'>
                    <img className='welcome-logo' src='./images/logo.png'></img>
                </div>

            </div>
        </div>
    )
   
}