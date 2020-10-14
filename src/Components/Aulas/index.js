import React from 'react';
import Routes from './routes';

import {AulasProvider} from "./Context";

const Aulas = () => {
  return (
    <AulasProvider>
      <Routes />
    </AulasProvider>
  );
}

export default Aulas;