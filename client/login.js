console.log('heyyyyy Michael');
// create element(div,header,p,image,etc)
let divTag = document.createElement('div');
divTag.innerText = 'How YOU doin, Michael?';
document.body.appendChild(divTag);


// create variable to store search for Form to add an onClick listener --> fetch request to back-end
let searchForForm = document.querySelector('form');
searchForForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // searches for form with access to whatever input fields are inside of it by calling it by it's name and looking up the value
  let username = searchForForm.username.value;
  let password = searchForForm.password.value;

  fetch('/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'Application/json',
    },
    body: JSON.stringify({ username, password }),
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.user) {
      //not best practice? but fucking works
      // localStorage.setItem('user',JSON.stringify(data.user))
      window.location.href = '/main.html';
    } else {
      alert(data.error);
    }
  })
  //just in case there is an error with the fetch request/parsing goes wrong or something, catch will handle that error
  .catch((err) => console.log('ERROR: ', err));
});
console.log('ILL BE DAMNED IF I FIND ANOTHER CHICK IN YOUR ARMS');


/**
 * ---------------------------------- NOTES ----------------------------------------
 */
// Step 1: Create HTML file to contain any static tags
// Step 2: Look for HTML tags
// Step 3: Fetch request ==> route (controller/query) ==> database
// innerHTML will check for element and render it appropriate with the text inside
// divTag.innerHTML = '<h1>Hi</h1>';
// innerText just takes and displays the whole string
// divTag.innerText = '<h1>Hi</h1>';

