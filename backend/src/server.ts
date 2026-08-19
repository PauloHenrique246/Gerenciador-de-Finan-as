import app from './routes/app';
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Backend rodando na porta ${process.env.PORT} 🚀`);
});