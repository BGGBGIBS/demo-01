import Products from '../../data/products/product.json'
const ProductList = () => {
    return (
      <>
        <h1>Products</h1>
        <ul className='productList'>
          {Products.map(product => (
            <li key={product.id} className='product'>
              <div className='productImageContainer'>
                <img src={product.image} alt={product.name} className='productImage' />
                {product.promo && (
                  <div className='productPromo'>
                    <i className='productPromo'>PROMO</i>
                  </div>
                )}
              </div>
              <div className='productInfo'>
                <h3 className='productName'>{product.name}</h3>
                <p className='productPrice'>${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  
  export default ProductList;