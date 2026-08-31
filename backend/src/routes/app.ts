import express from 'express';
import cors from 'cors';
import { login } from "../controllers/authController";
import { createUser, deleteUser, updateUser } from '../controllers/userController';
import { authMiddleware } from "../middlewares/authMiddleware";

const app = express();

// O CORS é obrigatório para permitir que o frontend (na porta 3000) acesse o backend, no caso contrário, o navegador bloqueia a requisição por questões de segurança
app.use(cors({
  origin: 'http://localhost:3000' // Domínio do frontend (subistituir pelo domínio do frontend em produção depois)
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'A api está rodando!' });
});

app.post('/login', login); // Rota para logar

app.post('/register', authMiddleware, createUser); // Rota para criar um usuário no banco
app.put('/register', authMiddleware, updateUser); // Rota para atualizar um usuário no banco
app.delete('/register', authMiddleware, deleteUser); // Rota para apagar um usuário no banco

export default app;
