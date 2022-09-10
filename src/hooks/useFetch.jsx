import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (URL) => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(URL).then((res) => setData(res.data));
  }, []);

  return { data };
};

export default useFetch;
