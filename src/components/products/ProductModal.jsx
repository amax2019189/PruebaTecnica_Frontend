import React from "react";
import { Modal, Button } from "react-bootstrap";
import imgNotFound from "../../assets/imgnodis.png";

const ProductModal = ({ show, handleClose, product }) => {
    if (!product) return null; // Evita errores si no hay producto seleccionado

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-center">
                <img
                    src={imgNotFound}
                    alt={product.name}
                    className="img-fluid mb-3"
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                />
                <p><strong>Nombre:</strong> {product.name}</p>
                <p><strong>Categoría:</strong> {product.category}</p>
                <p><strong>Descripción:</strong> {product.description}</p>
                <p><strong>Precio:</strong> ${product.price}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductModal;
