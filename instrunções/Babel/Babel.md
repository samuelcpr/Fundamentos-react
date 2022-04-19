## Babel is a javascript compiler.

*serve para converter nosso código para uma maneira que todos os brawsers e todos 
os abientes do nosso projeto consiga entender todos os códigos

## o que é @babel/core 
* essa é a biblioteca do babel

## @babel/cli
* usado para executar o babel pela a linha de comando

## @babel/preset-env 
* estenção que indentifica qual ambiente a minha aplicaçãao ta sendo executada 
  para convereter o código da melhor maneira possivel

## instalação Babel

<yarn add @babel/core  @babel/cli  @babel/preset-env -D >

## Criar arquivo babel.config.js

babel.config.js
<dentro do arquivo>{

module.exports = {
    presets: [
        '@babel/preset-env'
    ]
};

`Atributo dentro do arquivo babel`
}

## interface de linha de comando
*yarn babel src/index.jsx --out-file dist/bundle.js

>> cria pasta `dist`

## instalar @babel/prest-react -D
* Interpretador de html 

<`yarn add @babel/preset-react -D `>

## instalar deendencia  babel-loader

* integração entre babel e webpack

<yarn add babel-loader -D>

## para a aplicação  intender type scrypte com babel

<yarn add @babel/preset-typescript -D>
yarn add @babel/preset-typescript -D
