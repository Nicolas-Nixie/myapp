import styles from "../styles/Banner.module.css"
import logo from "../assets/logo.png"

function Banner() {
    //const title = "La maison Jungle";
    return (
    <div className={styles.lmjbanner}>
        <h1>La maison Jungle</h1>
        <img src={logo} alt="la maison de la jungle" className={styles.logo}/>
    </div>
    ) //{ title.toUpperCase }
}

export default Banner;