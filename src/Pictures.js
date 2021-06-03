import styled from 'styled-components/macro';

const Pictures = (props) => {

    return (
        <Container id="Pictures">
            <Title>Pictures</Title>
            <PictureDiv>
                <Wrap>
                    <img src="./Images/IMG_0024.jpg" style={{objectPosition: "top"}}/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_0115.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_0291.jpg" style={{objectPosition: "top"}}/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_0305.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_0371.jpg" />
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_0381.jpg" />
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_0875.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_1082.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_1234.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_1350.jpg" style={{objectPosition: "top"}}/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_1521.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_1636.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_1653.jpg" style={{objectPosition: "top"}}/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_1771.jpg" style={{objectPosition: "top"}}/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_3136.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_3707.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="./Images/RenderedImage.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_0195.jpg" style={{objectPosition: "top"}}/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_0201.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="./Images/IMG_4039.jpg"/>
                </Wrap>
            </PictureDiv>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    background-color: #F172A1; 
`;

const Title = styled.h1`
    color: white;
    display: flex;
    justify-content: center;
    padding-top: 102px;
    margin-top: 0px;

    @media (max-width: 650px){
        padding-top: 170px;
    }
`;

const PictureDiv = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding-bottom: 20px;
    @media (max-width: 768px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb( 0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;
    border: 3px solid rgba(249, 249, 249, .1);

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out;
        width: 100%;
        z-index: 1;
        top: 0;
        object-position: center;
    }
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb( 0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color rgba(249, 249, 249, 0.8);
    }
`;

export default Pictures;