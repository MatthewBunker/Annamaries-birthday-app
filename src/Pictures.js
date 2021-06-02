import styled from 'styled-components/macro';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const Pictures = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Container id="Pictures">
            <Title>Pictures</Title>
            <Carousel>
                <Slider {...settings}>
                    <Wrapper>
                        <h3>Passionate</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>2</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>3</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>4</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>5</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>6</h3>
                    </Wrapper>
                </Slider>
            </Carousel>
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

const Carousel = styled(Slider)`
    //border: 1px solid blue;
    padding: 50x 0 0 0;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        &:hover {
            opacity: 1;
            transition: opacity .2s ease 0s;
        }
    }
    ul li button {
        &:before {
            font-size: 10px;
            color: black;
        }
    }
    li.slick-active button:before {
        color: black !important;
    }
    .slick-list {
        overflow: initial;
    }
    .slick-prev {
        left: 300px;
    }
    .slick-next{
        right: 750px;
    }
`;

const Wrapper = styled.div`
    //border: 1px solid green;
    height: 100%;
    
`;


export default Pictures;