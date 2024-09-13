import { useEffect, useState } from "react";

const useData = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {}, []);

  return { cars };
};

export default useData;
