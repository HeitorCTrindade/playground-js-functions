<a name="readme-top"></a>

<h1 align="center">Projeto Playground Functions</h1>

<details>
  <summary>Sumário</summary>
  <ol>
    <li><a href="#sobre-o-projeto">Sobre o Projeto</a></li>
    <li><a href="#tecnologias">Tecnologias</a></li>
    <li><a href="#como-executar-o-projeto">Como Executar o Projeto</a></li>
    <li><a href="#habilidades">Habilidades</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>


## Sobre o Projeto
Olá, esse é o README do projeto Playgroud Functions, segundo projeto desenvolvido durante o curso de Desenvolvimento Web da Trybe.

O projeto consiste em na implementação de funções para resolução de problemas pré-definidos com os retornos esperados. Coube a mim construir de forma livre a lógica de programação para solução de cada um dos problemas.

Descrição da funcionalidade de cada função dos desafios:
1. `compareTrue`: Utiliza o operador lógico `&&` para comparação de dois valores.
2. `calcArea`: Calcula a área total de um triângulo.
3. `splitSentence`: Divide uma frase de acordo com a quantidade de palavras.
4. `concatName`: Retorna uma string que contém o último e primeiro itens (nesta sequência) de um array de strings.
5. `footballPoints`: Calcula a quantidade de pontos em um campeonato de futebol.
6. `highestCount`: Retorna o número de repetições do maior número de um array de números.
7. `catAndMouse`: Verifica qual gato está mais perto do rato.
8. `fizzBuzz`:  Retorna um array de strings de acordo com o array de números recebido.
9. `encode` e `decode`: Codifica e decodifica uma frase, trocando vogais por números e vice-versa.
10. `techList`: Retorna uma lista (array de objetos) de acordo com o array e a string recebidos.
11. `generatePhoneNumber`: Gera um número de telefone a partir de um array de 11 números. O numero gerado deve possuir obrigatóriamente o seguinte formato '(XX) XXXXX-XXXX'. Devem ser implementadas as seguintes validações:

    - Caso o Array não possua 11 numeros deve ser retornado a frase: 'Array com tamanho incorreto'.
    - Caso algum dos números constantes no array for maior do que '9' ou menor do que '0' retorne a frase: 'não é possível gerar um número de telefone com esses valores'.
    - Caso algum dos números se repita mais do que três (3) vezes no array retorne a frase: 'não é possível gerar um número de telefone com esses valores'.
    
12. `triangleCheck`: Verifica se é possível formar um triângulo.
13. `hydrate`: Retorna a sugestão de quantos copos d'água devem ser consumidos em um determinado contexto.


## Tecnologias
[![JavaScript][javascript-badge]][javascript-url]


## Como Executar o Projeto
Para rodar o projeto localmente, siga os passos abaixo.

1. Clone o repositório;
```
git clone git@github.com:garciaagui/trybe-project-02_playground-functions.git
```

2. Instale as dependências necessárias (porem ser consutadas no arquivo package.json)  ;
```
npm install
```

3. Para consultar os retornos das funções, vá para os arquivos `challenges.js` ou `challenges2.js` disponíveis na pasta `src` e utilize a extensão [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner).

4. Para executar os testes das funções voce pode utilizar o comando `npm test`. É possível testar cada arquivo individualmente, conforme o exemplo abaixo.
```
npm test tests/*nome.do.arquivo*.js
```

## Habilidades
<ul>
  <li>Utilização da lógica de programação para resolução de problemas.</li>
  <li>Utilização de JavaScript para implementação de lógica e criação de funções.</li>
</ul>


## Contato
Projeto desenvolvido por Heitor C. Trindade :robot:.

[![Gmail][gmail-badge]][gmail-url] [![Linkedin][linkedin-badge]][linkedin-url] [![GitHub][github-badge]][github-url]

<p align="right"><a href="#readme-top">Voltar ao topo</a></p>

<!-- MARKDOWN LINKS & IMAGES -->
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[javascript-badge]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[jest-url]: https://jestjs.io/
[jest-badge]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[gmail-badge]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: mailto:heitorct.dev@gmail.com
[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/heitor-catarino-trindade
[github-badge]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/HeitorCTrindade/
