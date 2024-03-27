import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";
import { Conta } from "./src/model/Conta";

export function main() {
  let opcao: number = 0;

  // let pessoa1: Conta = new Conta(1, 123, 1, "João Pedro", 100000);
  // pessoa1.visualizar();
  // console.log(pessoa1.sacar(5000));
  // pessoa1.visualizar();

  while (true) {
    console.log(exibirMenu());
    let opcaoInvalida: boolean;
    const mensagemErroOpcao = `${exibirMenu()}${colors.reset}\n${
      colors.bg.black
    }${colors.fg.red}Opção inválida. Digite de 1 a 9${colors.reset}`;

    do {
      opcao = readlinesync.questionInt("Entre com a opção desejada:", {
        limitMessage: mensagemErroOpcao,
      });
      opcaoInvalida = opcao <= 0 || opcao > 9;
      if (opcaoInvalida) console.log(mensagemErroOpcao);
    } while (opcaoInvalida);

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

        keyPress();
        break;
      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          colors.reset
        );

        keyPress();
        break;
      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da Conta - por número\n\n",
          colors.reset
        );

        keyPress();
        break;
      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset
        );

        keyPress();
        break;
      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nApagar uma Conta\n\n",
          colors.reset
        );

        keyPress();
        break;
      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

        keyPress();
        break;
      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

        keyPress();
        break;
      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferência entre Contas\n\n",
          colors.reset
        );

        keyPress();
        break;

      case 9:
        console.log(
          colors.fg.magenta,
          "\n$$ Banco Zé Carioca $$ - O jeito carioca de investir no seu futuro!"
        );
        sobre();
        console.log(colors.reset, "");
        process.exit(0);
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
  console.log(`
  *****************************************************

  Projeto Desenvolvido por:
  
  Jorge Guedes - apoio da Generation Brasil
  https://github.com/jorgeguedess

  *****************************************************
  `);
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

function exibirMenu(): string {
  return `
  ${colors.bg.black}${colors.fg.green}*****************************************************
  
    $$ BANCO ZÉ CARIOCA $$

  *****************************************************

  1 - Criar Conta                          
  2 - Listar todas as Contas               
  3 - Buscar Conta por Numero              
  4 - Atualizar Dados da Conta             
  5 - Apagar Conta                         
  6 - Sacar                                
  7 - Depositar                            
  8 - Transferir valores entre Contas      
  9 - Sair                                 
  
  *****************************************************                        
  ${colors.reset}`;
}

main();
