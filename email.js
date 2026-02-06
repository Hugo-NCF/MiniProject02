//document.getElementById("email1").value;
const subscribe = document.getElementById("subscribe");




function validateEmail(email) {
    const emailregex=  /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //ensures a dot after the @ sign and that a @ sign is included


    if(email == ""|| !emailregex.test(email)) {
        alert("Please enter valid email") ;
        return false;
    }else{
        alert("subscription was successfull!");
        return true;
    }

}
subscribe.addEventListener("click", function (event) {
    const emailvalue =document.getElementById("email1").value;
    console.log(emailvalue);
    validateEmail(emailvalue);
})