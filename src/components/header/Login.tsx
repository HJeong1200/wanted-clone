import { SearchRounded } from "@mui/icons-material";
import HeaderButton from "./HeaderButton";

const Login = () => {
  return (
    <div className="header-right">
      <SearchRounded style={{ marginRight: "10px" }} />
      <HeaderButton name="로그인/회원가입" to={"/"} />
    </div>
  );
};

export default Login;
