import  express  from "express";
import { loginController } from "../controllers/authController";

const router = express.Router();

router.post('/login',loginController); // Colocar o middleware assim que ele estiver pronto
