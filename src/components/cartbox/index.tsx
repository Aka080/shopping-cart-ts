import { BackDrop } from './BackDrop'
import styles from './cartbox.module.css'
import { CartBoxItems } from './CartBoxItems'
import { SliderDrawer } from './SliderDrawer'
type CartBoxProps = {
    isOpen : boolean
}

export function CartBox () {
    return (<div>
        
         <SliderDrawer>
            <CartBoxItems/>
         </SliderDrawer>
         <BackDrop/>
        </div>)
}