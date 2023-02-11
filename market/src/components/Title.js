import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    height: 36px;
    margin: 0px 10px 40px 10px;
    display: flex;
    justify-content: space-between;
`;

const Image = styled.img`
    max-height: 100%;
`;

const IconWrapper = styled.div`
    position: relative;
`;

const Icon = styled.img`
    max-height: 100%;
    margin-left: 40px;

    &:hover {
        cursor: pointer;
    }
`;

const Title = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Image src={require(`../assets/images/title_gradient.png`)}/>
            <IconWrapper>
                <Icon src={require(`../assets/images/info_16px.png`)}/>
                <Icon src={require(`../assets/images/ether_16px.png`)}/>
                <Icon src={require(`../assets/images/mail_16px.png`)}/>
                <Icon onClick={() => navigate('/cart')} src={require(`../assets/images/cart_16px.png`)}/>
            </IconWrapper>
        </Container>
    );
};

export default Title;