import styled from 'styled-components';

import Title from '../components/Title';
import Filters from '../components/Filters';
import Products from '../components/Products';

const Container = styled.div`
    width: 960px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

const Home = ({ products, toggleItem, cart }) => {
    return (
        <Container>
            <Title />
            <Filters />
            <Products category={"all"} products={products} toggleItem={toggleItem} cart={cart}/>
        </Container>
    );
};

export default Home;