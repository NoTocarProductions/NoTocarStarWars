import classes from './LoginButton.module.css'

export default function LoginButton() {

    return (
        <button className={classes.loginButton}>Login <span>&#8594;</span></button>
    )
}