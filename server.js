import express from "express";
import dotenv from "dotenv";
import teoriasdefilmesRoutes from "./src/routes/teoriasdefilmesRoutes.js";

const app = express();

app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Servidor funcionando...");
});

app.use("/teoriasdefilmes", teoriasdefilmesRoutes);

app.listen(serverPort, () => {
    console.log(` O servidor está rodando em: http://localhost:${serverPort}`);
})