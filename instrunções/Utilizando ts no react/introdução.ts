// interface e type
// ## são duas tags do ts que adiciona a tipagem do atributo
// ou seja são utilizadas para definir um tipo padrã para cada teg de aplicação

// caso algum dos atributo abaixo não seja obrigatório usamos a ? para marcalo
type User = {
  name: string;
  email: string;
  address: {
    cyty: string;
    state?: string;
  };
};

function showWelcomeMessage(user: User) {
  return `welcome$ ${user.name}, your e-mail is ${user.email}, your city is ${user.address.cyty} and your state is ${user.address.state}`;
}

const message = showWelcomeMessage({
  name: "samuel",
  email: "fff@jj",
  address: {
    cyty: "poranga",
    state: "go",
  },
});

// cidade -uf
