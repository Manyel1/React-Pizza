import React from "react";

function Categories() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [activeCategory, setActiveCategory] = React.useState(0);

  function onSelectCategory(index: number) {
    setActiveCategory(index);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li key = {category}
            onClick={() => onSelectCategory(index)}
            className={activeCategory === index ? "active" : ""}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
