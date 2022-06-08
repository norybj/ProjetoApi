import 'dotenv/config';

import heroiController from './controller/heroiController.js';

import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

server.use(heroiController);
server.listen(process.env.PORT, () => console.log(`API Conectada na Porta ${process.env.PORT}`));