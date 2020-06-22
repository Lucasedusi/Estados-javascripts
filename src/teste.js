const users = {
  nome: 'Lucas',
  idade: 23,
  cidade: 'Porangatua',
};

const UsersInfo = users.map((item) => {
  return item.nome;
});

console.log(UsersInfo);
