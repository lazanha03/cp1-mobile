interface Produto {
    nome: string;
    preco: number;
    categoria: string;
  }
  
type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';
  
function exibirProdutoComPagamento(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
  }
const produtoExemplo: Produto = { nome: 'Celular', preco: 2000, categoria: 'Eletrônicos' };
const formaPagamentoExemplo: FormaPagamento = 'cartão';
  
console.log(exibirProdutoComPagamento(produtoExemplo, formaPagamentoExemplo));