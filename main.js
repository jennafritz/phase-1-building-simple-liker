// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.querySelectorAll(".like-glyph")
let errorDiv = document.querySelector("#modal")
let errorP = document.querySelector("#modal-message")

for (const heart of hearts) {
  heart.addEventListener("click", function(){
    if (heart.innerText === FULL_HEART){
      heart.innerText = EMPTY_HEART
      heart.classList.remove("activated-heart")
    } else if (heart.innerText === EMPTY_HEART){
      mimicServerCall()
      .then(() => {
        heart.innerText = FULL_HEART
        heart.className = "activated-heart"
      })
      .catch((error) => {
        errorDiv.className = ""
        errorP.innerText = error
        setTimeout(function(){
          errorDiv.className = "hidden"
        }, 3000)
      })
    }
  })
}

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
