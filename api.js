const { Router } = require("express");

const {
  find,
  save,
  remove
} = require("./todos");

const router = Router();
const todoRouter = Router();
router.use('/todos', todoRouter);

todoRouter.get("/:id?", find);
todoRouter.post("/", save);
todoRouter.put("/:id", save);
todoRouter.patch("/:id", save);
todoRouter.delete("/:id", remove);

module.exports = router;
