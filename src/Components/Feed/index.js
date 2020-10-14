import React from 'react';
import Routes from './routes';

import {FeedProvider} from "./Context";

const Feed = () => {
  return (
    <FeedProvider>
      <Routes />
    </FeedProvider>
  );
}

export default Feed;