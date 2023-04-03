import GNBElements from "../../constants/GNBElements";

const GNB = () => {
  return (
    <div className="header-center">
      {GNBElements.map((el) => {
        return <span key={el}>{el}</span>;
      })}
    </div>
  );
};

export default GNB;
