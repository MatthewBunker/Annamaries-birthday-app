import styled from 'styled-components/macro';



const HappyBirthday = (props) => {

    return (
        <Container id="Home">
            <Content>
                <CTA>
                    <Words>
                        <Text>Annamarie's 21st Birthday</Text>
                        <Text2>Determined | Selfless | Kind</Text2>
                    </Words>
                    <Picture src="./Images/IMG-5697.JPG" />
                </CTA>
            </Content>
            <BGImage />
        </Container>
    );
};

const Container = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    //border: 1px solid green;
`;

const Content = styled.div`
    margin-top: 72px;
    width: 100%;
    position: relative;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center; //makes content horizontally centered
    align-items: center; //makes content vertically centered
    flex-direction: column;
    height: 100%;
    //border: 1px solid white;

    @media (max-width: 650px){
        margin-top: 90px;
    }
`;

const CTA = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
    //border: 1px solid black;

    @media (max-width: 800px){
        flex-direction: column;
    }
`;

const Words = styled.div`
    display: flex;
    flex-direction: column;
    //border: 1px solid blue;
    align-items: center;
    padding-right: 50px;
    width: 50vw;

    @media(max-width: 800px){
        padding: 20px 0 20px 0;
    }
`;

const Text = styled.h1`
    color: white;
    font-size: 60px;
    //border-left: 1px solid white;
    //border-right: 1px solid white;
    //border-radius: 70px 15px;
    background-color: rgba(0,0,0, .8);
    box-shadow: #1A1A1D 0px 3px 5px 1px;
    padding: 15px;

    @media (max-width: 768px){
        font-size: 40px;
    }
`;

const Text2 = styled.h1`
    color: white;
    font-size: 20px;
    padding: 15px;
    //border-left: 1px solid white;
    //border-right: 1px solid white;
    //border-radius: 5px 25px;
    background-color: rgba(0,0,0, .8);
    box-shadow: #1A1A1D 0px 3px 5px 1px;
`;

const Picture = styled.img`
    width: 360px;
    height: 540px;
    border-radius: 50px 5px;
    box-shadow: #1A1A1D 0px 3px 5px 1px;

    @media(max-width:800px){
        height: 400px;
        width: 264px;
        margin-bottom: 15px;
    }
`;

const BGImage = styled.div`
    height: 100vh;
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;

     //background: linear-gradient(#FFFFFF, rgb(191, 87, 0));
     background: linear-gradient(#F79E02,white, white);
    // background-image: url(./Images/adam-birkett-75EFpyXu3Wg-unsplash.jpg);
    // background-color: #424242;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;

    @media(max-width:800px){
        height: calc( 100vh + 475px);
    }
`;

export default HappyBirthday;