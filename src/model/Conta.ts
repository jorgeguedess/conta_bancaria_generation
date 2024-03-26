export class Conta {
  // Atributos do Objeto da Classe Conta
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;

  // Método Construtor - Instanciar (Criar) um novo Objeto da Classe Conta
  constructor(
    _numero: number,
    _agencia: number,
    _tipo: number,
    _titular: string,
    _saldo: number
  ) {
    this._numero = _numero;
    this._agencia = _agencia;
    this._tipo = _tipo;
    this._titular = _titular;
    this._saldo = _saldo;
  }

  /**
   * Getter _numero
   * @return {number}
   */
  public get_numero(): number {
    return this._numero;
  }

  /**
   * Getter _agencia
   * @return {number}
   */
  public get_agencia(): number {
    return this._agencia;
  }

  /**
   * Getter _tipo
   * @return {number}
   */
  public get_tipo(): number {
    return this._tipo;
  }

  /**
   * Getter _titular
   * @return {string}
   */
  public get_titular(): string {
    return this._titular;
  }

  /**
   * Getter _saldo
   * @return {number}
   */
  public get_saldo(): number {
    return this._saldo;
  }

  /**
   * Setter _numero
   * @param {number} value
   */
  public set_numero(value: number) {
    this._numero = value;
  }

  /**
   * Setter _agencia
   * @param {number} value
   */
  public set_agencia(value: number) {
    this._agencia = value;
  }

  /**
   * Setter _tipo
   * @param {number} value
   */
  public set_tipo(value: number) {
    this._tipo = value;
  }

  /**
   * Setter _titular
   * @param {string} value
   */
  public set_titular(value: string) {
    this._titular = value;
  }

  /**
   * Setter _saldo
   * @param {number} value
   */
  public set_saldo(value: number) {
    this._saldo = value;
  }

  public sacar(valor: number): boolean {
    if (this._saldo >= valor) {
      this.set_saldo(this._saldo - valor);
      return true;
    }

    console.log("Saldo é insuficiente!");
    return false;
  }

  public depositar(valor: number): void {
    this.set_saldo(this._saldo + valor);
  }

  public visualizar(): void {
    let tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "Conta Corrente";
        break;
      case 2:
        tipo = "Conta Poupança";
        break;
    }

    console.log("*****************************************************");
    console.log("Dados da Conta");
    console.log("*****************************************************");
    console.log(`Número da conta: ${this._numero}`);
    console.log(`Número da agência: ${this._agencia}`);
    console.log(`Tipo da conta: ${tipo}`);
    console.log(`Titular da conta: ${this._titular}`);
    console.log(`Saldo da conta: ${this._saldo}`);
  }
}
