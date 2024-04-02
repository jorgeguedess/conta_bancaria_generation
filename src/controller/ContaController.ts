import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {
  private listaContas: Array<Conta> = new Array<Conta>();

  public numero: number = 0;

  procurarPorTitular(titular: string): void {
    let listaContasPorTitular = this.listaContas.filter((c) =>
      c.titular.toLowerCase().includes(titular.toLowerCase())
    );

    if (listaContasPorTitular.length === 0) {
      console.log(
        `\n${colors.fg.redstrong}Titular ${titular} não foi encontrado${colors.reset}`
      );
      return;
    }

    listaContasPorTitular.forEach((conta) => conta.visualizar());
  }

  procurarPorNumero(numero: number): void {
    const buscaConta = this.buscarNoArray(numero);

    if (buscaConta === null) {
      console.log(
        `${colors.fg.redstrong}\nA conta número: ${numero} não foi encontrada!${colors.reset}`
      );
      return;
    }
    buscaConta.visualizar();
  }

  listarTodas(): void {
    if (this.listaContas?.length === 0) {
      console.log(
        `${colors.fg.redstrong}Nenhuma conta foi encontrada!${colors.reset}`
      );
      return;
    }
    this.listaContas.forEach((conta) => conta.visualizar());
  }

  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log(
      `${colors.fg.green}\nA conta número: ${conta.numero} foi criada com sucesso!${colors.reset}`
    );
  }

  atualizar(conta: Conta): void {
    const buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta === null) {
      console.log(
        `${colors.fg.redstrong}\nA conta número: ${conta.numero} não foi encontrada!${colors.reset}`
      );
      return;
    }
    this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
    console.log(
      `${colors.fg.green}\nA conta número: ${conta.numero} foi atualizada com sucesso!${colors.reset}`
    );
  }

  deletar(numeroConta: number): void {
    const buscaConta = this.buscarNoArray(numeroConta);

    if (buscaConta === null) {
      console.log(
        `${colors.fg.redstrong}\nA conta número: ${numeroConta} não foi encontrada!${colors.reset}`
      );
      return;
    }

    this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
    console.log(
      `${colors.fg.green}A conta número ${numeroConta} foi deletada com sucesso!${colors.reset}`
    );
  }

  sacar(numero: number, valor: number): void {
    const conta = this.buscarNoArray(numero);

    if (conta === null) {
      console.log(
        `${colors.fg.red}\nA Conta número: ${numero} não foi encontrada!${colors.reset}`
      );
      return;
    }

    if (conta.sacar(valor)) {
      console.log(
        `${colors.fg.green}\nO Saque na Conta número: ${numero} foi efetuado com sucesso!${colors.reset}`
      );
    }
  }

  depositar(numero: number, valor: number): void {
    const conta = this.buscarNoArray(numero);

    if (conta === null) {
      console.log(
        `${colors.fg.red}\nA Conta número: ${numero} não foi encontrada!${colors.reset}`
      );
      return;
    }

    conta.depositar(valor);
    console.log(
      `${colors.fg.green}\nO Depósito na Conta número: ${numero} foi efetuada com sucesso!${colors.reset}`
    );
  }

  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    const contaOrigem = this.buscarNoArray(numeroOrigem);
    const contaDestino = this.buscarNoArray(numeroDestino);

    if (contaOrigem === null && contaDestino === null) {
      console.log(
        `${colors.fg.red}\nA Conta número: ${numeroOrigem} e/ou a Conta numero: ${numeroDestino} não foram encontradas!${colors.reset}`
      );
      return;
    }

    if (contaOrigem?.sacar(valor)) {
      contaDestino?.depositar(valor);
      console.log(
        `${colors.fg.green}\nA Transferência da Conta número: ${numeroOrigem} para a Conta número: ${numeroDestino} foi efetuada com sucesso!${colors.reset}`
      );
    }
  }

  /* Métodos Auxiliares */

  public gerarNumero(): number {
    return ++this.numero;
  }

  public buscarNoArray(numero: number): Conta | null {
    return this.listaContas.find((conta) => conta.numero === numero) || null;
  }

  public retornaTipo(numero: number): number {
    const contaEncontrada = this.listaContas.find(
      (conta) => conta.numero === numero
    );
    return contaEncontrada ? contaEncontrada.tipo : 0;
  }
}
