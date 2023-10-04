import css from "./TopBar.module.css";

const TopBar = () => {
  return (
    <div className={css.wrap}>
      <div className={css.container}>
        <span className={css.label}>
          Room ID: <span className={css.value}>-</span>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
