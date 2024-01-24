import classes from './Footer.module.css'

export default function Footer() {
    return (
        <footer>
            <p className={classes.leftFooter}>Made possible in collaboration with <a href='https://swapi.dev/'>SWAPI</a></p>
            <p className={classes.rightFooter}>made by <a href="https://notocarproductions.com">NoTocarProductions</a></p>
        </footer>
    )
}