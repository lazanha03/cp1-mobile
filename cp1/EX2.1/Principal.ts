import { Pedido } from './Pedido';
import { Cliente } from './Cliente';

// Criação de instâncias de Pedido e Cliente
const clienteExemplo = new Cliente('Lucas', 'lucas@gmail.com');
const pedidoExemplo = new Pedido(clienteExemplo, 'Notebook', 4500);

console.log(pedidoExemplo.exibirPedido());