import styled from "styled-components";

const BlueDiv = styled.div`
    background-color: blue
    `

const Image = styled.img`
    width: 100px;
    height: 100px;
    `

const ProductDetail = ({product}) => {

    const {pno,pname,price,imgFile} = product

    return ( 
        <li>
            <BlueDiv>PNO {pno}</BlueDiv>
            <div>NAME {pname}</div>
            <div>{price}</div>
            <div><Image src={require(`../../img/${imgFile}`)}/></div>
            <button>BUY</button>
        </li>
     );
}
 
export default ProductDetail;