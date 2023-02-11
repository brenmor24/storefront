import styled from 'styled-components';

const Label = styled.div`
    position: absolute;
    bottom: 4px;
    left: ${props => props.left ? "0px" : "auto"};
    right: ${props => props.right ? "2px" : "auto"};
    z-index: 2;
    font-weight: 700;
`;

const Options = styled.div`
    display: none;
    position: absolute;
    top: -8px;
    background-color: white;
    border: 2px solid black;
    width: 116px;
    left: -10px;
    z-index: 1;
    padding: 30px 0px 4px 0px;
    border-radius: 2px;
`;

const Option = styled.div`
    margin: 0px 6px 2px 6px;
    padding: 3px 0px 2px 4px;
    border-radius: 2px;

    &:hover {
        cursor: pointer;
        color: white;
        background-color: black;
        font-weight: 700;
    }
`;

const Container = styled.div`
    position: relative;
    font-family: "Courier New", Courier, Monaco;
    font-size: 12px;
    width: 100px;
    height: 20px;
    border-bottom: 2px solid black;
    margin: 0px 24px 10px 10px;

    &:hover ${Options} {
        display: block;
    }
`;

const Filter = ({ constraint, options }) => {
    return (
        <Container>
            <Label left >{constraint}</Label>
            <Label right>▽</Label>
            <Options>
                {options.map((item, idx) => <Option key={idx}>{item}</Option>)}
            </Options>
        </Container>
    );
};

export default Filter;