import '../LogInForm/LogInForm.css'

export default function LogInForm(){
    return(
        <form>
            <div className='login-input-containers'>
                <input className='login-input' placeholder='Phone number, username or email' type='text'></input>
                <input className='login-input' placeholder='Password' type='text'></input>
            </div>

            <button className='login-submit' type='submit'>Log In</button>
        </form>
    )
}