const express = require("express");

const api = require("./api");
const { cors, logger, parser } = require("./midlewares");

const PORT = 3000;
const app = express();

app.use(cors, parser, logger);

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
