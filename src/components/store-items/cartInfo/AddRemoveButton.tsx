import { useStoreDetails } from '../../../context'
import{useState} from 'react'
import styles from './cartInfo.module.css'
type AddRemoveButtonProps = {
    id: number
}
export function AddRemoveButton ({id}:AddRemoveButtonProps){
    const {getItemQuantity,removeItem} = useStoreDetails()

    return <>
    <div className={styles.addRemoveContainer}>
    {
        getItemQuantity(id)? <button onClick={()=>removeItem(id)}> Red</button> : <button>Add</button>
    }
    
    </div>
  
    </>
}