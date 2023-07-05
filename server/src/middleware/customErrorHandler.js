const customErrorHandler = async (err, req, res, next) => {
    console.log("customErrorHandler" + "error: " + `${JSON.stringify(err)}`);
    res.status(err.statusCode).json(err);
}

export default customErrorHandler