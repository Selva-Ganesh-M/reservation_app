import { pushLogToBook } from "../utils/pushLogToBook.js"


export const customLogMaintainer = async (req, res, next) => {
    const message = `${req.method}\t${req.path}\t${req.headers.origin}`
    await pushLogToBook(message, "reqLogs.log")
    return next();
}