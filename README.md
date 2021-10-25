# Explorando a comunicação frontend com API do Github

## Atividade

* Utilizando a API do github, desenvolva uma tela que exibirá uma lista de
usuários do GitHub, contendo seu Id e Login.

* A partir da listagem feita no exercício anterior, elabore uma tela que mostre os
detalhes de um usuário específico, contendo seu Id, Login, URL do perfil e Data de
cadastro.

* Juntamente com a tela de detalhamentos de usuário, exiba em uma tabela os
repositórios públicos do usuário, contendo Id, Nome e URL do repositório.

## Recuros utilizados
* React.Js com Javascript
* Styled-components para estilização
* Hook customizado facilitar o acesso ao contexto da API do github
* Context API para globalizar as requisições feitas à API do github

## Como rodar a aplicação
* Fazer o clone do projeto para o seu computador
* Executar o script `yarn` para instalar todas as dependências do projeto
* Executar o script `yarn start` para rodar a aplicação
* Ao iniciar, o APP irá exibir uma lista dos 10 primeiros usuários retornados da api [`https://api.github.com/users`](https://api.github.com/users)

## Funções
* Carrega a lista dos usuários do github
* Exibe uma modal com informações filtradas de um usuário quando clicando em seu nome
* Exibe a lista dos repositórios públicos do usuários selecionando a clicar no botão
