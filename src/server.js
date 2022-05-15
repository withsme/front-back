import api from "./api";

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors({
    exposedHeaders: ['authorization'],
}));

app.use("/api", api);
app.listen(PORT, () => console.log(`${PORT} 포트에서 서버 작동!!`));