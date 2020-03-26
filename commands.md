## [BACKEND - NodeJS]:

__Criar a pasta backend e acessa-lá__

``` mkdir backend && cd backend ```

__Iniciar o npm__

``` npm init -y ```

__Instalar o micro-framework__

``` npm install express ```

__Criar o index.js, ponto de partida da aplicação__

``` touch index.js ```

__Para executar a aplicação__

``` node index.js ```

__Autoloader para o node server em modo desenvolvimento__

``` npm install nodemon -D ```

__Configuração do banco de dados__

``` npm install knex --save ```
``` npm install sqlite3 --save ```

__Executar o pacote knex__

``` npx knex init ```

__Criando as migrations das tabelas para o banco de dados__

``` npx knex migrate:make 'create_ongs' ``` _*create_ongs é o nome dado ao evento*_

__Criando a tabela__

``` npx knex migrate:latest ```

__Voltar a criação da última tabela__

``` npx knex migrate:rollback ```

__Instalando recurso de segurança contra acesso não autorizado__

``` npm install cors ```

## [PRONTEND - ReactJS]:

__Iniciar o npx__

``` npx create-react-app frontend```

__Acessar a pasta do frontend__

``` cd frontend ```

__Para executar a aplicação__

``` npm start ```

__Instalação de pacotes de icones__

``` npm install react-icons ```

__Instalação do gerenciador de rotas__

``` npm install react-router-dom ```
