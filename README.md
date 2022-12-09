
**Sobre o Projeto**
* Uma API um CRUD de Alunos, turmas e professores, usando postgres e nodejs

**Tecnologias Usadas:**
* Node 18.12.1
* NPM
* Postgresql
* Sequelize ORM
**Como Usar:**
* Digite no terminal, no cominho do projeto, o comando **npm install** para baixar as dependências da aplicação.
* Depois va na pasta config, em database.js, e veja se a porta do Postgresql no projeto é a mesma da que está na sua máquina, faça o mesmo para o usuário.
* Com o usário e senha devidamente colocados é necessário criar a database com o comando npx sequelize db:create, se preferir criar a database de outras formas fique a vontade, e depois finalize digitando o comando npx sequelize db:migrate para criar as tabelas
* Depois digite **npm start** para executar um server na porta 8000.

**OBS: Se a API estiver sendo usado no localhost vai ser necessário usar um plugin que desbloquei o CORS por causa da política de CORS nos navegadores, estou usando o plugin CORS Unblock no CHROME**



