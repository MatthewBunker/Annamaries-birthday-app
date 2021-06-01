import styled from 'styled-components/macro';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const Reasons = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Container id="Reasons">
            <Title>Reasons I love You</Title>
        </Container>
    );
};

const Container = styled.div`
    min-height: 100vh;
    background-color: #1A1A1D; 
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
        visibility: hidden;
    }
    .slick-prev {
        visibility: hidden;
    }
    .slick-next{
        visibility: hidden;
    }
    .slick-arrow{
        visibility: hidden;
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

export default Reasons;