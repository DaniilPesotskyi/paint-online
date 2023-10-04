import Icons from "./../img/svg/tools.svg";

const Icon = ({id, className}) => {
  return (
    <svg className={className}>
      <use href={Icons + "#" + id}></use>
    </svg>
  );
};

export default Icon;
