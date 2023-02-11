import styled from 'styled-components';

const Container = styled.div`
    width: 360px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
`;

const Wrapper = styled.div`
    flex: 1 1 auto;
    display: flex;
    max-width: 100%;
`;

const Input = styled.input`
    height: 32px;
    flex: 1 1 100%;
    margin: 4px;
    border: 1px solid black;
    border-radius: 2px;
    padding: 0px 6px;
    font-family: "Courier New", Courier, Monaco;
    font-size: 12px;
    min-width: 0px;
`;

const Spacer = styled.div`
    width: 100%;
    height: 60px;
`;

const Shipping = ({checkoutState, updateCheckout}) => {
    return (
        <Container>
            <Wrapper>
                <Input 
                    placeholder="first name" 
                    value={checkoutState.first || ""} 
                    onChange={(e) => updateCheckout(
                        {...checkoutState, first: e.target.value}
                    )}
                />
                <Input placeholder="last name" 
                    value={checkoutState.last || ""} 
                    onChange={(e) => updateCheckout(
                        {...checkoutState, last: e.target.value}
                    )}
                />
            </Wrapper>
            <Input placeholder="email" 
                value={checkoutState.email || ""} 
                onChange={(e) => updateCheckout(
                    {...checkoutState, email: e.target.value}
                )}
            />
            <Input placeholder="phone" 
                value={checkoutState.phone || ""} 
                onChange={(e) => updateCheckout(
                    {...checkoutState, phone: e.target.value}
                )}
            />
            <Spacer />
            <Input placeholder="address line 1" 
                value={checkoutState.addr1 || ""}
                onChange={(e) => updateCheckout(
                    {...checkoutState, addr1: e.target.value}
                )}
            />
            <Input placeholder="address line 2" 
                value={checkoutState.addr2 || ""} 
                onChange={(e) => updateCheckout(
                    {...checkoutState, addr2: e.target.value}
                )}
            />
            <Wrapper>
                <Input placeholder="city"
                    value={checkoutState.city || ""}
                    onChange={(e) => updateCheckout(
                        {...checkoutState, city: e.target.value}
                    )}
                />
                <Input placeholder="state" 
                    value={checkoutState.state || ""} 
                    onChange={(e) => updateCheckout(
                        {...checkoutState, state: e.target.value}
                    )}
                />
                <Input placeholder="zip" 
                    value={checkoutState.zip || ""} 
                    onChange={(e) => updateCheckout(
                        {...checkoutState, zip: e.target.value}
                    )}
                />
            </Wrapper>
        </Container>
    );
};

export default Shipping;