const express = require( 'express' );

const app = express();

app.get( '/', ( req, res ) => {
  return res.json({
    event: 'Semana OmniStack 11.0',
    aluno: 'Vieira Neto'
  })
} )

app.listen( 3333 );
