import { useEffect, useState } from "react";
import type { Pizza, SearchProps, SortItem } from "../../../types/type.tsx";
import Categories from "../../Categories/index.tsx.tsx";
import PizzaSkeleton from "../../PizzaaBlock/Skeleton.tsx";
import PizzaBlock from "../../PizzaaBlock/Index.tsx";
import Sort from "../../Sort/index.tsx";

export const Home: React.FC<SearchProps> = ({ searchValue = "" }) => {
  const [products, setProducts] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryID, setCategoryID] = useState(0);
  const [sortId, setSortId] = useState<SortItem>({
    name: "популярности",
    sortProperty: "rating",
  });

  const skeleton = [...new Array(8)].map((_, index) => (
    <PizzaSkeleton key={index} />
  ));

  const pizzas = products
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })

    .map((obj: Pizza) => <PizzaBlock {...obj} key={obj.id} />);

  useEffect(() => {
    const categoryParam = categoryID > 0 ? `category=${categoryID}` : "";
    const order = sortId.sortProperty.includes("-") ? "asc" : "desc";
    const sortParam = sortId.sortProperty.replace("-", "");
    const search = searchValue ? `&search=${searchValue}` : "";

    setIsLoading(true);
    fetch(
      `https://692f522d91e00bafccd74111.mockapi.io/Products?${categoryParam}${search}&sortBy=${sortParam}&order=${order}`
    )
      .then((res) => res.json())
      .then((items) => {
        setProducts(Array.isArray(items) ? items : []);
        setIsLoading(false);
      });
  }, [categoryID, sortId, searchValue]);

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
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
    </div>
  );
};

export default Home;
