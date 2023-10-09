//----------------------------------------------------------------------
//Process Data from ticket page

const data = location.search.replaceAll('+',' ').replaceAll('%2C',',').replaceAll('%3A',':')
.replaceAll('?','').replaceAll('SendCinemadata=','').replaceAll('SendMoviedata=','')
.replaceAll('SendHousedata=','').replaceAll('SendDatedata=','').replaceAll('SendSeatdata=','')
.split('&');

const MovieLocationData = data[0];
const MovieData = data[1];
const HouseData = data[2];
const DateData = data[3];
const SeatData = data[4].split('**').sort();
const SeatDataLength = SeatData.length;

//----------------------------------------------------------------------
//Show each ticket

for(let j = 0 ; j < SeatDataLength; j++) {
    const code = 
    `
    <div class="Ticket_information">
    <label for="Cinema">Cinema: </label> 
    <input type="text" id="Cinema${j}" name="SelectedCinema${j}" value="${MovieLocationData}" readonly><br>
    <label for="Movie">Movie: </label>
    <input type="text" id="Movie${j}" name="SelectedMovie${j}" value="${MovieData}" readonly><br>
    <label for="DateTime">Date Time: </label>
    <input type="text" id="DateTime${j}" name="SelectedDateTime${j}" value="${DateData}" readonly><br>
    <label for="HouseNo">House No: </label>
    <input type="text" id="HouseNo${j}" name="SelectedHouseNo${j}" value="${HouseData}" readonly><br>
    <label for="Seat">Seat: </label>
    <input type="text" id="Seat${j}" name="SelectedSeat${j}" value="${SeatData[j]}" readonly><br><br>
    </div>
    `
    document.getElementById('print').innerHTML += code;
}