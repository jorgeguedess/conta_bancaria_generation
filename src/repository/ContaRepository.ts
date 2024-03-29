import { Conta } from "../model/Conta";

export interface ContaRepository {
  // Métodos do CRUD (Create, Read, Update, Delete)
  procurarPorNumero(numero: number): void;
  listarTodas(): void;
  cadastrar(conta: Conta): void;
  atualizar(conta: Conta): void;
  deletar(conta: Conta): void;

  //   Métodos Bancários
  sacar(numero: number, valor: number): void;
  depositar(numero: number, valor: number): void;
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}
