import React from 'react';

import './global.css';

import Routes from './routes';

/**
 * JSX ( JavaScript + XML )
 * Componentes = Conjunto de funções
 * O React não usa variáveis convensionais
 * ele usa Estado para refletir as atualizações
 * de na aplicação
 *
 * useState -> Array [ valor, funcaoDeAtualizacao ]
 * no React há o principio da imutabilidade
 *
 * componentes devem ficar dentro de algo no react
 */

function App() {
  return (
    <Routes />
  );
}

export default App;
