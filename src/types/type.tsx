export interface Pizza {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  category: number;
  rating: number;
}
export interface PizzaBlockProps {
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}

export interface CategoriesProps {
  value: number;
  onClickChange: (index: number) => void;
}
export interface SearchProps {
  searchValue: string;
  setSearch?:(value: string) => void;
}

export interface SortItem {
  name: string;
  sortProperty: string;
}

 export interface SortProps {
  value: SortItem;
  onClickSort: (option: SortItem) => void; 
}
