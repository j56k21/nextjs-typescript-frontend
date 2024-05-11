import axios from "axios";
import { useEffect, useRef, useState } from "react";

const test = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [test, setTest] = useState(Object);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const testRef = useRef();

  const handleSearch = async () => {
    const result = await axios.get("api/test");
    console.log(result);

    if (result.data) {
      testRef.current = result.data;
      console.log("testRef.current >> ", testRef.current);
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
  useEffect(() => {
    handleSearch();
  }, []);

  return <div>test</div>;
};
export default test;
