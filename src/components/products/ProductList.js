import ProductDetail from "./ProductDetail";

const ProductList = () => {

    const products = [
        {pno:1, pname:'상품1', price:3000, imgFile:'copy.jpg'},
        {pno:2, pname:'상품2', price:5000, imgFile:'m2.jpg'},
        {pno:3, pname:'상품3', price:7000, imgFile:'m3.jpg'},
        {pno:4, pname:'상품4', price:9000, imgFile:'m4.jpg'},
        {pno:5, pname:'상품5', price:8000, imgFile:'test.jpg'}
      ]

    return ( 
        <ul className="productList">
            {products.map( p =>
                 <ProductDetail key={p.pno} product={p}/>)}
        </ul>
     );
}
 
export default ProductList;