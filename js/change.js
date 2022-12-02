const registor = {
  email:"",
  password:"",
  passwordRepeat:"",
  lastName:"",
  firstName: "",
  middleName:""
}
const form = document.formRegistor;
form[0].addEventListener("change",event=>{   
  if(event.target.value){
    registor.email = event.target.value
  form[0].className = "parmd2_1_input success"
  form[0].nextElementSibling.innerHTML = "";
}else{
  form[0].classList.add("error")
  form[0].nextElementSibling.innerHTML="Mutqagreq email"
}
})
form[1].addEventListener("change",event=>{
  if(event.target.value.match(/^[a-zA-Z0-9\W]{3,30}$/)){
    registor.password = event.target.value;
    form[1].className = "parmd2_1_input success"
    form[1].nextElementSibling.innerHTML = "";
  }else{
    form[1].classList.add("error")
    form[1].nextElementSibling.innerHTML="Petqa sksvi 2 hat mecatar 2 hat tiv 4 hat poqratar 1 simvol u 1 hat cankacac simvol"
  }
})
form[2].addEventListener("change",event=>{
  console.log(registor.password);
  console.log(event.target.value);
  if(registor.password=== event.target.value){
    registor.passwordRepeat = event.target.value;
    form[2].className = "parmd2_1_input success"
    form[2].nextElementSibling.innerHTML = "";
  }else{
    form[2].classList.add("error")
    form[2].nextElementSibling.innerHTML="Krknel password@" 
  }
})
form[3].addEventListener("change",event=>{
  if(event.target.value.match(/^[A-Z]/)){
    registor.lastName = event.target.value;
    form[3].className = "parmd2_1_input success"
    form[3].nextElementSibling.innerHTML = "";
  }else{
    form[3].classList.add("error")
    form[3].nextElementSibling.innerHTML="Last name should contain only letters"
  }
})
form[4].addEventListener("change",event=>{
  if(event.target.value.match(/^[A-Z]/)){
    registor.firstName = event.target.value;
    form[4].className = "parmd2_1_input success"
    form[4].nextElementSibling.innerHTML = "";
  }else{
    form[4].classList.add("error")
    form[4].nextElementSibling.innerHTML="First name should contain only letters"
  }
})
form[5].addEventListener("change",event=>{
  if(event.target.value.match(/^[A-Z]/)){
    registor.middleName = event.target.value;
    form[5].className = "parmd2_1_input success"
    form[5].nextElementSibling.innerHTML = "";
  }else{
    form[5].classList.add("error")
    form[5].nextElementSibling.innerHTML="Mutqagreq middleName"
  }
})
form.addEventListener("submit",e => e.preventDefault());
form.addEventListener("click", function (){
  const id=JSON.parse(localStorage.getItem('user')).id ?? null;
  if(registor?.email && registor?.firstName && registor?.lastName && registor?.middleName && registor?.password){
     fetch(`https://api-generator.retool.com/G0TfpI/registor/${id}`,{   
       method:'PUT',
       headers: {
         "Accept":"application/json",
         "Content-Type":"application/json"
       },
       body: JSON.stringify(registor)
     })
   .then(response =>response.json())
   .then(res => localStorage.setItem('user',JSON.stringify(res)))
   .catch(er => console.error(er))     
  }
 })
 
//  form.addEventListener("submit", (e) => e.preventDefault());
//  form.addEventListener("submit", (e) => e.preventDefault());
//  changetBtn.addEventListener("click", () => {
//    const id = JSON.parse(localStorage.getItem('user')).id ?? null;
//    if (
//      userData?.email &&
//      userData?.firstName &&
//      userData?.lastName &&
//      userData?.midleName &&
//      userData?.password
//    ) {
//      fetch(`https://api-generator.retool.com/G0TfpI/registor/${id}`, {
//        method: "PUT",
//        headers: {
//          Accept: "application/json",
//          "Content-type": "application/json",
//        },
//        body: JSON.stringify(userData),
//      })
//      .then(receivedData => receivedData.json())
//      .then(data => localStorage.setItem('user',JSON.stringify(data)))
//        .then(() => (window.location.pathname = "home%20page/index.html"))
//        .catch((er) => console.error("errorrrr"));
//    }
//  });