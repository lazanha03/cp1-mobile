class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) {}
  
    descricao(): string {
      return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
    }
  }
  class Gerente extends Funcionario {
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
      super(nome, cargo, salario);
    }
  
    descricaoDetalhada(): string {
      return `${super.descricao()}, Departamento: ${this.departamento}`;
    }
  }
  
  const gerenteExemplo = new Gerente('Carlos', 'Gerente de TI', 12000, 'Tecnologia');
  console.log(gerenteExemplo.descricaoDetalhada());