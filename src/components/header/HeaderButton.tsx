import { Link } from "react-router-dom";

interface PropType {
  name: string;
  to: string;
}

const HeaderButton = ({ name, to }: PropType) => {
  return (
    <Link to={to} className="header-button">
      {name}
    </Link>
  );
};

export default HeaderButton;
