export default class CustomError {
    message;
    statusCode;
    statusText;

    constructor(statusCode, statusText, message) {
        this.statusCode = statusCode
        this.statusText = statusText
        this.message = message
    }
}