import styled from 'styled-components';

const Reasons = (props) => {
    return (
        <Container>
            <Content>
                <Title>10 Reasons Why I love You</Title>
            </Content>
        </Container>
    );
};

const Container = styled.div`

`;

const Content = styled.div`
    display:flex;
    justify-content: center;
    background: linear-gradient(to right, rgb(191, 87, 0), white); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Title = styled.h1`

`;

export default Reasons;