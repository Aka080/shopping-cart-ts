import { formatCurrency } from '../../utilities/formatCurrency'
import styles from './storeItem.module.css'
type ProductInfoProps = {
    productTitle : string,
    productPrice: number


}
export function ProductInfo ({productTitle,productPrice}:ProductInfoProps){
    return <>
    <div className={styles.productInfo}>
        <div>
            {productTitle}
        </div>
        <div>
          {formatCurrency(productPrice)}
        </div>
    </div>
    </>
} 