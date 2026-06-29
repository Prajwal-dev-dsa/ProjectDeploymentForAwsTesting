import express from "express"
import dotenv from "dotenv"

dotenv.config();

const PORT = process.env.PORT || 8000

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World! Now you are seeing the changes after cicd integration!");
});

app.get("/check", (req, res) => {
    res.send("Server is running! CICD is working!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
