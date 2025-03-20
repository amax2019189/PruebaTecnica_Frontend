import React, { useState } from "react";
import { useAddProducto } from "../../shared/hooks/useAddProduct";
import toast from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";


const AddProduct = () => {
    const { addProducto, isLoading } = useAddProducto();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, description, price, category } = formData;
        
        if (!name || !description || !price || !category) {
            toast.error("Todos los campos son obligatorios");
            return;
        }

        addProducto(name, description, price, category);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Agregar Producto</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
                <div className="mb-3">
                    <label className="form-label">Nombre del Producto</label>
                    <input type="text" name="name" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <input type="text" name="description" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input type="number" name="price" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Categoría</label>
                    <input type="text" name="category" className="form-control" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-success w-100" disabled={isLoading}>
                    {isLoading ? "Agregando..." : "Agregar Producto"}
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
