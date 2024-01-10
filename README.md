# Desafio: Proxy Reverso Nginx com Node.js

Este é um desafio que tem como objetivo principal, a utilização do Nginx como proxy reverso. 

## Descrição da Aplicação

Quando um usuário acessa o Nginx, este irá chamar uma aplicação Node.js. Esta aplicação, por sua vez, adicionará um registro em nosso banco de dados MySQL, cadastrando um nome na tabela 'people'.

O retorno da aplicação Node.js para o Nginx será a lista de nomes cadastrados no banco de dados.

## Subindo a Aplicação com Docker-Compose

Nosso ambiente é completamente baseado em Docker. Assim, levantá-lo é extremamente fácil com o docker-compose.

Os passos seguintes vão guiá-lo em como configurar e rodar o projeto:

1. Primeiro, você precisa clonar o repositório. Digite o seguinte comando no terminal:
2. git clone https://github.com/HaroldoFV/node.git
3. Navegue até a pasta recém-clonada com o comando:
4. cd node
5. docker-compose up -d
6. Agora, a aplicação deve estar rodando e disponível na porta 8080 do seu host.
