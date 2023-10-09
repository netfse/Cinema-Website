//----------------------------------------------------------------------

let movies=getMovies();
let cinemas=getCinemas();
let cinemaslist = {};

//----------------------------------------------------------------------
// Create a cinema list( cinemaslist ) for each cinema with it's information
// The data is generated according to the testdata

function getMovieName(movieArray, id) {  
    for (let i=0; i<movieArray.length; i++) {
        if (movieArray[i].id == id) return movieArray[i].name;
    }
    return undefined;
}

function getMovieindexdatetimehouse(i,j) { 
    let temp = {}, temp1 =[];
    for (let k=0; k<cinemas[i].movies[j].shows.length; k++) { 
        temp = {
            index : cinemas[i].movies[j].shows[k].index,
            datetime : cinemas[i].movies[j].shows[k].datetime,
            house : cinemas[i].movies[j].shows[k].house
        };
        temp1.push(temp);
    }
    return temp1;
}

function getMovieIdandshow(i) { 
    let temp = {}, temp1 =[];
    for (let j=0; j<cinemas[i].movies.length; j++) { 
        temp = {
            id : cinemas[i].movies[j].id,
            show : getMovieindexdatetimehouse(i,j)
        }
        temp1.push(temp);
    }
    return temp1;
}

for (let i=0; i<cinemas.length; i++) {
    cinemaslist[i] = {
        branchName : cinemas[i].branchName,
        movies : getMovieIdandshow(i)
    }
} 

//----------------------------------------------------------------------

getCinemas().forEach((cinema) => {
    const code = `<option value="${cinema.branchName}">
    ${cinema.branchName}</option>`;
    Select_Cinema.innerHTML += code;
});

function getMovieName(movies, id) { 
    for(let k = 0 ; k < getMovies().length; k++) {
        if(movies[k].id == id){
            return movies[k].name;
        }
    }
    return undefined;    
}

function getMovieThumbnail(movies, id) {
    for(let k = 0 ; k < getMovies().length; k++) {
        if(movies[k].id == id){
            return movies[k].thumbnail;
        }
    }
    return undefined;
}

function getMovieValue(movies, id) {
    for(let k = 0 ; k < getMovies().length; k++) {
        if(movies[k].id == id){
            return movies[k].name;
        }
    }
    return undefined;    
}

function GenerateMovieOptions(getshow) {
    let temp = ``;
    for(let i = 0; i < getshow.length; i++) {
        const code = 
        `<option value="${getshow[i].index}">${getshow[i].datetime}, House ${getshow[i].house}</option>`;
        temp += code;
    }
    return temp;
}

//----------------------------------------------------------------------

function GetFormForEachCinema(value) {
    let index = 0; //show how many movies
    let indexofvalue = 0; //show the index of value

    for(let i = 0; i < Object.keys(cinemaslist).length; i++) {
        if(cinemaslist[i].branchName == value){
            index = cinemaslist[i].movies.length;
            indexofvalue = i;
        }
    }

    EachMovie.innerHTML = null; // clear previous movielist //${getMovieThumbnail(cinemaslist)}

    for(let i = 0; i < index; i++) { 
        const code = 
                `
                <form action="Ticketpage.html" method="get" class="ListofMoviesforthatcinema">
                <select id="Cinema" name="MovieLocationData" style="display: none">
                <option value="${cinemaslist[indexofvalue].branchName}"></option></select>
                <img src="../images/${getMovieThumbnail(movies, cinemaslist[indexofvalue].movies[i].id)} " alt="not found">
                <div class="inline-block">
                <input type="text" id="SelectedMovie" name="MovieData" value="${getMovieValue(movies, cinemaslist[indexofvalue].movies[i].id)}" readonly>
                <br>
                <select id="Select_Day" name="IndexData">
                ${GenerateMovieOptions(cinemaslist[indexofvalue].movies[i].show)}
                </select>
                </div>
                <button type="submit">Buy Ticket</button></form>
                `
                EachMovie.innerHTML += code; // create new movielist
    }  
}

function GetValuefromSelectedCinema() {
    let value = document.getElementById("Select_Cinema").value;
    GetFormForEachCinema(value);
} 

const getvalue = GetValuefromSelectedCinema(); // Create a new form 

