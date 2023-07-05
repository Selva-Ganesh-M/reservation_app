import CustomError from "../utils/customError.js"

export const healthController = async (req, res, next) => {
    res.status(200).json("Reservation app server is healthy.")
}