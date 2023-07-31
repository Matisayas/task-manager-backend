import * as Joi from '@hapi/joi';

export const configsValidationSchema = Joi.object({
  DB_PORT: Joi.string().default(5432).required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
});
