  // Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal");

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM CONTENT HAS LOADED");
  errorModal.classList.add("hidden");
  
  // CALL FIND LIKES
  clickListener();
});
  function findLikes(){
    const likeArr = document.querySelectorAll(".like-glyph")

    likeArr.forEach((singularLike) => {
      singularLike.addEventListener("click", () => console.log("YOU FOUND ME! LIKE!"))
    })
  }
function hideError() {
  errorModal.classList.add("hidden")
}

function clickListener(){
  document.addEventListener('click', (event) => {
    // if i click on the heart then console.log("YOU FOUND ME! LIKE!") otherwise, do nothing

    if(event.target.classList[0] === "like-glyph") {
    // console.log("YOU FOUND ME! LIKE!")
    //PROMISE!! ASYNC WE NEED A .THEN

      mimicServerCall()
      .then((resp) => { 
        const activated = event.target.classList.contains("activated-heart");
        if (activated) {
          event.target.classList.remove("activate-heart");
          event.target.innerHTML = EMPTY_HEART;
        } else {
          event.target.classList.add("activated-heart");
          event.target.innerHTML = FULL_HEART;
        }

        activated;
      }) // .300 ms
      .catch((error) => {
        errorModal.remove("hidden");
        setTimeout(() => {
          hideError();
        }, 3000);
      });  
    }
  });   
}


 // PROMISE FAILS, .catch -> catches it
//  When a user clicks on an empty heart: Invoke `mimicServerCall` to simulate making a server request

// NEED AN EVENT LISTENER ON ALL OF THE HEARTS

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
