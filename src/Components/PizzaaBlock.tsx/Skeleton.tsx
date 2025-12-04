import ContentLoader from "react-content-loader";

const PizzaSkeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    {/* КРУГ — картинка */}
    <circle cx="140" cy="120" r="115" />

    {/* Заголовок */}
    <rect x="65" y="255" rx="8" ry="8" width="150" height="22" />

    {/* Блок выбора теста / размера */}
    <rect x="20" y="290" rx="10" ry="10" width="240" height="45" />

    {/* Второй блок выбора (если есть) */}
    <rect x="20" y="345" rx="10" ry="10" width="240" height="45" />

    {/* Цена */}
    <rect x="20" y="410" rx="8" ry="8" width="90" height="28" />

    {/* Кнопка Добавить */}
    <rect x="150" y="410" rx="8" ry="8" width="110" height="28" />
  </ContentLoader>
);

export default PizzaSkeleton;
