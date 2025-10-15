import express from "express";
import { claculateHypotenuse } from "../controllers/traingle.controller.js";

const route = express.Router();

route.post("/", claculateHypotenuse);


export default route;