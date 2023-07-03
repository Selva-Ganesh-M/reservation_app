// import express from "express";
import dotenv from "dotenv"
dotenv.config();


export const PORT = process.env.PORT;
export const DB_PASS = process.env.DB_PASS;
export const MONGO_URL = process.env.MONGO_URL;