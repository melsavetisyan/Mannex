const form = document.form 
function sendRequest() {
    fetch('https://api-generator.retool.com/G0TfpI/registor')
    .then(response => response.json())
    .then(user => user.filter(user =>user.email === form[0].value))
    .then(response => {
        console.log(response);
        localStorage.setItem('user',JSON.stringify(response[0]))
        if(localStorage.hasOwnProperty('user')) {
            window.location.pathname='/Garage%20figma/html/my_info.html'
        }
    })  
}
form.addEventListener('submit',event => event.preventDefault())
form[2].addEventListener('click',sendRequest)