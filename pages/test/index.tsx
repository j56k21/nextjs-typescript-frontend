import axios from "axios";
import { useEffect, useState } from "react";

const test = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [test, setTest] = useState(Object);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTest(axios.get("http://localhost:8080/api/test"));
  }, []);

  return <div></div>;
};
export default test;
