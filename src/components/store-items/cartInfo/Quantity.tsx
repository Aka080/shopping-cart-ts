import { useStoreDetails } from '../../../context'
import styles from './cartInfo.module.css'
type QuantiyProps ={
    id:number
}
export function Quantity ({id}:QuantiyProps){
    const {getItemQuantity,increaseQuantity,decreaseQuantity} = useStoreDetails()
    return <>
<div className = {styles.quantity}>
    <button type='button' onClick={() => decreaseQuantity(id)}>-</button>
    <span> {getItemQuantity(id)} </span>
    <button type='button' onClick={() => increaseQuantity(id)}>+</button>
</div>
    
    </>
}