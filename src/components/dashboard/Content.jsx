import { Route, Routes } from "react-router-dom";
import ProductList from "../products/ProductList";
import AddProduct from "../products/AddProduct";

export const Content = () => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="view" element={<ProductList />} />
                <Route path="add" element={<AddProduct />} />
            </Routes>
        </div>
    );
};
