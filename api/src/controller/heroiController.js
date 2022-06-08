import { inserirHeroi } from "../repository/heroiRepository.js";

import { Router } from "express";
import { con } from "../repository/connection.js";

const server =  Router();

server.post('/heroi' , async (req, resp) => {
    try{
        const novoHeroi = req.body;

        const heroiInserido = await inserirHeroi(novoHeroi);

        resp.send(heroiInserido);
    }  catch (err) {
        resp.send(400).send({
            erro: err.message
        })
    }
})

export default server;