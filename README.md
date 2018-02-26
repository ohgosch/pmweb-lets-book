# Let's Book - Pmweb

A simple project to customize the current site version.

## Objective

Create a custom CSS, JS e HTML to inner in a existent site.

### Rules [pt-BR]

* Personalizar, através do console do navegador, a [página do motor de reservas “Demo”](https://demo2.letsbook.com.br/D/Reserva?cidade=SPO);
* Inserir o CSS via Javascript;
* O resultado final deve seguir o [layout e instruções no Invision](https://invis.io/X5BHNPZ78);
* [PSD/Layout](https://drive.google.com/drive/folders/0B38p73G5KzgKeTUwMGxvcDhySWc?usp=sharing).

#### Instruções da promoção (novo link “ver promoções do hotel”)

* Por meio de uma requisição AJAX, você deverá enviar o ID do hotel para uma API REST, que retornará um JSON com as informações da promoção;
* Fazer a requisição passando o ID do hotel desejado;
* URL da API: https://www.pmweb.com.br/cro/promocoes/[ID].json;
* Caso a listagem de hotéis não apareça conforme o Invision, é necessário selecionar uma cidade e realizar a busca.

#### Navegadores Homologados

* IE11 e Edge;
* Chrome@windows e Chrome@mac: última versão;
* Firefox@windows e Firefox@mac: última versão.

#### Itens avaliados no teste

* Legibilidade no código: será verificado se está fácil de ser lido e entendido, com nomes das funções e variáveis de acordo com a sua funcionalidade;
* Utilização de algum automatizador de tarefas para minificar o código;
* Documentação, comentários e reaproveitamento de código;
* Organização na estrutura de arquivos;
* Boas práticas de desenvolvimento;
* Tempo de entrega.


## Getting Started

The following are the steps to execute the project locally in the console of the page https://demo2.letsbook.com.br/D/Reserva?cidade=SPO.

### Development Environment

#### Language

To run our scripts we use the Node.js (>=6.11.5)

Access [main page of Node.js](https://nodejs.org/en/download/) to Install in your computer.

#### Package Manager

To manage our dependencies we can use **Yarn** or **NPM**.

**NPM** npm will probably be installed along with **Node**. You can test with the following command:
```
npm -v
```

If you want use **Yarn**, follow the command:
```
sudo npm install -g yarn
```

### Setting Up


```
npm install
```
or
```
yarn install
```
