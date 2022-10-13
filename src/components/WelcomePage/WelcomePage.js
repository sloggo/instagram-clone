import '../WelcomePage/WelcomePage.css'
import LogInForm from '../LogInForm/LogInForm'

export default function WelcomePage(props){
    return(
        <div className='welcome-content-container'>
            <img className='welcome-image' src='./images/welcomeimage.png' alt='Instagram App'></img>

            <div className='welcome-sidebar'>

                <div className='welcome-sidebar-box'>
                    <div className='welcome-logo-container'>
                        <img className='welcome-logo' src='./images/logo.png' alt='Instagram Logo'></img>
                    </div>
                   
                   <LogInForm signInWithGoogle={props.signInWithGoogle} loginAsGuest={props.loginAsGuest}>
                   </LogInForm>
                   <div onClick={props.loginAsGuest}>Continue as Guest</div>
                </div>

                <div className='welcome-sidebar-box2'>
                    <p>Don't have an account? <span className='welcome-signup'>Sign Up</span></p>
                </div>

            </div>
        </div>
    )
   
}