import { useState } from "react";

export const useAPI = (initialValue) => {
  const [loading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchApi = (api) => {
    setIsloading(true);
    return api
      .then((r) => r.json())
      .then((d) => {
        setData(d);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setIsloading(false);
      });
  };
  const updateApi = (api) => {
    setIsloading(true);
    return (
      api
        .then((r) => r.json())
        // .then((r) => {
        //   setData([...data, r]);
        // })
        .catch((err) => {
          setError(true);
        })
        .finally(() => {
          setIsloading(false);
        })
    );
  };

  return { loading, error, data, fetchApi, updateApi };
};
