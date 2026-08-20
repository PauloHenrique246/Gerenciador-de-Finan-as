import app from './routes/app';
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${process.env.PORT} 🚀`);
});
