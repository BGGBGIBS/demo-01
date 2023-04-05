import style from './product-list.module.css'
import Products from '../../data/products/product.json'
const ProductList = () => {
    return (
      <div className={style.productList}>
        <h1>Products</h1>
        <ul className={style.productList}>
          {Products.map(product => (
            <li key={product.id} className={style.product}>
              <div className={style.productImageContainer}>
                <img src={product.image} alt={product.name} className={style.productImage} />
                {product.promo && (
                  <div className={style.productPromo}>
                    <i className={style.productPromo}>PROMO</i>
                  </div>
                )}
              </div>
              <div className={style.productInfo}>
                <h3 className={style.productName}>{product.name}</h3>
                <p className={style.productPrice}>${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  
  export default ProductList;