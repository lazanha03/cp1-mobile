
type Pessoa = {
    nome: string;
    idade: number;
};
  
type Empregado = {
    empresa: string;
    salario: number;
};
  

type PessoaEmpregada = Pessoa & Empregado;
  

  function exibirInformacoesEmpregado(empregado: PessoaEmpregada): string {
    return `Nome: ${empregado.nome}, Idade: ${empregado.idade}, Empresa: ${empregado.empresa}, Salário: R$${empregado.salario.toFixed(2)}.`;
}
  

const pessoaEmpregadaExemplo: PessoaEmpregada = { nome: 'Ana', idade: 35, empresa: 'TechCorp', salario: 8000 };
console.log(exibirInformacoesEmpregado(pessoaEmpregadaExemplo));