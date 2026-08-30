import prisma from "../config/prisma";
import { Request, Response} from "express";
import bcrypt from "bcryptjs";

export async function createUsers(req: Request, res: Response){
    try{
        const {name, email, password} = req.body;
        
        if(!name || !email || !password){
            res.status(400).json({message: "Os campos não foram preenchidos corretamente!"});
            return;
        };

        const user_existing = await prisma.user.findFirst({where: email});
        if(user_existing){
            res.status(400).json("Este email já está cadastrado no banco!");
            return;
        };

        const password_hash = await bcrypt.hash(password, 10); // Este número depois da senha indica o tanto de vezes que o bcrypt irá criptografar. Quantos maior, mais demorado se torna
        
        const create_user = await prisma.user.create({
            data:{
                name: name as string,
                email: email as string,
                password_hash: password_hash as string 
            }
        });

        res.status(200).json({message: "Usuário criado com sucesso!", create_user});
    } catch(error) {
        res.status(500).json(console.error(`Falha na criação de usuário: `, error));
    };
};
