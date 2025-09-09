import * as readlineSync from "readline-sync";
import { Colors } from "./util/Colors";
import { Conta } from "./model/Conta";

export class Menu {
    static main(): void {
    

    
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
            console.log("                             4 - Atualizando dados da conta");
            console.log("                             5 - Apagar Conta");
            console.log("                             6 - Sacar");
            console.log("                             7 - Depositar");
            console.log("                             8 - Transferir valores entre contas");
            console.log("                             9 - Sair");
            console.log("");

            opcao = readlineSync.questionInt("Entre com a opção desejada: ");

            switch (opcao) {
                case 1:
                    console.log("\nCriar Conta\n");
                    break;
                case 2:
                    console.log("\nListar todas as contas\n");
                    break;
                case 3:
                    console.log("\nConsultar dados da conta - por número\n");
                    break;
                case 4:
                    console.log("\nAtualizar dados da conta\n");
                    break;
                case 5:
                    console.log("\nApagar uma conta\n");
                    break;
                case 6:
                    console.log("\nSaque\n");
                    break;
                case 7:
                    console.log("\nDepósito\n");
                    break;
                case 8:
                    console.log("\nTransferir valores entre contas\n");
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
