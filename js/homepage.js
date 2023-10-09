//----------------------------------------------------------------------

let nowShowingMovies = [];
let upComingMovies = [];
let MoviesList = [];

//----------------------------------------------------------------------
getMovies().forEach((movie) => {
    const code = `<dd> 
    <p>Name: ${movie.name}</p>
    <img onclick="SwitchVideo(${movie.id})"  
    src="../images/${movie.thumbnail}" 
    alt="not found" data-id=${movie.id} 
    data-type=${movie.type}> 
    </img>
    <div>
    <p>Cast: ${movie.cast}</p>
    <p>Director: ${movie.director}</p>
    <p>Duration: ${movie.duration} mins</p>
    </div>
    </dd>`;
    if(movie.type == "now" ) {
        nowShowingMovies.push(movie);
        NowShowingMovies.innerHTML += code;
    } 
    else if(movie.type == "upcoming" ) {
        upComingMovies.push(movie);
        UpComingMovies.innerHTML += code;
    }
});

MoviesList = nowShowingMovies.concat(upComingMovies);

//----------------------------------------------------------------------

var i = 0;

//var vid = document.getElementById("myVideo");

function GetVideo(i) { // Get the video information and html elements
    Video.innerHTML = `
    <p>Movie Trailer: ${MoviesList[i].name}</p>
    <video id='myVideo' controls autoplay onended="setTimeout( function(){PlayVideo(${i+1})} ,2000)">
    <source src="https://courses.cs.cityu.edu.hk/cs2204/video/${MoviesList[i].src}.mp4" type="video/mp4">
    <source src="https://courses.cs.cityu.edu.hk/cs2204/example/video/${MoviesList[i].src}.ogg" type="video/ogg">
    Your browser does not support the video tag.
    </video>`;
}

function PlayVideo(i) {
    if(i == MoviesList.length) { // If the last video is ended, MoviesList will return back the first video
        i = 0;
    }
    GetVideo(i);
}

const play = PlayVideo(i); //play the first video

function SwitchVideo(GetVideoId) { // Get specific video 
    let get = 0;
    for(var k = 0; k < MoviesList.length; k++) {
        if(MoviesList[k].id == GetVideoId) {
            get = k;
        }
    }
    PlayVideo(get);
}