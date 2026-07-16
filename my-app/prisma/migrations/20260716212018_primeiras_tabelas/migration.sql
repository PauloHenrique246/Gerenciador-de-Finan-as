-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Curso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `modalidade` ENUM('REGULAR', 'DIGITAL') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `cursoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlanoFinanceiro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantidadeParcelas` INTEGER NOT NULL,
    `alunoId` INTEGER NOT NULL,
    `categoria` ENUM('PARCELA', 'MATRICULA') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Parcelas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataVencimento` DATETIME(3) NOT NULL,
    `dataPagamento` DATETIME(3) NULL,
    `valor` DECIMAL(65, 30) NOT NULL,
    `descontosOuJuros` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `cancelada` BOOLEAN NOT NULL DEFAULT false,
    `planoFinanceiroId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlanoFinanceiro` ADD CONSTRAINT `PlanoFinanceiro_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Parcelas` ADD CONSTRAINT `Parcelas_planoFinanceiroId_fkey` FOREIGN KEY (`planoFinanceiroId`) REFERENCES `PlanoFinanceiro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
