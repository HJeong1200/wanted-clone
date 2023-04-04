import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import axios from "axios";
import SERVER from "../constants/Server";
import { Grid, Pagination } from "@mui/material";
import Product from "../types/Product";
import { useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productList, setProductList] = useState<Product[]>([]);
  const [total, setTotal] = useState(100);
  const [productsPerPage, setProductsPerPage] = useState(20);
  const [curPage, setCurPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await axios.get(
        `${SERVER}/products?limit=${productsPerPage}&skip=${
          productsPerPage * (curPage - 1)
        }`
      );
      setProductList(data.products);
      setTotal(data.total);
    };

    getAllProducts();
  }, [curPage, productsPerPage]);

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setSearchParams(`page=${page}`);
    setCurPage(page);
  };

  return (
    <>
      <Grid container spacing={4}>
        {productList?.map((el) => {
          const { id, title, price, thumbnail, rating } = el;
          return (
            <Grid item xs={6} sm={6} md={4} lg={3} key={id}>
              <CardContainer
                thumbnail={thumbnail}
                title={title}
                subtitle1={`${(price * 1000).toLocaleString("ko-KR")}원`}
                subtitle2={`★ ${rating}`}
              />
            </Grid>
          );
        })}
      </Grid>
      <div className="pagination-container">
        <Pagination
          count={Math.ceil(total / productsPerPage)}
          page={curPage}
          onChange={handlePagination}
          size="large"
        />
        <Filter
          productsPerPage={productsPerPage}
          setProductsPerPage={setProductsPerPage}
          setCurPage={setCurPage}
        />
      </div>
    </>
  );
};

export default ProductListPage;
