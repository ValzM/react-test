import { Product } from "../../interfaces/AppInterface";

interface Props{
    product: Product
}
export default function ProductCard({product}: Props){
    return(
        <div className="product-card">
            <span>{product.name}</span>
            <span>{product.description}</span>
            <span>{product.price}</span>
        </div>
    )
}