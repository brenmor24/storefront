import { useState } from 'react';
import styled from 'styled-components';

import Modal from './Modal';

const Container = styled.div`
    margin: 0px 10px 10px 10px;
`;

const Label = styled.div`
    font-family: "Courier New", Courier, Monaco;
    font-size: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    color: white;
    display: none;
`;

const Image = styled.img`
    max-width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
`;

const Price = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    color: black;
    background-color: white;
    border: 2px solid black;
    border-radius: 2px;
    font-weight: 700;
    font-size: 14px;
    font-family: "Courier New", Courier, Monaco;
    padding: 1px 3px 0px 2px;
`;

const Selected = styled.img`
    position: absolute;
    top: 8px;
    left: 8px;
    max-height: 20px;
`;

const Wrapper = styled.div`
    border-radius: 2px;
    border: 2px solid black;
    position: relative;
    width: 216px;
    height: 306px;
    margin-bottom: 4px;

    &:hover {
        cursor: pointer;
        background-color: black;
    }

    &:hover ${Label} {
        display: block;
    }

    &:hover ${Image} {
        display: none;
    }

    &:hover ${Price} {
        display: none;
    }

    &:hover ${Selected} {
        display: none;
    }
`;

const Descriptor = styled.p`
    font-family: "Courier New", Courier, Monaco;
    font-size: 12px;
    font-weight: ${props => props.itemlabel ? 700 : 400};
    margin: 0px 0px 0px 4px;
`;

const Product = ({ product, toggleItem, added }) => {
    const [modalState, setModalState] = useState(false);

    return (
        <Container>
            <Modal isOpen={modalState} toggleModal={setModalState} gallery={product.gallery} toggleItem={toggleItem} added={added} id={product.product_id}/>
            <Wrapper onClick={() => setModalState(true)}>
                <Label>VIEW</Label>
                {added ? <Selected src={require("../assets/images/bag.png")}/> : null}
                <Price>{product.price} ETH</Price>
                <Image src={require(`../assets/images/product-images/${product.primary_image}`)}/>
            </Wrapper>
            <Descriptor itemlabel>{product.descriptor}</Descriptor>
            <Descriptor subtext>{product.subtext}</Descriptor>
        </Container>
    );
};

export default Product;