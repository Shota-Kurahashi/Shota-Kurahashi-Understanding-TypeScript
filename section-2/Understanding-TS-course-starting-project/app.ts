let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  // * エラーにならない
  userName = userInput;
}

// userName = userInput; //! Error

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("エラーが発生しました", 500);

console.log(result);
