import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {
  private listaContas: Array<Conta> = new Array<Conta>();

  public numero: number = 0;

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
    throw new Error("Method not implemented.");
  }

  depositar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    throw new Error("Method not implemented.");
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
