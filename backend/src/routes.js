const express = require( 'express' );
const crypto = require( 'crypto' );

const connection = require( './database/connection' );

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

routes.post( '/ongs', ( req, res ) => {
  const { name, email, whatsapp, city, uf } = req.body;

  const id = crypto.randomBytes( 4 ).toString( 'HEX' );

  console.log( data );

  return res.json();
} )

module.exports = routes;
