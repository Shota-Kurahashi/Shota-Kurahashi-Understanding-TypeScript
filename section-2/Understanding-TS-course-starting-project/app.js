var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    // * エラーにならない
    userName = userInput;
}
// userName = userInput; //! Error
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("エラーが発生しました", 500);
