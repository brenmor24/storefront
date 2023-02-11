import { useState } from 'react';
import styled from 'styled-components';

import Shipping from '../components/Shipping';
import Summary from '../components/Summary';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const SectionWrapper = styled.div`
    margin: 10px 40px;
    flex: 0 0 360px;
`;

const Title = styled.div`
    font-family: "Courier New", Courier, Monaco;
    text-align: center;
    font-size: 24px;
    padding-bottom: 6px;
`;

const Charge = styled.p`
    font-family: "Courier New", Courier, Monaco;
    margin: 6px 0px;
    font-size: 14px;
    font-weight: ${props => props.bold ? "700" : "300"};
    display: flex;
`;

const Text = styled.span`
    flex-grow: ${props => props.first ? 1 : 0};
`;

const CheckoutButton = styled.button`
    height: 50px;
    width: 100%;
    border: none;
    background-none;
    background-color: black;
    color: white;
    border-radius: 0px;
    font-family: "Courier New", Courier, Monaco;
    font-size: 24px;
    margin-top: 10px;

    &:hover {
        cursor: pointer;
    }
`;

const Instructions = styled.div`
    margin-top: 20px;
    font-family: "Courier New", Courier, Monaco;
    font-size: 12px;
`;

const Form = styled.form`
    position: relative;
`;

const Checkout = () => {
    const [state, setState] = useState({
        first: "", last: "", email: "", phone: "", addr1: "",
        addr2: "", city: "", state: "", zip: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        (async () => {
            try {
                const response = await fetch('');

            } catch (error) {
                console.error('error submitting order', error);
            }
        })();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Container>
                <SectionWrapper>
                    <Title>Shipping Info</Title>
                    <Shipping checkoutState={state} updateCheckout={setState}/>
                </SectionWrapper>
                <SectionWrapper>
                    <Title>Order Summary</Title>
                    <Summary />
                    <Charge><Text first>Cart Subtotal</Text><Text>0.01 ETH</Text></Charge>
                    <Charge><Text first>Order ID Charge</Text><Text>0.01 ETH</Text></Charge>
                    <Charge bold><Text first>Total</Text><Text>0.02 ETH</Text></Charge>
                    <CheckoutButton type="submit">PLACE ORDER</CheckoutButton>
                    <Instructions>* Please direct funds to the address specified within five minutes upon placing your order.</Instructions>
                </SectionWrapper>
            </Container>
        </Form>
    );
};

export default Checkout;