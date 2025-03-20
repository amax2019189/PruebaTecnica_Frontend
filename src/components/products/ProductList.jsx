import React, { useEffect, useState } from "react";
import { useGetProduct, useDeleteProduct } from "../../shared/hooks/useAddProduct";
import toast from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import imgNotFound from "../../assets/imgnodis.png";
import ProductModal from "./ProductModal";

const ProductList = () => {
    const { getProduct, products, isLoading } = useGetProduct();
    const { deleteProduct, isLoading: deleting } = useDeleteProduct();
    
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getProduct();
    }, []);

    const handleShowModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Lista de Productos</h2>

            {isLoading ? (
                <p className="text-center">Cargando productos...</p>
            ) : (
                <div className="row">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product._id} className="col-md-4 mb-4">
                                <div className="card text-center shadow-sm border-0">
                                    <div className="card-body">
                                        <img
                                            src={imgNotFound}
                                            alt="Producto"
                                            className="mb-3"
                                            width="100"
                                        />
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="fw-bold">${product.price}</p>
                                        
                                        <div className="d-flex justify-content-around">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleShowModal(product)}
                                            >
                                                Ver Producto
                                            </button>

                                            <button
                                                className="btn btn-danger"
                                                onClick={() => deleteProduct(product._id)}
                                                disabled={deleting}
                                            >
                                                {deleting ? "Eliminando..." : "Eliminar"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No hay productos disponibles.</p>
                    )}
                </div>
            )}

            {/* Modal para ver producto */}
            <ProductModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                product={selectedProduct}
            />
        </div>
    );
};

export default ProductList;