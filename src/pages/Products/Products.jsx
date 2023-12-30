import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products-page">
      <div className="products-page__left">
        <div className="products-page__filter-item">
          <h2>Product Categories</h2>
          <div className="products-page__input-wrapper">
            <input type="checkbox" id="1" value={1} />
            <label className="products-page__label" htmlFor="1">
              Shoes
            </label>
          </div>
          <div className="products-page__input-wrapper">
            <input type="checkbox" id="2" value={2} />
            <label className="products-page__label" htmlFor="2">
              Skirts
            </label>
          </div>
          <div className="product-page__input-wrapper">
            <input type="checkbox" id="3" value={3} />
            <label className="products-page__label" htmlFor="3">
              Coats
            </label>
          </div>
        </div>
        <div className="products-page__filter-item">
          <h2 className="products-page__h2">Filter by price</h2>
          <div className="products-page__input-wrapper">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>1000</span>
          </div>
        </div>
        <div className="products-page__filter-item">
          <h2 className="products-page__h2">Sort by</h2>
          <div className="products-page__input-wrapper">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
            />
            <label className="products-page__label" htmlFor="asc">
              Price (Lowest first)
            </label>
          </div>
          <div className="products-page__input-wrapper">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort("desc")}
            />
            <label className="products-page__label" htmlFor="desc">
              Price (Highest first)
            </label>
          </div>
        </div>
      </div>
      <div className="products-page__right">
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="bnner image"
          className="products-page__banner-img"
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
