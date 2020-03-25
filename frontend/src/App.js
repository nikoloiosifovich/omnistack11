import React, { useState } from 'react';

import Header from './Header';

/**
 * JSX ( JavaScript + XML )
 * Componentes = Conjunto de funções
 * O React não usa variáveis convensionais
 * ele usa Estado para refletir as atualizações
 * de na aplicação
 */

function App() {
  // useState -> Array [ valor, funcaoDeAtualizacao ]
  // no React há o principio da imutabilidade
  const [ counter, setCounter ] = useState( 0 );

  function increment() {
    setCounter(counter + 1);
  }

  return ( // componentes devem ficar dentro de algo no react
    <div>
      <Header>
        Contador: { counter }
      </Header>
      <button onClick={ increment }>Incrementar</button>
    </div>
  );
}

export default App;
