import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import "./list.scss";

const list = ({ selectedSubCategories, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${selectedSubCategories.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}${sort ? `&sort=price:${sort}` : ""}`
  );

  return (
    <div className="list">
      {loading
        ? "Loading..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default list;
