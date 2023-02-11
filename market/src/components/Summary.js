import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid black;
    border-radius: 2px;
    margin: 4px 0px 60px 0px;
`;

const Item = styled.p`
    font-family: "Courier New", Courier, Monaco;
    font-size: 12px;
    display: flex;
    align-items: center;
    margin: 4px 8px;
`;

const Text = styled.span`
    flex-grow: 1;
`;

const Price = styled.span`
    background-color: black;
    color: white;
    border-radius: 2px;
    padding: 1px 3px 0px 2px;
    font-weight: 700;
`;

const Icon = styled.span`
    font-size: 20px;
`;

const Summary = () => {
    return (
        <Container>
            <Item><Icon>★&nbsp;</Icon><Text>Life is Good XL Tee </Text><Price>0.01 ETH</Price></Item>
            <Item><Icon>★&nbsp;</Icon><Text>Life is Good XL Tee </Text><Price>0.01 ETH</Price></Item>
            <Item><Icon>★&nbsp;</Icon><Text>Life is Good XL Tee </Text><Price>0.01 ETH</Price></Item>
            <Item><Icon>★&nbsp;</Icon><Text>Life is Good XL Tee </Text><Price>0.01 ETH</Price></Item>
        </Container>
    );
};

export default Summary;