import styled from 'styled-components';

const Header = (props) => {
    return (
        <Container>
            <Content>
                {/* <Name><img src="./Images/logo.png"/></Name> */}
                <ButtonsDiv>
                    <Button><span>HOME</span></Button>
                    <Button><span>REASONS</span></Button>
                    <Button><span>PICTURES</span></Button>
                    <Button><span>VIDEOS</span></Button>
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
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    width: 75%;
    justify-content: space-between;
    //max-width: 600px;
    
    a{
        color: white;
        letter-spacing: 1.5px;
        margin-right: 15px;

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

// const Name = styled.a`
//     font-family: 'Allan';
//     color: rgb(212,175,55);
//     padding: 15px;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     overlfow: hidden;

//     img{
//         height: 50px;
//         width 50px;
//     }
    
// `;

const ButtonsDiv = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
`;

const Button = styled.a`

`;



export default Header;