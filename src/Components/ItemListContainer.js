import React from "react";
import { useState, useEffect } from "react";
import products from "../Json/products.json";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(
              id ? products.filter((item) => item.category === id) : products
            );
          }, 1000);
        });
        setItem(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <ItemList item={item} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer
