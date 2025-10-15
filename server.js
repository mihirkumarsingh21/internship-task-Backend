import express from "express";
import dotenv from "dotenv";
import trangleRoute from "./routes/traingle.route.js";
import interestRoute from "./routes/interest.route.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/v1/traingle", trangleRoute);
app.use("/api/v1/interest", interestRoute);



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running at port -> http://localhost:${PORT}`)
})


