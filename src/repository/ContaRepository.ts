import { Conta } from "../model/Conta";

export interface ContaRepository {
    criar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;
    listar(): Conta[];
    buscarPorNumero(numero: number): Conta | undefined;
}
