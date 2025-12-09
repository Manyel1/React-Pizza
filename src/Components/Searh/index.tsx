import type { SearchProps } from "../../types/type";
import styles from "./search.module.scss";

const Search: React.FC<SearchProps> = ({ searchValue, setSearch }) => {
  {
    return (
      <div className={styles.root}>
        <input
          value={searchValue}
          className={styles.input}
          onChange={(e) => setSearch?.(e.target.value)}
          placeholder={"Поиск..."}
        />
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 64 64"
          role="img">
          <g transform="translate(4,4)">
            <circle
              cx="24"
              cy="24"
              r="18"
              fill="#F9DDA6"
              stroke="#E08A00"
              strokeWidth="2"
            />
            <path
              d="M6 24a18 18 0 0 0 36 0"
              fill="none"
              stroke="#F2B66B"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="20" cy="18" r="3.2" fill="#D94A2A" />
            <circle cx="28" cy="28" r="3.2" fill="#D94A2A" />
            <circle cx="16" cy="30" r="2.6" fill="#D94A2A" />
            <circle cx="26" cy="16" r="1.4" fill="#F6C76B" opacity="0.9" />
            <circle cx="14" cy="20" r="1.2" fill="#F6C76B" opacity="0.9" />
            <path d="M24 6 L28 22 L12 22 Z" fill="#F9DDA6" opacity="0.16" />
          </g>

          <g transform="translate(40,40) rotate(45)">
            <rect
              x="0"
              y="0"
              width="18"
              height="4"
              rx="2"
              ry="2"
              fill="#9B9B9B"
            />
            <rect
              x="14"
              y="-6"
              width="6"
              height="6"
              rx="1"
              ry="1"
              fill="#707070"
              opacity="0.12"
            />
          </g>
        </svg>
        {searchValue ? (
          <svg
            onClick={() => setSearch?.("")}
            className={styles.clear}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth={0}></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M8 8L16 16"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 8L8 16"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        ) : null}
      </div>
    );
  }
};
export default Search;
