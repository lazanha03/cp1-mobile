import { Cliente } from './Cliente';

// Definição da classe Pedido
export class Pedido {
  constructor(public cliente: Cliente, public produto: string, public valor: number) {}

  exibirPedido(): string {
    return `Cliente: ${this.cliente.nome}, Produto: ${this.produto}, Valor: R$${this.valor.toFixed(2)}`;
  }
}
