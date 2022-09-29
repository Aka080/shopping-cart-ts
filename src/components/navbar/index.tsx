import { NavLinks } from './NavLinks'
import styles from './navbar.module.css'
import { CartButton } from './CartButton'

export function NavBar () {
    return(
        <div className={styles.navbarContainer} >
        <NavLinks/>
        <CartButton/>
        
        </div>
    )
}