import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

declare global {
    namespace Express { // Este bloco de código declara "user" como uma propriedade do método "req: Request".
        interface Request { // Com isso, eu consigo pegar o que foi encriptado no token e mandar para a rota 
            user?: {email: string} 
        }
    }
}

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]; // Esse código usa o split para separar a estrutura básica do token "Bearer <meu_token>", após isso o "[1]" separa somente o token

    if (!token){
        res.status(400).json({message: 'Token não encontrado'});
        return;
    };

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {email: string};
        req.user = decoded;

        next(); // Executa a próxima função se tudo estiver certo
    } catch(error){
        res.status(500).json({message: 'Token inválido ou expirado!'}); // Isso acontece caso o usuário não forneça o token ou tente inserir outro JWT no lugar do que o projeto tem
        return;
    }
};
