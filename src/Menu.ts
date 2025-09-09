import * as readlineSync from "readline-sync";
import { Colors } from "./util/Colors";
import { Conta } from "./model/Conta";
import { ContaController } from "./controller/ContaController";

export class Menu {
    static main(): void {
        const controller = new ContaController();
        let opcao: number;

        do {
            console.clear();
            console.log(Colors.FgGreen + "***************************************************************************************************" + Colors.Reset);
            console.log(Colors.FgCyan + "                             BANCO DOS BANCOS - O BANCO QUE TEM DINHEIRO                           " + Colors.Reset);
            console.log(Colors.FgGreen + "***************************************************************************************************" + Colors.Reset);
            console.log("");
            console.log("                             1 - Criar conta");
            console.log("                             2 - Listar todas as contas");
            console.log("                             3 - Buscar conta por número");
            console.log("                             4 - Atualizar dados da conta");
            console.log("                             5 - Apagar Conta");
            console.log("                             6 - Sacar");
            console.log("                             7 - Depositar");
            console.log("                             8 - Transferir valores entre contas");
            console.log("                             9 - Sair");
            console.log("");

            opcao = readlineSync.questionInt("Entre com a opção desejada: ");

            switch (opcao) {
                case 1:
                    const numero = readlineSync.questionInt("Número da conta: ");
                    const titular = readlineSync.question("Nome do titular: ");
                    const saldoInicial = readlineSync.questionFloat("Saldo inicial: ");
                    const conta = new (class extends Conta {})(numero, titular, saldoInicial);
                    controller.cadastrar(conta);
                    break;

                case 2:
                    controller.listarTodas();
                    break;

                case 3:
                    const buscaNumero = readlineSync.questionInt("Digite o número da conta: ");
                    const contaEncontrada = controller.procurarPorNumero(buscaNumero);
                    if (contaEncontrada) {
                        contaEncontrada.visualizar();
                    } else {
                        console.log("Conta não encontrada.");
                    }
                    break;

                case 4:
                    const numAtualizar = readlineSync.questionInt("Número da conta para atualizar: ");
                    const contaAtual = controller.procurarPorNumero(numAtualizar);
                    if (contaAtual) {
                        const novoTitular = readlineSync.question("Novo nome do titular: ");
                        const novoSaldo = readlineSync.questionFloat("Novo saldo: ");
                        const contaAtualizada = new (class extends Conta {})(numAtualizar, novoTitular, novoSaldo);
                        controller.atualizar(contaAtualizada);
                    } else {
                        console.log("Conta não encontrada.");
                    }
                    break;

                case 5:
                    const numDeletar = readlineSync.questionInt("Número da conta para deletar: ");
                    controller.deletar(numDeletar);
                    break;

                case 6:
                    const numSaque = readlineSync.questionInt("Número da conta para saque: ");
                    const valorSaque = readlineSync.questionFloat("Valor do saque: ");
                    controller.sacar(numSaque, valorSaque);
                    break;

                case 7:
                    const numDeposito = readlineSync.questionInt("Número da conta para depósito: ");
                    const valorDeposito = readlineSync.questionFloat("Valor do depósito: ");
                    controller.depositar(numDeposito, valorDeposito);
                    break;

                case 8:
                    const numOrigem = readlineSync.questionInt("Número da conta de origem: ");
                    const numDestino = readlineSync.questionInt("Número da conta de destino: ");
                    const valorTransferencia = readlineSync.questionFloat("Valor da transferência: ");
                    controller.transferir(numOrigem, numDestino, valorTransferencia);
                    break;

                case 9:
                    console.log("\nBanco dos Bancos - aqui tem muito dinheiro!");
                    break;

                default:
                    console.log("\nOpção inválida! Tente novamente.");
            }

            if (opcao !== 9) readlineSync.question("\nPressione Enter para voltar ao menu...");

        } while (opcao !== 9);
    }
}

if (require.main === module) {
    Menu.main();
}
