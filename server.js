const server = require("./src/app");
const connection = require("./src/database");
require("./src/database");

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
  console.log(`CTRL + Clique http://localhost:${PORT}`);
});
