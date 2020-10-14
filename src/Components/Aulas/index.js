import React from 'react';
import Routes from './routes';

import {AulasProvider} from "./Context";

const Feed = () => {
  return (
    <AulasProvider>
      <Routes />
    </AulasProvider>
  );
}

export default Feed;