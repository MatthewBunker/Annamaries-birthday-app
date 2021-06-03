import styled from 'styled-components/macro';

const Header = (props) => {
    return (
        <Container>
            <Content>
                {/* <Name><img src="./Images/logo.png"/></Name> */}
                <ButtonsDiv>
                    <Button href="#Home"><span>HOME</span></Button>
                    <Button href="#Reasons"><span>REASONS</span></Button>
                    <Button href="#Pictures"><span>PICTURES</span></Button>
                    <Button href="#DatePlanner"><span>BIRTHDAY DATE PICKER</span></Button>
                </ButtonsDiv>
            </Content>
        </Container>
    );
};

const Container = styled.nav`
    background: rgba(0, 0, 0, .6);
    height: 72px;
    z-index: 3;
    position: fixed;
    width: 100vw;
    display: flex;
    justify-content: center;

    @media (max-width: 650px){
        height: 150px;
    }
`;

const Content = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    width: 75%;
    justify-content: space-between;
    
    a{
        color: white;
        letter-spacing: 1.5px;
        margin-right: 15px;
        cursor: pointer;

        span{
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            white-space: nowrap;
            position: relative;
            &:before {
                background-color: rgb(191, 87, 0);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: right left;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }
        &:hover{
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
`;

const ButtonsDiv = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;

    @media (max-width: 650px){
        flex-direction: column;
        margin: 10px 0 10px 0;
    }
`;

const Button = styled.a`
    @media (max-width: 650px){
        margin-bottom: 10px;
    }
`;

export default Header;