import CustomError from "../utils/customError.js"

export const getHealth = async (req, res, next) => {
    res.status(200).json("Reservation app server is healthy.")
}

export const helpRedirect = async (req, res, next) => {
    res.redirect("/pages/redirect/redirect.html")
    // res.status(200).sendFile("/pages/redirect/redirect.html")
}