let userInput: unknown;
let Nevername: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string'){
    Nevername = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError('An Error Occured', 500);