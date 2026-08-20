export interface UserInterface{
    id?: number;
    name: string;
    email: string;
    password_hash: string;
    password: string
};

export interface CursoInterface{
    id: number;
    nome: string;
    modalidade: string;
    aluno: string;
}

export interface AlunoInterface{
    id: number;
    nome: string;
    telefone: string;
    cursoId: number;
    curso: string;
    planoFinanceiro: string;
}

export interface PlanoFinanInterface{
    id: number;
    quantidadeParcelas: string;
    alunoId: number;
    aluno: string;
    categoria: string;
    parcelas: string;
}

export interface ParcelasInterface{
    id: number;
    dataVencimento: string;
    dataPagamento: string;
    valor: number;
    descontosOuJuros: number;
    cancelada: boolean;
    planoFinanceiroId: number;
    planoFinanceiro: string;
}