import '../publishing/login/style.css';

export default function(){
    return(
        <div>
            <title>SWT - Login</title>
            <a href='#'>
                <h1 className='logo'>SWT</h1>
            </a>
            <form className='form-group' action='#' method='get'>
                <div className='input-group'>
                    <label form='email'><input id='email' name='emailid' type='email' placeholder='E-mail'></input></label>
                    <label form='password'><input id='password' name='passid' type='text' placeholder='Password'></input></label>
                </div>
                <p className='forgot'>
                    <a href='#'>Forgot E-MAIL</a>
                    <a href='#'>PASSWORD</a>
                </p>
                <button type='submit'>Sign Up</button>
            </form>
            <div className='join'>
                <a>
                    <p>Join</p>
                </a>
            </div>
            <div className='footer'>
                <p>FROM UC.SWT</p>
            </div>
        </div>
    );
}