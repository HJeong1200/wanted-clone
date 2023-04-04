import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import ProductListPage from "./pages/ProductsListPage";

const App = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductListPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
