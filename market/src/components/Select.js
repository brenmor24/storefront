import styled from 'styled-components';

const Container = styled.div`
    padding: 8px;
`;

const Button = styled.button`
    font-family: "Courier New", Courier, Monaco;
    height: 40px;
    background: none;
    border: none;
    background-color: black;
    color: white;
    font-size: 20px;
    width: 100%;

    &:hover {
        cursor: pointer;
        color: black;
        background-color: white;
        border: 2px solid black;
    }
`;

const Select = ({ toggleItem, toggleModal, added, id }) => {
    return (
        <Container>
            <Button onClick={() => {toggleItem(!added, id); toggleModal(false);}}>
                {added ? "remove from cart" : "add to cart"}
            </Button>
        </Container>
    );
};

export default Select;