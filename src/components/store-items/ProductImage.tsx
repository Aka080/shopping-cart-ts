import styles from './storeItem.module.css'
type ProductImageProps = {
    imageLink: string,
    itemDescription: string
}
export function ProductImage ({imageLink,itemDescription}:ProductImageProps){

    return <>
    <div>
    <img src = {imageLink} className = {styles.productImages} alt={itemDescription}/>
    </div>
     
    </>
}
