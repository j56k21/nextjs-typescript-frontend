import { useEffect } from 'react';
import axios from 'axios';

const TEST = () => {
  useEffect(() => {
    axios.get('/test');
  });

  return 'Hello World';
};

export default TEST;
