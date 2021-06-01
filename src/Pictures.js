import styled from 'styled-components/macro';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const Pictures = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Container id="Pictures">
            <Title>Pictures</Title>
            <Carousel {...settings}>
                <Wrapper>
                    <a>
                        <img src="/Images/IMG_0304.jpg" alt="badging"/>
                    </a>
                </Wrapper>
                <Wrapper>
                    <a>
                        <img src="/Images/IMG_0371.jpg" alt="badag" />
                    </a>
                </Wrapper>
                <Wrapper>
                    <a>
                        <img src="/Images/IMG_1653.jpg" alt="scale" />
                    </a>
                </Wrapper>
                <Wrapper>
                    <a>
                        <img src="/Images/IMG_1521.jpg" alt="scales" />
                    </a>
                </Wrapper>
            </Carousel>
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

const Carousel = styled(Slider)`
    //border: 5px solid green;
    height: 60vh;
    width: 30%;

    & > button {
        display: none;
    }
    ul li button {
       display: none;
    }
    li.slick-active button:before {
        color: white !important;
    }
    .slick-list {
        overflow: initial;
    }
    .slick-prev {
        display: none;
    }
    .slick-next{
        display: none;
    }
    .slick-arrow{
        display: none;
    }
`;

const Wrapper = styled.div`
    height: 60vh;
    width: 50%;
    img{
        width: 100%;
        height: 100%;
    }
    &:hover {
        padding: 0;
        border: 4px solid rgba( 249, 249, 249, .8);
        transition-duration: 300ms;
    }
    //border: 5px solid blue;
`;


export default Pictures;