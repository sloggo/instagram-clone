import '../WelcomePage/WelcomePage.css'
import LogInForm from './LogInForm/LogInForm'

export default function WelcomePage(){
    return(
        <div className='welcome-content-container'>
            <img className='welcome-image' src='./images/welcomeimage.png'></img>

            <div className='welcome-sidebar'>

                <div className='welcome-sidebar-box'>
                    <div className='welcome-logo-container'>
                        <img className='welcome-logo' src='./images/logo.png'></img>
                    </div>
                   
                   <LogInForm>
                   </LogInForm>
                </div>

            </div>
        </div>
    )
   
}