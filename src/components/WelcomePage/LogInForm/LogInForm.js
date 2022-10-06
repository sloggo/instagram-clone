import '../LogInForm/LogInForm.css'

export default function LogInForm(){
    return(
        <>
            <form>
                <div className='login-input-containers'>
                    <input className='login-input' placeholder='Phone number, username or email' type='text'></input>
                    <input className='login-input' placeholder='Password' type='text'></input>
                </div>

                <button className='login-submit' type='submit'>Log In</button>
            </form>

            <p className='login-or-container'><span className='login-or'>OR</span></p>

            <div className='login-with-google-container'>
                <img className='login-with-google-logo' src='./images/googlelogo.png'></img>
                <p>Log In with Google</p>
            </div>

            <p className='login-forgot'>Forgot Password?</p>
        </>
        
    )
}