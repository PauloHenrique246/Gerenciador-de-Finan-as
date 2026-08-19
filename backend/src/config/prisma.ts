import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client.js";
import dotenv from "dotenv";

dotenv.config();

const adapter = new PrismaMariaDb(`${process.env.DATABASE_URL}`); // Cria um objeto que se conecta ao DB através da url definida no arquivo .env
const prisma = new PrismaClient({ adapter });

async function testConnectionWithMariaDB() { // Verifica a conexão com o banco de dados MariaDB/MySQL
    try{
        await prisma.$connect();
        console.log("Conexão com o banco de dados estabelecida com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
    } finally {
        await prisma.$disconnect();
    }
};

testConnectionWithMariaDB();

export default prisma;