/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import "./featuredProducts.scss";
import useFetch from "../../hooks/useFetch";
const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

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
        {error
          ? "Something went wrong"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
