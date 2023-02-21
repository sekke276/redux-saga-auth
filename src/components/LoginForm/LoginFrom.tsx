import { Container } from "@mantine/core";
import styles from './styles.module.css';

const LoginForm = () =>{
    return(
        <div>
            <div className={styles.box}>
                <h1>Login</h1>
                <div>
                    <div>
                        <p>Username</p>
                        <input/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input/>
                    </div>
                    <a>Forgot Password?</a>

                    <button>Login</button>

                </div>
            </div>
        </div>
    )
}

export default LoginForm;