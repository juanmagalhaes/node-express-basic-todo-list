const uuid = require('uuid/v1');

const validator = require("./validator");

const data = {
  todos: []
};

function find(req, res) {
  const { id } = req.params;
  if (id) {
    res.json(data.todos.find(todo => todo.id === id));
  } else {
    res.json(data.todos);
  }
}

function save(req, res) {
  const { id } = req.params;
  if (!id) {
    validator(req.body)
      .then(() => {
        const todo = {
          ...req.body,
          id: uuid(),
        };

        data.todos.push(todo);
        res.status(201).json(todo);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  } else {
    const idx = data.todos.findIndex(todo => todo.id === id);
    if (idx !== -1) {
      validator(req.body)
        .then(() => {
          const todo = {
            ...data.todos[idx],
            ...req.body,
            id
          };

          data.todos[idx] = todo;
          res.json(todo);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    } else {
      res.status(406).send('Not Acceptable');
    }
  }
};

function remove(req, res) {
  const { id } = req.params;

  const idx = data.todos.findIndex(todo => todo.id === id);
  if (idx !== -1) {
    data.todos.splice(idx, 1);
    res.send('Removed');
  } else {
    res.status(406).send('Not Acceptable');
  }
};

module.exports = {
  find,
  save,
  remove
};
