import { Link } from "react-router-dom";

import "./categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__column">
        <div className="categories__row">
          <img
            className="categories__img"
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="man in jacket"
          />
          <Link className="link categories__link" to="/products/1">
            Sale
          </Link>
        </div>
        <div className="categories__row">
          <img
            className="categories__img"
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Women"
          />
          <Link className="link categories__link" to="/products/2">
            Women
          </Link>
        </div>
      </div>
      <div className="categories__column">
        <div className="categories__row">
          <img
            className="categories__img"
            src="https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Women"
          />
          <Link className="link categories__link" to="/products/2">
            New Seson
          </Link>
        </div>
      </div>
      <div className="categories__column categories__column--large">
        <div className="categories__row">
          <div className="categories__column">
            <div className="categories__row">
              <img
                className="categories__img"
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Women"
              />
              <Link className="link categories__link" to="/products/3">
                Men
              </Link>
            </div>
          </div>
          <div className="categories__column">
            <div className="categories__row">
              <img
                className="categories__img"
                src="https://images.pexels.com/photos/2442893/pexels-photo-2442893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Watch"
              />
              <Link className="link categories__link" to="/products/4">
                Accesories
              </Link>
            </div>
          </div>
        </div>
        <div className="categories__row">
          <img
            className="categories__img"
            src="https://images.pexels.com/photos/19577243/pexels-photo-19577243/free-photo-of-woman-posing-among-shoes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Shoes"
          />
          <Link className="link categories__link" to="/products/4">
            Shoes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
