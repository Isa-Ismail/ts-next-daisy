import { useState, useEffect, useContext } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
};

export default useFetch;