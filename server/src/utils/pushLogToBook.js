import { format } from "date-fns"
import { v4 as uuid } from "uuid"
import fs from "fs"
import path from "path"
import fsPromises from "fs/promises"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const pushLogToBook = async (message, fileName) => {
    const date = format(new Date(), "yyyy-MM-dd\tHH:mm:ss")
    const data = `${date}\t${uuid()}\t${message}\n`

    if (!fs.existsSync(path.join(__dirname, "..", "..", "serverLog"))) {
        fs.mkdirSync(path.join(__dirname, "..", "..", "serverLog"));
    }

    await fsPromises.appendFile(path.join(__dirname, "..", "..", "serverLog", fileName), data);
    return;
}