import './style.css'
import {ReactComponent as BookIcon} from "../../source/book_icon.svg";
export default function(){
    // style="color: #F0F0F0;"
    return(
        <div className='login'>
            <header>
                <a>
                    <i className='book-icon'><BookIcon/></i>
                    <h1 className="logo">SWT</h1>                
                </a>
            </header>
            <main>
                <form className="form-group" action="" method="get">
                <div className="input-group">
                    <label><input id="email" name="emailid" type="email" placeholder="E-mail" required/></label>
                    <label><input id="password" name="passid" type="text" placeholder="Password" required/></label>
                </div>
                <p className="forgot">
                    <a href="">Forgot E-MAIL</a> / <a href="">PASSWORD</a>
                </p>
                <button type="submit">Sign Up</button>
                </form>
                <div className="join">
                <a>
                    <p>Join</p>
                </a>
                </div>    
            </main>  
            <div className="footer">
                <p>FROM UC.SWT</p>
            </div>
        </div>
    );
}