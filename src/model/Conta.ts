export abstract class Conta {
    constructor(
        public numero: number,
        public titular: string,
        public saldo: number
    ) {}

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de ${valor} realizado. Saldo atual: ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de ${valor} realizado. Saldo atual: ${this.saldo}`);
    }

    visualizar(): void {
        console.log(`Conta: ${this.numero}, Titular: ${this.titular}, Saldo: ${this.saldo}`);
    }
}
