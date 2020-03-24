const express = require( 'express' );

const app = express();
app.use( express.json() )

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

app.post( '/users', ( req, res ) => {
  const body = req.body;

  console.log( body );

  return res.json({
    event: 'Semana OmniStack 11.0',
    aluno: 'Eliane Nunes'
  });
} )

app.listen( 3333 );
