import { AddRemoveButton } from "./AddRemoveButton";
import { Quantity } from "./Quantity";
type CartInfoProps = {
    itemId: number
}
export function CartInfo ({itemId}:CartInfoProps){
    return <>
   <Quantity id = {itemId}/>
   <AddRemoveButton id ={itemId}/>
    </>
} 