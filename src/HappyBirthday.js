import styled from 'styled-components';



const HappyBirthday = (props) => {

    return (
        <Container>
            <Content>
                <Text>Happy 21st Birthday Annamarie</Text>
                <Text2>Determined | selfless | Kind</Text2>
                <img src="https://img.icons8.com/flat-round/64/000000/expand-arrow--v1.png"/>
                <BGImage />
            </Content>
        </Container>
    );
};

const Container = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    width: 100vw;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center; //makes content horizontally centered
    align-items: center; //makes content vertically centered
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const Text = styled.h1`
    color: rgb(191, 87, 0);
    margin: 30vh 0 0 0;
    font-size: 75px;
`;

const Text2 = styled.h1`
    color: white;
    font-size: 30px;
    padding-bottom: 30px;
`;

// const Arrow = styled.i`

// `;

const BGImage = styled.div`
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("./Images/IMG_1521.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

export default HappyBirthday;