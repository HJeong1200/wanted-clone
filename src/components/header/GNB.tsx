import GNBElements from "../../constants/GNBElements";
import HeaderButton from "./HeaderButton";

const GNB = () => {
  return (
    <div className="header-center">
      {GNBElements.map((el) => {
        return <HeaderButton name={el} to={"/"} key={el} />;
      })}
    </div>
  );
};

export default GNB;
