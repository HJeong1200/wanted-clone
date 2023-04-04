import { useEffect, useState } from "react";
import Card from "../Card";
import Product from "../../types/Product";
import axios from "axios";
import SERVER from "../../constants/Server";

const Products = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await axios.get(`${SERVER}/products`);
      console.log(data);
      setProductList(data.products);
    };

    getAllProducts();
  }, []);

  return (
    <main className="products-container">
      {productList?.map((el) => {
        const { title, price, thumbnail, rating } = el;
        return (
          <Card
            thumbnail={thumbnail}
            title={title}
            subtitle1={`${(price * 1000).toLocaleString("ko-KR")}원`}
            subtitle2={`★ ${rating}`}
          />
        );
      })}
    </main>
  );
};

export default Products;
