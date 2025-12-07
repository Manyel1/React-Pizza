import React, { useEffect, useState } from "react";
import PizzaBlock from "../../PizzaaBlock.tsx/Index";
import PizzaSkeleton from "../../PizzaaBlock.tsx/Skeleton";
import Categories from "../../Categories";
import Sort, { type SortItem } from "../../Sort";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryID, setCategoryID] = React.useState(0);
  const [sortId, setSortId] = useState<SortItem>({
    name: "популярности",
    sortProperty: "rating",
  });

  useEffect(() => {
    const categoryParam = categoryID > 0 ? `category=${categoryID}` : "";
    const order = sortId.sortProperty.includes("-") ? "asc" : "desc";
    const sortParam = sortId.sortProperty.replace("-", "");

    setIsLoading(true);
    fetch(
      `https://692f522d91e00bafccd74111.mockapi.io/Products?${categoryParam}&sortBy=${sortParam}&order=${order}`
    )
      .then((res) => res.json())
      .then((items) => {
        setProducts(items);
        setIsLoading(false);
      });
  }, [categoryID, sortId]);

  return (
    <div className="Pizza_content">
      <div className="content__top">
        <Categories
          value={categoryID}
          onClickChange={(index: number) => setCategoryID(index)}
        />
        <Sort
          value={sortId}
          onClickSort={(option: SortItem) => setSortId(option)}
        />
      </div>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <PizzaSkeleton key={index} />)
          : products.map((obj: any) => <PizzaBlock {...obj} key={obj.id} />)}
      </div>
    </div>
  );
};

export default Home;
