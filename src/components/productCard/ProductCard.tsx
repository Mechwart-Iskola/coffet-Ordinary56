import { Product } from "../../types/types"
import "./productcard.css"
type ProductCardProps = {
	product: Product
}
const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div className="products__card">
			<div className="products__shape">
				<img className="products__image"
					src={product.image} />
			</div>
			<div className="products__data">
				<h2 className="products__name">{product.name}</h2>
				<p className="products__price">{product.price}</p>
			</div>
		</div>

	)
}
export default ProductCard
