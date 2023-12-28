/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import "./featuredProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "pink long sleeved shirt ",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Black & white mini skirt",
      isNew: true,
      oldPrice: 25,
      price: 20,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Pink long sleeved shirt ",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Black Shirt ",
      isNew: false,
      oldPrice: 40,
      price: 32,
    },
  ];
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
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
