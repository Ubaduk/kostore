import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from '../Json/products.json'
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((item) => item.id === parseInt(id)));
      }, 1000);
    });
    promesa.then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div className="container">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer