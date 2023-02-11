import styled from 'styled-components';

import Product from './Product';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Products = ({ category, products, toggleItem, cart }) => {
    function refine(arr) {
        return arr.filter((item) =>
            ((item.category === category) || category === "all")
        );
    }

    return (
        <Container>
            {refine(products).map((item, idx) => 
                <Product key={idx} product={item} toggleItem={toggleItem} added={cart.has(item.product_id)}/>
            )}
        </Container>
    );
};

export default Products;