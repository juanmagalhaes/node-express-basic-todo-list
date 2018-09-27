const Joi = require("joi");

const validate = async (obj, schema) => {
  try {
    return await Joi.validate(obj, schema, { abortEarly: false });
  } catch (err) {
    throw {
      type: err.name,
      messages: err.details.map(detail => detail.message)
    };
  }
};

const schema = Joi.object().keys({
  name: Joi.string().max(50),
  description: Joi.string().max(200),
  done: Joi.boolean()
});

module.exports = obj => validate(obj, schema);
