import styled from 'styled-components/macro';

const Pictures = (props) => {
    return (
        <Container id="Pictures">
            <Title>Pictures</Title>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    background-color: white; 
`;

const Title = styled.h1`
    color: #1A1A1D;
    display: flex;
    justify-content: center;
    padding-top: 102px;
    margin-top: 0px;

    @media (max-width: 650px){
        padding-top: 170px;
    }
`;

export default Pictures;