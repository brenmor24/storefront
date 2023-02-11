import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    border: 1px solid black;
    width: 360px;
    display: flex;
    border-radius: 2px;
    margin-bottom: 10px;
    margin-left: 40px;
`;

const ImageWrapper = styled.div`
    position: relative;
    height: 80px;
    flex: 0 0 80px;
    border-right: 1px solid black;
`;

const Image = styled.img`
    position: absolute;
    max-width: 86%;
    max-height: 86%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const Details = styled.div`
    flex: 1 0 auto;
    padding-top: 4px;
`;

const Detail = styled.p`
    font-family: "Courier New", Courier, Monaco;
    font-size: 12px;
    margin: 2px 6px;
    font-weight: ${props => props.bold ? "700" : "300"};
    display: flex;
    align-items: center;
`;

const Text = styled.span`
    flex-grow: 1;
`;

const Price = styled.span`
    background-color: black;
    color: white;
    border-radius: 2px;
    padding: 1px 3px 0px 2px;
`;

const Remove = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    font-weight: 300;
    width: 40px;
    position: absolute;
    left: -40px;
    height: 100%;

    &:hover {
        cursor: pointer;
    }
`;

const CartEntry = ({ image, price, descriptor, subtext, id, toggleItem }) => {
    return (
        <Container>
            <Remove onClick={() => toggleItem(0, id)}>&#10005;</Remove>
            <ImageWrapper>
                <Image src={require(`../assets/images/product-images/${image}`)}/>
            </ImageWrapper>
            <Details>
                <Detail bold>
                    <Text>{descriptor}</Text>
                    <Price>{price} ETH</Price>
                </Detail>
                <Detail><Text>{subtext}</Text></Detail>
            </Details>
        </Container>
    );
};

export default CartEntry;