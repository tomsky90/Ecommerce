/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./featuredProducts.scss";
import axios from "axios";
const FeaturedProducts = ({ type }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_REACT_APP_API_URL + "/products",
          {
            headers: {
              Authorization:
                "bearer" + import.meta.env.VITE_REACT_APP_API_TOKEN,
            },
          }
        );
        setProducts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="featured-products">
      <div className="featured-products__top">
        <h1 className="featured-products__h1">{type} products</h1>
        <p className="featured-products__p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          porro, quam obcaecati vel iste sequi harum. Laudantium adipisci culpa
          deleniti consequatur dolores. Impedit consequatur quo rerum ab,
          nostrum animi cumque.
        </p>
      </div>
      <div className="featured-products__bottom">
        {products.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
