const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

/**
 * Rota: http://localhost:3333/users
 * Recurso: .../users
 *
 * [ Métodos HTTP ]
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 *
 * [ Tipos de parâmetros ]
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * GET http://localhost:3333/users?name=Vieira -> ('/users') { req.query }
 *
 * Route Params: Parâmetros utilizados para identificar recursos
 * GET http://localhost:3333/users/1 -> ('/users/:id') { req.params }
 *
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * POST http://localhost:3333/users -> ('/users') { req.body }
 *
 * [ Bancos de Dados ]
 * SQL: MySQL, { SQLite }, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 *
 * Driver: SELECT * FROM users
 * Query Builder ( KNEXJS ): table( "users" ).select( "*" ).where(  )
 */

routes.post(
  "/sessions",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required()
    })
  }),
  SessionController.create
);

routes.get("/ongs", OngController.index);
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      whatsapp: Joi.string()
        .length(13)
        .required(),
      city: Joi.string().required(),
      uf: Joi.string()
        .length(2)
        .required()
    })
  }),
  OngController.create
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({ page: Joi.number() })
  }),
  IncidentController.index
);
routes.post(
  "/incidents",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required()
    })
  }),
  IncidentController.create
);
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentController.delete
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

module.exports = routes;
