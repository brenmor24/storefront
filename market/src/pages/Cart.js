import styled from 'styled-components';

import CartEntry from '../components/CartEntry';

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-right: 40px;
`;

const Title = styled.div`
    font-family: "Courier New", Courier, Monaco;
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
    margin-left: 40px;
`;

const ItemsContainer = styled.div`
    height: 430px;
    position: relative;
    overflow-y: scroll;
    margin-bottom: 40px;
`;

const Charge = styled.p`
    font-family: "Courier New", Courier, Monaco;
    margin: 6px 0px;
    font-size: 14px;
    font-weight: ${props => props.bold ? "700" : "300"};
    display: flex;
    margin-left: 40px;
`;

const Text = styled.span`
    flex-grow: ${props => props.first ? 1 : 0};
`;

const Checkout = styled.button`
    height: 50px;
    width: 362px;
    border: none;
    background-none;
    background-color: black;
    color: white;
    font-family: "Courier New", Courier, Monaco;
    font-size: 24px;
    margin-top: 20px;
    margin-left: 40px;

    &:hover {
        cursor: pointer;
    }
`;

const Fade = styled.div`
    position: sticky;
    bottom: -4px;
    display: block;
    width: 100%;
    height: 60px;
  
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), 
        rgba(255, 255, 255, 1) 100%);
`;

const Empty = styled.div`
    width: 360px;
    border: 1px dotted black;
    text-align: center;
    align-items: center;
    font-family: "Courier New", Courier, Monaco;
    font-size: 14px;
    margin-left: 40px;
`;

const Cart = ({ toggleItem, entries }) => {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <ItemsContainer>
                {entries.map(item => <CartEntry 
                    image={item.primary_image} 
                    price={item.price} 
                    descriptor={item.descriptor} 
                    subtext={item.subtext} 
                    id={item.product_id} 
                    toggleItem={toggleItem}
                />)}
                {entries.length ? null : <Empty>NONE</Empty>}
                <Fade/>
            </ItemsContainer>
            <Charge><Text first>Cart Subtotal</Text><Text>0.01 ETH</Text></Charge>
            <Charge><Text first>Order ID Charge</Text><Text>0.01 ETH</Text></Charge>
            <Charge bold><Text first>Estimated Total</Text><Text>0.02 ETH</Text></Charge>
            <Checkout>CHECKOUT</Checkout>
        </Container>
    );
};

export default Cart;