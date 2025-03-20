import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addproduct as addProductRequest, getProduct as getProductRequest, deleteProduct as deleteProductRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useAddProducto = () => {
    const [isLoading, setIsLoading]= useState(false);
    const navigate = useNavigate();

    const addProducto = async (name, description, price, category) => {
        setIsLoading(true);
        try {
            const response = await addProductRequest({name, description, price, category});
            setIsLoading(false);
    
            if(response.error){
                return toast.error(response.e?.response?.data || 'Error al agregar el producto');
            }
            navigate('/view');
        } catch (error) {
            setIsLoading(false);
            toast.error('Error al agregar el producto');
        }
    }
    return { addProducto, isLoading };
}

export const useDeleteProduct = () => {
    const [isLoading, setIsLoading]= useState(false);
    const navigate = useNavigate();

    const deleteProduct = async (id) => {
        setIsLoading(true);
        try {
            const response = await deleteProductRequest(id);
            setIsLoading(false);
    
            if(response.error){
                return toast.error(response.e?.response?.data || 'Error al eliminar el producto');
            }
            window.location.reload();
            navigate('/view');
        } catch (error) {
            setIsLoading(false);
            toast.error('Error al eliminar el producto');
        }
    }
    return { deleteProduct, isLoading };

}

export const useGetProduct = () => {
    const [isLoading, setIsLoading]= useState(false);
    const [products, setProducts]= useState([]);
    const navigate = useNavigate();

    const getProduct = async () => {
        setIsLoading(true);
        try {
            const response = await getProductRequest();
            setIsLoading(false);
    
            if(response.error){
                return toast.error(response.e?.response?.data || 'Error al obtener los productos');
            }
            setProducts(response.data);
        } catch (error) {
            setIsLoading(false);
            toast.error('Error al obtener los productos');
        }
    }
    return { getProduct, products, isLoading };
}