# Desafio: Proxy Reverso Nginx com Node.js

Este é um desafio que tem como objetivo principal, a utilização do Nginx como proxy reverso. 

## Descrição da Aplicação

Quando um usuário acessa o Nginx, este irá chamar uma aplicação Node.js. Esta aplicação, por sua vez, adicionará um registro em nosso banco de dados MySQL, cadastrando um nome na tabela 'people'.

O retorno da aplicação Node.js para o Nginx será a lista de nomes cadastrados no banco de dados.

## Subindo a Aplicação com Docker-Compose

Nosso ambiente é completamente baseado em Docker. Assim, levantá-lo é extremamente fácil com o docker-compose.

Rode o seguinte comando na base do projeto\

docker-compose up -d

A aplicação estará disponível na porta 8080 do seu host.
