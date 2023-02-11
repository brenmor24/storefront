import styled from 'styled-components';

import Filter from './Filter';

 const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4px;
 `;

 const selection = {
    size: ["ALL", "SMALL", "MEDIUM", "LARGE", "XL"],
    condition: ["ALL", "NEW", "PRE-OWNED"],
    fit: ["ALL", "MALE", "FEMALE"],
    color: ["ALL", "BLACK", "WHITE", "RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "PURPLE"]
};

const Filters = () => {
    return (
        <Container>
            <Filter constraint="SIZE" options={selection.size} />
            <Filter constraint="CONDITION" options={selection.condition} />
            <Filter constraint="FIT" options={selection.fit} />
            <Filter constraint="COLOR" options={selection.color} />
        </Container>
    );
};

export default Filters;