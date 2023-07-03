export const customReqLogger = async (req, res, next) => {
    const date = new Date();
    console.log({
        method: req.method,
        url: req.url,
        time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    });
    next();
}

