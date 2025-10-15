import express from "express";
import { calculateInterest } from "../controllers/interest.controller.js";
const route = express.Router();

route.post("/", calculateInterest);


export default route;