import React from 'react';

import FeedImage from './img'
import FeedUpload from './upload'

import {HooksFeedContext} from "./Context";

const routes = () => {

  const {imagens} = HooksFeedContext();

  return imagens ? <FeedUpload /> : <FeedImage />

}

export default routes;