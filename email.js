document.getElementById("email").value;
const subscribe = document.getElementById("subscribe");

/*function popupWindow() {
    const url='subscription-popup.html';
    const popup = "Popup"
    const param ="width=600px, height=600px,left=200px,top=200px";

 
}*/



function validateEmail(email) {
    const emailregex=  /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //ensures a dot after the @ sign and that a @ sign is included


    if(email === ""|| !emailregex.test(email)) {
        //alert("Please enter valid email") ;
        return false;
    }else{
        //alert("subscription was successfull!");
        return true;
    }

}
subscribe.addEventListener("click", function (event) {
    const emailvalue = document.getElementById("email").value;
    console.log(emailvalue);
    validateEmail(emailvalue);
    const outputElement = document.getElementById("popup-output");
    if (validateEmail(emailvalue)===true) {
        outputElement.textContent = `"${emailvalue}" Subsription was succesful`;
        outputElement.style.color = "green";
    } else {
        outputElement.textContent = `"${emailvalue}" please enter valid email address`;
        outputElement.style.color = "red";
    }
})