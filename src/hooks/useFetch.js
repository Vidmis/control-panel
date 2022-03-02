import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes))
      .catch((err) => console.log(err));
  }, [url]);

  return { data };
};

export default useFetch;
