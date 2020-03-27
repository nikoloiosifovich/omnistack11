## [BACKEND - NodeJS]:

**Criar a pasta backend e acessa-lá**

`mkdir backend && cd backend`

**Iniciar o npm**

`npm init -y`

**Instalar o micro-framework**

`npm install express`

**Criar o index.js, ponto de partida da aplicação**

`touch index.js`

**Para executar a aplicação**

`node index.js`

**Autoloader para o node server em modo desenvolvimento**

`npm install nodemon -D`

**Configuração do banco de dados**

`npm install knex --save`
`npm install sqlite3 --save`

**Executar o pacote knex**

`npx knex init`

**Criando as migrations das tabelas para o banco de dados**

`npx knex migrate:make 'create_ongs'` _*create_ongs é o nome dado ao evento*_

**Criando a tabela**

`npx knex migrate:latest`

**Voltar a criação da última tabela**

`npx knex migrate:rollback`

**Instalando recurso de segurança contra acesso não autorizado**

`npm install cors`

### [ BACKEND - > Validações < ]

**Instalação da biblioteca para validações**

> O celebrate usa a lib hapi/joi para fazer a validações, ele integra o joi ao express

`npm install celebrate`

**Instalação da biblioteca para TDD**

`npm install jest`

**Inicializando o jest no backend**

`npx jest --init` ( Y -> node -> N -> Y )

**Instalação da biblioteca para controle de estado de desenvolvimento do projeto**

`npm install cross-env`

## [PRONTEND - ReactJS]:

**Iniciar o npx**

`npx create-react-app frontend`

**Acessar a pasta do frontend**

`cd frontend`

**Para executar a aplicação**

`npm start`

**Instalação de pacotes de icones**

`npm install react-icons`

**Instalação do gerenciador de rotas**

`npm install react-router-dom`

**Instalação axios para consumir os dados do backend**

`npm install axios`

## [MOBILE - ReactNative]:

**Instalação do Expo em modo global**

`npm install -g expo-cli`

**Incialização do projeto mobile**

`expo init mobile --npm`
`select: blank`

**Entra na pasta mobile**

`cd mobile`

**Executando o projeto mobile**

`npm start`

**Instalação da biblioteca ReactNavigation para o expo**

``npm install @react-navigation/native ```

**Instalação das dependencias da biblioteca ReactNavigation para o expo**
`expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

**Instalação do StackNavigation (Nota: Existem outras formas de navegação, essa é a mais simples - por botões)**

`npm install @react-navigation/stack`

**Instalação do pacote expo-constants**

`expo install expo-constants`

**Instalação do pacote para envio de emails**

`expo install expo-mail-composer`

**Instalação axios para consumir os dados do backend**

`npm install axios`

**Instalação do pacote intl para formatação de moeda**

`npm install intl`
