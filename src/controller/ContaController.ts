import { Conta } from "../model/Conta";

export class ContaController {
    private contas: Conta[] = [];

    cadastrar(conta: Conta): void {
        this.contas.push(conta);
        console.log(`Conta do titular ${conta.titular} cadastrada com sucesso!`);
    }

    listarTodas(): void {
        if (this.contas.length === 0) {
            console.log("Não há contas cadastradas.");
            return;
        }
        console.log("Lista de todas as contas:");
        this.contas.forEach(conta => conta.visualizar());
    }

    procurarPorNumero(numero: number): Conta | undefined {
        return this.contas.find(conta => conta.numero === numero);
    }

    atualizar(contaAtualizada: Conta): void {
        const index = this.contas.findIndex(c => c.numero === contaAtualizada.numero);
        if (index !== -1) {
            this.contas[index] = contaAtualizada;
            console.log(`Conta número ${contaAtualizada.numero} atualizada com sucesso!`);
        } else {
            console.log("Conta não encontrada.");
        }
    }

    deletar(numero: number): void {
        const index = this.contas.findIndex(c => c.numero === numero);
        if (index !== -1) {
            const titular = this.contas[index]! .titular;
            this.contas.splice(index, 1);
            console.log(`Conta do titular ${titular} deletada com sucesso!`);
        } else {
            console.log("Conta não encontrada.");
        }
    }

    sacar(numero: number, valor: number): void {
        const conta = this.procurarPorNumero(numero);
        if (conta) {
            conta.sacar(valor);
        } else {
            console.log("Conta não encontrada para saque.");
        }
    }

    depositar(numero: number, valor: number): void {
        const conta = this.procurarPorNumero(numero);
        if (conta) {
            conta.depositar(valor);
        } else {
            console.log("Conta não encontrada para depósito.");
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const contaOrigem = this.procurarPorNumero(numeroOrigem);
        const contaDestino = this.procurarPorNumero(numeroDestino);

        if (!contaOrigem) {
            console.log("Conta de origem não encontrada.");
            return;
        }
        if (!contaDestino) {
            console.log("Conta de destino não encontrada.");
            return;
        }

        if (contaOrigem.saldo >= valor) {
            contaOrigem.sacar(valor);
            contaDestino.depositar(valor);
            console.log("Transferência realizada com sucesso!");
        } else {
            console.log("Saldo insuficiente para transferência.");
        }
    }
}
