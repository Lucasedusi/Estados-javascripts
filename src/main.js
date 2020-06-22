import axios from './main';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/user/${username}`);
      console.log(response)
    } catch (error) {
      console.warn('erro');
      
    }
  }
}

Api.getUserInfo('lucasedusi');

axios
  .get('https://api.github.com/users/lucasedusi')
  .then((response) => {
    console.log(response.data.name);
  })
  .catch((error) => {
    console.log('erro33');
  });

// const ArrayEs6 = [1, 5, 8, 4, 5];

// // Exemplo de Método Map
// const allBost = ArrayEs6.map((item) => {
//   return item;
// });

// // Exemplo de Método Filter
// const filter = ArrayEs6.filter((item) => {
//   return item % 2 === 0;
// });

// // Exemplo de Método Find
// const find = ArrayEs6.find((item) => {
//   return item % 2 === 0;
// });

// // Exemplo de Arrow functions
// const test = () => ({ nome: 'lucas' });
// const soma = (a = 1, b = 2) => a + b;

// // Usando Desestruturação
// const users = {
//   nome: 'Lucas',
//   idade: 23,
//   endereco: {
//     cidade: 'Mutun',
//     estado: 'Goiás',
//   },
// };

// const { nome, idade, endereco: { cidade } } = users

// // console.log(nome)
// // console.log(idade)
// // console.log(cidade)

// const mostrarDados = ({ nome, idade, endereco: { cidade }}) => {
//   // console.log(nome);
//   // console.log(idade);
//   // console.log(cidade);
// };

// mostrarDados(users)

// // Operadores REST
// const funcionario = {
//   nome1: 'Lucas',
//   idade1: 23,
//   sexo: 'Masculino',
// }

// const arr = [1, 2, 3, 4]

// const { nome1, ...teste } = funcionario;

// // console.log(nome, teste);
// // console.log(c);

// // SPREAD

// const numero1 = [ 1, 2, 3 ];
// const numero2 = [ 4, 5, 6 ];

// const juntos = [ ...numero1, ...numero2 ]

// // console.log(juntos)

// const info = {
//   nome: 'José',
//   idade: 23,
//   cidade: 'Mutun'
// }

// const alterInfo = { ...info, nome: 'Lucas', cidade: 'Porangatu' }

// // console.log(info);
// // console.log(alterInfo);

// // Template Literals

// const myName = {
//   meunome: 'lucas',
//   meusobrenome:'eduardo',
// }

// const { meunome, meusobrenome } = myName;

// // console.log(`Meu primeiro nome é ${meunome} e o meu segundo nome é ${meusobrenome}`)
