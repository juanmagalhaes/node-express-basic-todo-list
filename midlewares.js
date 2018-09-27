const bodyParser = require("body-parser");
const morgan = require("morgan");

const logger = morgan(
  '[:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
);

const parser = bodyParser.json();

module.exports = {
  logger,
  parser
}
