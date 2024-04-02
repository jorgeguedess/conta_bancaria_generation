import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaController } from "./src/controller/ContaController";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
  let contas: ContaController = new ContaController();

  let opcao: number;
  let numero: number;
  let agencia: number;
  let tipo: number;
  let saldo: number;
  let limite: number;
  let aniversario: number;
  let valor: number;
  let numeroDestino: number;

  let titular: string;
  const tipoContas = ["Conta Corrente", "Conta Poupanca"];

  /* Dados iniciais */
  const contaCorrente: ContaCorrente = new ContaCorrente(
    contas.gerarNumero(),
    124,
    1,
    "Augusto Fernandez",
    3500,
    2200
  );
  contas.cadastrar(contaCorrente);

  const contaPoupanca: ContaPoupanca = new ContaPoupanca(
    contas.gerarNumero(),
    125,
    2,
    "Pedro Pedrosa",
    5000,
    500
  );
  contas.cadastrar(contaPoupanca);

  while (true) {
    exibirMenu();
    opcao = readlinesync.questionInt("Entre com a opção desejada: ", {
      limitMessage: `${colors.fg.red}Opção inválida. Digite de 1 a 9${colors.reset}\n`,
    });

    switch (opcao) {
      case 1:
        console.log(
          `${colors.fg.whitestrong}\n\nCriar Conta\n\n${colors.reset}`
        );

        agencia = readlinesync.questionInt("Digite o Número da agência: ", {
          limitMessage: "Número inválido!\n",
        });
        titular = readlinesync.question("Digite o Nome do Titular da Conta: ");

        tipo =
          readlinesync.keyInSelect(tipoContas, "Digite o Tipo da Conta:", {
            cancel: false,
          }) + 1;

        saldo = readlinesync.questionFloat("Digite o Saldo da conta (R$): ", {
          limitMessage: "Valor do saldo inválido!\n",
        });

        switch (tipo) {
          case 1:
            limite = readlinesync.questionFloat(
              "Digite o Limite da Conta (R$): ",
              {
                limitMessage: "Valor do limite inválido!\n",
              }
            );
            const novaContaCorrente = new ContaCorrente(
              contas.gerarNumero(),
              agencia,
              tipo,
              titular,
              saldo,
              limite
            );
            contas.cadastrar(novaContaCorrente);
            break;

          case 2:
            aniversario = readlinesync.questionInt(
              "Digite o Dia do aniversário da Conta Poupança: "
            );
            const novaContaPoupanca = new ContaPoupanca(
              contas.gerarNumero(),
              agencia,
              tipo,
              titular,
              saldo,
              aniversario
            );
            contas.cadastrar(novaContaPoupanca);
            break;
        }
        keyPress();
        break;

      case 2:
        console.log(
          `${colors.fg.whitestrong}\n\nListar todas as Contas\n\n${colors.reset}`
        );

        contas.listarTodas();

        keyPress();
        break;

      case 3:
        console.log(
          `${colors.fg.whitestrong}\n\nConsultar dados da Conta - por número\n\n${colors.reset}`
        );

        numero = readlinesync.questionInt("Digite o número da Conta: ", {
          limitMessage: "Número invalido!\n",
        });
        contas.procurarPorNumero(numero);

        keyPress();
        break;

      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset
        );

        numero = readlinesync.questionInt("Digite o número da Conta: ", {
          limitMessage: "Número inválido!",
        });

        if (contas.buscarNoArray(numero) === null) {
          console.log(
            `${colors.fg.redstrong}\nA Conta numero: ${numero} não foi encontrada!${colors.reset}`
          );
          keyPress();
          break;
        }

        agencia = readlinesync.questionInt("Digite o Número da agência: ", {
          limitMessage: "Número inválido!",
        });
        titular = readlinesync.question("Digite o Nome do Titular da conta: ");
        saldo = readlinesync.questionFloat("Digite o Saldo da conta (R$): ", {
          limitMessage: "Valor inválido!",
        });

        tipo = contas.retornaTipo(numero);

        switch (tipo) {
          case 1:
            limite = readlinesync.questionFloat(
              "Digite o Limite da Conta (R$): ",
              {
                limitMessage: "Valor inválido!\n",
              }
            );
            const novaContaCorrente = new ContaCorrente(
              numero,
              agencia,
              tipo,
              titular,
              saldo,
              limite
            );
            contas.atualizar(novaContaCorrente);
            break;
          case 2:
            aniversario = readlinesync.questionInt(
              "Digite o Dia do aniversário da Conta Poupança:",
              {
                limitMessage: "Número inválido!\n",
              }
            );

            const novaContaPoupanca = new ContaPoupanca(
              numero,
              agencia,
              tipo,
              titular,
              saldo,
              aniversario
            );
            contas.atualizar(novaContaPoupanca);
            break;
        }

        keyPress();
        break;

      case 5:
        console.log(
          `${colors.fg.whitestrong}\n\nApagar uma Conta\n\n${colors.reset}`
        );

        numero = readlinesync.questionInt("Digite o número da Conta: ", {
          limitMessage: "Número inválido!\n",
        });

        contas.deletar(numero);
        keyPress();
        break;

      case 6:
        console.log(`${colors.fg.whitestrong}\n\nSaque\n\n${colors.reset}`);

        keyPress();
        break;

      case 7:
        console.log(`${colors.fg.whitestrong}\n\nDepósito\n\n${colors.reset}`);

        keyPress();
        break;

      case 8:
        console.log(
          `${colors.fg.whitestrong}\n\Transferência entre Contas\n\n${colors.reset}`
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
        return;
      default:
        console.log(
          `${colors.fg.red}\nOpção inválida. Digite de 1 a 9.\n${colors.reset}`
        );
        keyPress();
        break;
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
  https://www.linkedin.com/in/jorgeguedess/

  *****************************************************
  `);
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

function exibirMenu(): void {
  console.log(`
  ${colors.bg.black}${colors.fg.blue}*****************************************************
  
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
  ${colors.reset}`);
}

main();
