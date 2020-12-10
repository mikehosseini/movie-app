const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a7e57cb63bb601a072aac4703302f6dc"
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=a7e57cb63bb601a072aac4703302f6dc&query="

const search = document.getElementById("search");
const main = document.getElementById("main");
const form = document.getElementById("form");


// initially get fav movies
getMovies(APIURL);

async function getMovies(url) {
    const response = await fetch(url);
    const responseData = await response.json();

    console.log(responseData);

    listMovies(responseData.results);
}

function listMovies(movies) {
    // clear main
    main.innerHTML = "";
  
  // calls a function once for each element in an array, in order:
    movies.forEach((movie) => {
        const { poster_path, title, vote_average, release_date, popularity, original_language, overview, id, genres} = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        
        movieEl.innerHTML = ` 
        
      <a href="https://www.themoviedb.org/movie/${id}" target="_blank">
   
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                    vote_average
                )}">${vote_average}</span>
            </div>
            <div class="release-date">
                  <h3>Release Date:</h3>
                  ${release_date}
            </div>
            <div class="popularity">
                  <h3>Popularity:</h3>
                  ${popularity}
            </div>
            <div class="genre">
                  <h3>Genre:</h3>
                  ${genres}
            </div>
            </div>  
            <div class="originlanguage">
                  <h3>Original Language:</h3>
                  ${original_language}
            </div>                
            <div class="summary">
                <h3>SUMMARY:</h3>
                ${overview}
            </div>
         
           </a>
        `;

        main.appendChild(movieEl);
    });
  
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener("submit", (enterkey) => {
    enterkey.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);

        search.value = "";
    }
});



// ████████╗███████╗░██████╗████████╗██╗███╗░░██╗░██████╗░
// ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝██║████╗░██║██╔════╝░
// ░░░██║░░░█████╗░░╚█████╗░░░░██║░░░██║██╔██╗██║██║░░██╗░
// ░░░██║░░░██╔══╝░░░╚═══██╗░░░██║░░░██║██║╚████║██║░░╚██╗
// ░░░██║░░░███████╗██████╔╝░░░██║░░░██║██║░╚███║╚██████╔╝
// ░░░╚═╝░░░╚══════╝╚═════╝░░░░╚═╝░░░╚═╝╚═╝░░╚══╝░╚═════╝░
//  - kc

// Create nested function for genre > must split the genre ID / genre Name apart using .apply() or something else


//key phrases that helps to research this part "modal"... "iframe"... "modal popup"..."modal iframe"
//links
    //https://ww3w.w3schools.com/html/html_iframe.asp
    //https://www.w3schools.com/howto/howto_css_modals.asp
    //https://sabe.io/tutorials/how-to-create-modal-popup-box
    //https://codepen.io/2kool2/pen/LkaXay


//when switching to electron, we will be using this..
    //https://www.electronjs.org/docs/api/menu
    // scroll down to .popup
    
    //https://www.electronjs.org/docs/api/browser-window
    //modal windows and ready-to-show




//creating modal for popups without sending user to another link - kc

//inside the listfunctions html part

// <button class="trigger">Click here to trigger the modal!</button>
// <div class="modal">
//     <div class="modal-content">
//         <span class="close-button">×</span>
//         <h1>Hello, I am a modal!</h1>
//     </div>
// </div>

//testing popups - kc

// var modal = document.querySelector(".modal");
// var trigger = document.querySelector(".trigger");
// var closeButton = document.querySelector(".close-button");

// function toggleModal() {
//     modal.classList.toggle("show-modal");
// }

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }

// trigger.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);