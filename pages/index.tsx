import { useEffect } from 'react';







import axios from 'axios';


const TEST = () => {
  useEffect(() => {
    axios.get('/21312312');
  });

  return 'Hello World';
};

export default TEST;
