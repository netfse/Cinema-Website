//----------------------------------------------------------------------
//Data recieved from the form

function GetDataFromIndex(Index,DataType) { // get data from index
    for(let i = 0 ; i < getCinemas().length;i++){
        for(let j = 0 ; j < getCinemas()[i].movies.length;j++) {
            for(let k = 0 ; k < getCinemas()[i].movies[j].shows.length;k++) {
                if(getCinemas()[i].movies[j].shows[k].index == Index && DataType =='Date') {
                    return getCinemas()[i].movies[j].shows[k].datetime; //return datetime data
                } 

                else if(getCinemas()[i].movies[j].shows[k].index == Index && DataType =='House') {
                    return getCinemas()[i].movies[j].shows[k].house; //return house data
                }
            }
        }
    }
    return undefined;
}

const Data = location.search.replaceAll('-','').replaceAll('+',' ')
.replaceAll('?','').replaceAll('MovieLocationData=','')
.replaceAll('MovieData=','').replaceAll('IndexData=','')
.replaceAll('KowloonTong','').replaceAll('Mong Kok','')
.replaceAll('Sha Tin','').split('&');

console.log(Data.length);
const MovieLocationData = Data[0];
const MovieData = Data[1];
const DateData = GetDataFromIndex(Data[2],'Date');
const HouseData = GetDataFromIndex(Data[2],'House');

//----------------------------------------------------------------------
//Information 

if(location.search != '') {
    document.getElementById('showingcinema').innerHTML = `Cinema - ${MovieLocationData}`;
    document.getElementById('movie').innerHTML = `Movie - ${MovieData}`;
    document.getElementById('datetime').innerHTML = `Datetime - ${DateData}`;
    document.getElementById('house').innerHTML = `House - ${HouseData}`;
}

//----------------------------------------------------------------------
//SeatTable 

let SelectedSeatList = [];


function GetSeat(SeatId) {
    if(location.search[0] != '') {
        document.getElementById(SeatId).style = 'pointer-events:none; background-color:#f3971b;'
        document.querySelector('.displayselectedseat').innerHTML += SeatId+', ';
        SelectedSeatList.push(SeatId);
    }
    else {
        alert('please select cinema and movies');
    }
}


//----------------------------------------------------------------------
//Reset 

function ClearSelectedSeats() {
    document.querySelector('.displayselectedseat').innerHTML = null;
    SelectedSeatList.forEach(
        (seat)=>{
            document.getElementById(seat).style.removeProperty('pointer-events');
            document.getElementById(seat).style.removeProperty('background');
        }
    );
    SelectedSeatList = [];
}

//----------------------------------------------------------------------
//Validate form and Send data

function ValidateForm() {
    if (location.search == '') {
        alert("Please select a cinema and movie from now showing page");
        return false;
    }

    if(SelectedSeatList[0] == undefined) {
        alert("Please select a seat");
        return false;
    }

    document.getElementById('SendCinemadata').value = MovieLocationData;
    document.getElementById('SendMoviedata').value = MovieData;
    document.getElementById('SendDatedata').value = DateData;
    document.getElementById('SendHousedata').value = HouseData;
    for(let j = 0; j < SelectedSeatList.length; j++ ) {
        if(j == SelectedSeatList.length - 1){
            document.getElementById('SendSeatdata').value +=  SelectedSeatList[j];
        } else {
                    document.getElementById('SendSeatdata').value =
        document.getElementById('SendSeatdata').value +  SelectedSeatList[j] + '**';
        }
    }
}











