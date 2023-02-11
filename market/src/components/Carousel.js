import { useState } from 'react';
import styled from 'styled-components';

const Arrow = styled.button`
    border: none;
    background: none;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 2px;

    left: ${props => props.left ? "4px" : "auto"};
    right: ${props => props.right ? "4px" : "auto"};

    font-size: 32px;
    width: 40px;
    height: 40px;
    color: black;
    background-color: rgba(255,255,255,0);

    &:hover {
        cursor: pointer;
    }
`;

const Container = styled.div`
    position: relative;
    width: 400px;
    height: 600px;
`;

const Close = styled.button`
    position: absolute;
    background: none;
    border: none;
    border-radius: 2px;

    font-size: 32px;
    color: black;
    background-color: rgba(255,255,255,0);
    top: 5px;
    right: 5px;

    width: 40px;
    height: 40px;

    &:hover {
        cursor: pointer;
    }
`;

const Dots = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5px;

    &:hover {
        cursor: default;
    }
`;

const Dot = styled.span`
    height: 8px;
    width: 8px;
    background-color: ${props => props.selected ? "black" : "white"};
    border-radius: 50%;
    display: inline-block;
    border: 1px solid black;
    margin: 0px 4px;

    &:hover {
        cursor: pointer;
    }
`;

const Image = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
`;

const Carousel = ({ gallery, toggleModal }) => {
    const [image, setImage] = useState(0);
    const size = gallery.length;

    return (
        <Container>
            <Arrow left onClick={() => setImage((image + size - 1) % size)}>&#8592;</Arrow>
            <Arrow right onClick={() => setImage((image + size + 1) % size)}>&#8594;</Arrow>
            <Close onClick={() => toggleModal(false)}>&#10005;</Close>
            <Image src={require(`../assets/images/product-images/${gallery[image]}`)}/>
            <Dots>
                {gallery.map((_, index) => 
                    <Dot key={index} onClick={() => setImage(index)} selected={(index === image)}/>
                )}
            </Dots>
        </Container>
    );
};

export default Carousel;