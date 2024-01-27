import { useState } from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [qunatity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product-page">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="product-page__left">
            <div className="product-page__images">
              <img
                className="product-page__thumb-img"
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg].data?.attributes?.url
                }
                alt={data?.attributes?.title}
                onClick={() => setSelectedImg("img")}
              />
              <img
                className="product-page__thumb-img"
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg].data?.attributes?.url
                }
                alt={data?.attributes?.title}
                onClick={() => setSelectedImg("img2")}
              />
            </div>
            <div className="product-page__main-img-wrapper">
              <img
                className="product-page__main-img"
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg].data?.attributes?.url
                }
                alt="man wearing a jacket"
              />
            </div>
          </div>
          <div className="product-page__right">
            <h1 className="product-page__h1">{data?.attributes?.title}</h1>
            <span className="product-page__price-container">
              ${data?.attributes?.price}
            </span>
            <p className="product-page__description">
              {data?.attributes?.desc}
            </p>
            <div className="product-page__quantity">
              <button
                className="product-page__qty-btn"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {qunatity}
              <button
                className="product-page__qty-btn"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className="product-page__add-to-cart-btn"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img:
                      import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                      data.attributes.img.data.attributes.url,
                    qunatity: qunatity,
                  })
                )
              }
            >
              <AddShoppingCartIcon />
              Add to cart
            </button>
            <div className="product-page__links">
              <div className="product-page__link">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="product-page__link">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="product-page__info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr className="product-page__hr" />
            <div className="product-page__info">
              <span>DESCRIPTION</span>
              <hr className="product-page__hr" />
              <span>ADDITIONAL INFORMATION</span>
              <hr className="product-page__hr" />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
