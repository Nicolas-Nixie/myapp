import React from "react"
import styles from "../styles/Cart.module.css"

function Cart() {
    <h2>Panier</h2>
    const plante1 = {
        name: "monstera",
        price: 8,
        devise: "€"
    }

    const plante2 = {
        name: "lierre",
        price: 10,
        devise: "€"
    }

    const plante3 = {
        name: "bouquet",
        price: 15,
        devise: "€"
    }

    return (
        <div>
            <h1 className={styles.panier}>Mon Panier</h1>
            <ul>
                <li>{plante1.name + " son prix est de " + plante1.price + plante1.devise}</li>
                <li>{plante2.name + " son prix est de " + plante2.price + plante2.devise}</li>
                <li>{plante3.name + " son prix est de " + plante3.price + plante3.devise}</li>
            </ul>
            <p>{"la somme de votre panier est de : " + (plante1.price + plante2.price + plante3.price) + plante1.devise }</p>
        </div>
    ) ;
}

export default Cart;