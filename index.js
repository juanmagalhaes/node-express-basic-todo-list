const express = require("express");

const api = require("./api");
const { logger, parser } = require("./midlewares");

const PORT = 3000;
const app = express();

app.use(logger, parser);

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
