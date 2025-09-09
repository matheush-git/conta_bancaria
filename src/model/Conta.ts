
export class Conta {
    numero: number;
    titular: string;
    saldo: number;

    constructor(numero: number, titular: string, saldo: number = 0) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }


    depositar(valor: number): void {
        if (valor <= 0) {
            console.log("Valor inválido para depósito!");
            return;
        }
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!`);
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            console.log("Valor inválido para saque!");
            return;
        }
        if (valor > this.saldo) {
            console.log("Saldo insuficiente!");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`);
    }

    visualizar(): void {
        console.log("----------------------------");
        console.log(`Número: ${this.numero}`);
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
        console.log("----------------------------");
    }
}
