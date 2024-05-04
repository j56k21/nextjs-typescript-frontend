import { useEffect } from 'react';
import axios from 'axios';

const TEST = () => {
  useEffect(() => {
    axios.get('/api/test',{
      headers:{'Content-Type': 'application/json;charset=UTF-8'}
    });
  });

  return 'Hello World';
};

export default TEST;
