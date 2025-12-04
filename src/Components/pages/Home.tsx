import { useEffect, useState } from "react";
import PizzaBlock from "../PizzaaBlock.tsx/Index.js";
import PizzaSkeleton from "../PizzaaBlock.tsx/Skeleton.js";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://692f522d91e00bafccd74111.mockapi.io/Products")
      .then((res) => res.json())
      .then((items) => {
        setProducts(items);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="content__items">
      {isLoading
        ? [...new Array(8)].map((_, index) => <PizzaSkeleton key={index} />)
        : products.map((obj: any) => <PizzaBlock {...obj} key={obj.id} />)}
    </div>
  );
};

export default Home;
