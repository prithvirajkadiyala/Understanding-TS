"use strict";
let userInput;
let Nevername;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    Nevername = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error Occured', 500);
