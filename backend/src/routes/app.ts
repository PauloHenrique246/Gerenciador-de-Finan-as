import express from 'express';
import cors from 'cors';

const app = express();

// O CORS é obrigatório para permitir que o frontend (na porta 3000) acesse o backend, no caso contrário, o navegador bloqueia a requisição por questões de segurança
app.use(cors({
  origin: 'http://localhost:3000/' // Domínio do frontend (subistituir pelo domínio do frontend em produção depois)
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'A api está rodando!' });
});

export default app;