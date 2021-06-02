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
            <Title>25 Reasons I love You</Title>
            <Carousel>
                <Slider {...settings}>
                    <Wrapper>
                        <h3>Adventorous</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Asks Me Questions About My Day</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Athletic</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Beautiful</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Caring</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Great Family</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Great Tv Show Choices</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Hardworking</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Kind</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Likes To Play Board Games</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Loves Everybody</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Loves Marvel</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Loves Me Unconditionally</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Loves To Cuddle</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Makes Me A Better Man</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Open-Minded</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Passionate</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Right Amount Of Country And City</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Selfless</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Shows Characteristics Of A Godly Woman</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Strong Faith</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Takes Initiative In My Life</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Unique</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Wants To Travel</h3>
                    </Wrapper>
                    <Wrapper>
                        <h3>Willing To Spend The Rest Of Her Life With Me</h3>
                    </Wrapper>
                </Slider>
            </Carousel>
        </Container>
    );
};

const Container = styled.div`
    min-height: 100vh;
    background-color: #A239CA;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    text-align: center;
    padding: 50x 0 0 0;
    color: white;
    font-size: 5rem;

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
            color: rgb(150,158, 171);
        }
    }
    li.slick-active button:before {
        color: white !important;
    }
    .slick-list {
        overflow: initial;
    }
    .slick-prev {
        left: 75px;
    }
    .slick-next{
        right: 75px;
    }
`;

const Wrapper = styled.div`
    //border: 1px solid green;
    height: 100%;
    font-size: 50px;
    
`;

export default Reasons;