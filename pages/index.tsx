import { useEffect } from 'react';
import axios from 'axios';

const TEST = () => {
  useEffect(() => {
    axios.get('/');
  });

  return 'Hello World';
};

export default TEST;
