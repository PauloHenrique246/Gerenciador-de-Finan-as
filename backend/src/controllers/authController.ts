import prisma from '../config/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response} from 'express';

dotenv.config();

export async function loginController(req: Request, res: Response) {
    try{
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: {email: email}}); // Recebe apenas o email do usuário para que compare com o banco de dados
        if(!user){
            res.status(400).json({ message: 'Usuário não encontrado, verifique os dados informados!' });
            return;
        };

        // Verifica se a senha condiz com obanco só depois de validar se o email existe, a fim de evitar buscas desnecessárias no banco de dados
        const passowordValid = bcrypt.compareSync(password, user.password_hash); // Compara a senha informada com a senha do banco de dados que está em hash
        if(passowordValid === false){
            res.status(400).json({ message: 'Usuário não encontrado, verifique os dados informados!' });
            return;
        };

        const jwtSecret = process.env.JWT_SECRET;
        if(!jwtSecret){
            throw new Error('A variável de ambiente JWT_SECRET não está definida!'); // Usamos o throw para lançar um erro e interromper a execução do programa
        };

        const token = jwt.sign(email, jwtSecret, {expiresIn: '1h'}); // Token com base no email que expira em 1 hora
        res.status(200).json({status: "sucess", message: "Login bem sucedido!", token});

    } catch (error) {
        console.error('Erro ao realizar login:', error);
        res.status(500).json({ message: 'Erro interno do servidor, tente novamente mais tarde!' });
    };
};
