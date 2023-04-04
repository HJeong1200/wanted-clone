import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface PropType {
  productsPerPage: number;
  setProductsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setCurPage: React.Dispatch<React.SetStateAction<number>>;
}

const Filter = ({
  productsPerPage,
  setProductsPerPage,
  setCurPage,
}: PropType) => {
  const OPTIONS = [10, 20, 30, 50, 100];
  const navigate = useNavigate();

  const handleFilter = (e: SelectChangeEvent<number>) => {
    setProductsPerPage(e.target.value as number);
    setCurPage(1);
    navigate("/products");
  };

  return (
    <Select value={productsPerPage} onChange={handleFilter}>
      {OPTIONS.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Filter;
