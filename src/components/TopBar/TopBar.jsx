import css from "./TopBar.module.css";

import githubIcon from "./../../img/svg/github.svg";

const TopBar = () => {
  return (
    <div className={css.wrap}>
      <div className={css.container}>
        <a
          href="https://github.com/DaniilPesotskyi/paint-online"
          target="_black"
          className={css.link}
        >
          See the application code
          <img src={githubIcon} alt="github icon" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
