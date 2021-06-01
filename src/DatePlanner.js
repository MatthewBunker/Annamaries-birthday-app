import styled from 'styled-components/macro';
// import $ from 'jquery';

const DatePlanner = (props) => {
    function sendItenerary(){
        
        var iteneraryConfirmationText = "Scroll Below For Your Itenerary."
        var iteneraryConfirmationDiv = document.getElementById("iteneraryMessage");
        
        iteneraryConfirmationDiv.style = "text-align: center;"

        iteneraryConfirmationDiv.innerHTML = "";
        iteneraryConfirmationDiv.innerHTML = iteneraryConfirmationText;

        var iteneraryTitle = document.getElementById("iteneraryTitle");
        iteneraryTitle.style.margin = "15px";
        iteneraryTitle.innerHTML = "Annamarie's 21st Birthday Itenerary";

        var iteneraryText = document.getElementById("iteneraryText");

        var Location = document.getElementById("location").value;
        var Date = document.getElementById("date").value;
        var Time = document.getElementById("time").value;
        var funActivity = document.getElementById("funActivity").value;
        var sunsetSpot = document.getElementById("sunsetSpot").value;
        var restaurantLocation = document.getElementById("restaurantLocation").value;
        var drinkChoice = document.getElementById("drinkChoice").value;
        var movieChoice = document.getElementById("movieChoice").value;

        iteneraryText.innerHTML = "Location: " + Location + "<br>" +
                                  "Date: " + Date + "<br>" + 
                                  "Time: " + Time + "<br>" +
                                  "Fun Activity: " + funActivity + "<br>" +
                                  "Sunset Spot: " + sunsetSpot + "<br>" +
                                  "Restaurant Location: " + restaurantLocation + "<br>" +
                                  "Drink Choice: " + drinkChoice + "<br>" +
                                  "Movie Choice: " + movieChoice + "<br>";
        
        var submitButton = document.getElementById("submitButton");
        submitButton.disabled = true;
        

        // $.ajax({
        //     type: 'POST',
        //     url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        //     data: {
        //       'key': 'f4fd772ca573d975b8dd26d7ee018a08-us6',
        //       'message': {
        //         'from_itenerary': 'matthewscottbunker@gmail.com',
        //         'to': [
        //             {
        //               'itenerary': 'matthewscottbunker@gmail.com',
        //               'name': '',
        //               'type': 'to'
        //             }
        //           ],
        //         'autotext': 'true',
        //         'subject': 'Test itenerary',
        //         'html': 'Congrats you did it'
        //       }
        //     }
        //    }).done(function(response) {
        //      console.log(response); // if you're into that sorta thing
        // });
    }

    return (
        <Container id="DatePlanner">
            <Title>Perfect Date Planner</Title>
            <ConfirmationMessage id="iteneraryMessage"></ConfirmationMessage>
            <Paragraph>
                <h3>Happy Birthday, Annamarie! This is your perfect all expense paid for 21st birthday date!
                    Like any date we must select a location. Please select one here: 
                    <select id="location">
                        <option>Austin</option>
                        <option>Cstat</option>
                        <option>Tomball</option>
                        <option>Other</option>
                    </select>
                    . We must next select a date to make it official. Select one here:
                    <input type="date" id="date" />
                    . Finally, so that you don't flake on me, please select a time here: 
                    <input type="time" id="time" />
                    . Now that we have it scheduled, let's plan some fun things to do. Type a fun activity to do here: 
                    <input type="text" placeholder="Fun activity..." id="funActivity" />
                    . Since you have a weird obsession with the sunset I figured we could go some where to watch it. Type your
                    favorite sunset spot here: 
                    <input type="text" placeholder="Sunset spot..." id="sunsetSpot" />
                    . Next we are sure to get hungry during our activites so we should probably go eat somewhere. Type where
                    you want to go eat (I know this is hard for you): 
                    <input type="text" placeholder="Restaurant Location..." id="restaurantLocation" />
                    . Since you are turning 21 its a MUST that I by you a drink. So let me know what you want here:
                    <input type="text" placeholder="Drink Choice..." id="drinkChoice" />
                    . Finally, to wrap up this amazing date we should end the date with a great movie. What would you like to watch?:
                    <input type="text" placeholder="Movie Choice..." id="movieChoice" />. <br/> 
                </h3>
                <input type="submit" id="submitButton" onClick={sendItenerary}/>
            </Paragraph>
            <Itenerary>
                <IteneraryTitle id="iteneraryTitle"></IteneraryTitle>
                <IteneraryText id="iteneraryText"></IteneraryText>
            </Itenerary>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    padding-bottom: 30px;
    background-color: #9CC0E7;
    display: flex;
    flex-direction: column;
    align-items: center;

    // @media (max-width: 99vw;){
    //     height: 100px;
    //     padding-bottom: 30px;
    // }
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

const ConfirmationMessage = styled.h3`
    margin: 0px;
    color: white;
    display: flex;
    justify-content: center;
`;

const Paragraph = styled.div`
    color: black;
    margin: 30px;
    background-color: #FAEACB;
    border-radius: 50px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        padding: 15px 15px 0 15px;
        line-height: 3rem;
        margin: 0;
    }

    h3 > select{
        margin-left: 10px;
        margin-right: 5px;
        padding: 5px;
        border-radius: 4px;
        font-size: 20px;
        background-color: #F7DBD7;
        color: #424242;
        border: 2px solid #424242;

        &:hover{
            transform: scale(1.05);
        }

        &:focus{
            border: 5px solid #424242;
            box-shadow: rgb(0 0 0 / 80%) 0px 30px 48px -16px, rgb( 0 0 0 / 72%) 0px 30px 22px -10px; 
            transform: scale(1.05);
        }
    }

    h3 > input{
        margin-left: 10px;
        margin-right: 5px;
        padding: 5px;
        border-radius: 4px;
        font-size: 20px;
        background-color: #F7DBD7;
        color: #424242;
        border: 2px solid #424242;

        &:hover{
            transform: scale(1.05);
        }

        &:focus{
            border: 5px solid #424242;
            box-shadow: rgb(0 0 0 / 80%) 0px 30px 48px -16px, rgb( 0 0 0 / 72%) 0px 30px 22px -10px; 
            transform: scale(1.05);
        }

        ::placeholder{
            color: #424242;
            opacity: .6;
        }
    }

    input[type=submit]{
        border-radius: 4px;
        padding: 5px;
        margin: 15px;
        background-color: white;
        color: #F7DBD7;
        font-size: 20px;

        &:hover{
            transform: scale(1.05); 
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            color: white;
            background-color: #F7DBD7;
        }
    }
`;

const Itenerary = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    margin: 30px;
    background-color: #FAEACB;
    border-radius: 50px 15px;
    width: 75%;
`;

const IteneraryTitle = styled.h1`
    text-align: center;
    margin: 0;
    font-size: 60px;
`;

const IteneraryText = styled.h3`
    //color: white;
    text-align: center;
    margin: 0 30px 0 30px;
    line-height: 3rem;
    font-size: 30px;
`;

export default DatePlanner;