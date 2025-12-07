import React from "react";

interface CategoriesProps {
  value: number;
  onClickChange: (index: number) => void; 
}

const Categories: React.FC<CategoriesProps> = ({ value, onClickChange }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={category}
            onClick={() => onClickChange(index)}
            className={value === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
