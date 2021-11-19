
let getInputBox = document.querySelector("#emailbox")
let getNegativeReply = document.querySelector("#mailerror");
let getPositiveReply = document.querySelector("#mailsuccess");
let getErrorIcon = document.querySelector("#error");


let validate = function () {
    let getEmail = document.querySelector("#emailbox").value;
    let emailLength = getEmail.length;
    let dotPos = getEmail.indexOf('.');




    if (getEmail.includes("@") == true && getEmail.includes(".") == true) {
        if (emailLength - dotPos >= 3) {
            getPositiveReply.style.display  = "block";
            setTimeout(myAlert, 0700)
            function myAlert() {
                alert("We have sent a message to your mail");
                alert("Na lie ooo .... lol");
            }
        } else {
            getErrorIcon.style.display = "block";
            getNegativeReply.style.display = "block";

        }
    } else {
        getErrorIcon.style.display = "block";
        getNegativeReply.style.display = "block";
    }

}

let inputEmail = function () {
    getErrorIcon.style.display = "none";
    getNegativeReply.style.display = "none";
    getPositiveReply.style.display  = "none";
}

getInputBox.oninput = inputEmail;








/**
 

 




 */