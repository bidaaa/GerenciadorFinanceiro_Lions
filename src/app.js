import express from 'express';
import cors from 'cors';
import router from './routes.js'; // Importa nossas rotas

const app = express();

// --- Configurações (Middlewares) ---
app.use(cors());          // Libera acesso externo
app.use(express.json());  // Permite ler JSON no body

// --- Rotas ---
app.use(router);

// Exporta o app configurado, mas sem rodar ainda
export default app