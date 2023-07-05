import React, { useEffect, useState } from "react";
import Axios from "axios";

const App = () => {
  const [data, setData] = useState(null);

  const getData = () => {
    Axios.get('https://inventory-management-q6zw.onrender.com/getProducts').then(res => {
      setData(res.data);
    })
  }

  useEffect(() => {
    getData();
  }, []);

  const products = data?.map((item) => (
    <li key={item.id}>
      <i>{item.title}</i>
    </li>
  ));

  return products;
};

export default App;
