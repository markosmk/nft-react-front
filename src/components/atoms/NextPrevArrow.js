import styles from './NextPrevArrow.module.css';

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + ' ' + styles.PrevArrow}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + ' ' + styles.NextArrow}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};
