//console.log ("U mad dumb bro"));
//if (true) {
    //console.log("U");
    //uExists = true;
//} 
//if (uExists) {
    //console.log("mad");
//}



let uWasLogged = false;
function logMessage(message) {
    console.log(message);
    if (message === "U") {
        uWasLogged = true;
    }
}
logMessage("U");

if (uWasLogged) {
    console.log("mad dumb bro");
}








