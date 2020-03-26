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

__Instalação axios para consumir os dados do backend__

``` npm install axios ```

## [MOBILE - ReactNative]:

__Instalação do Expo em modo global__

``` npm install -g expo-cli ```

__Incialização do projeto mobile__

``` expo init mobile --npm```
``` select: blank ```

__Entra na pasta mobile__

``` cd mobile ```

__Executando o projeto mobile__

``` npm start ```

__Instalação da biblioteca ReactNavigation para o expo__

````npm install @react-navigation/native ```

__Instalação das dependencias da biblioteca ReactNavigation para o expo__
``` expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view ```

__Instalação do StackNavigation (Nota: Existem outras formas de navegação, essa é a mais simples - por botões)__

``` npm install @react-navigation/stack ```

__Instalação do pacote expo-constants__

``` expo install expo-constants ```
