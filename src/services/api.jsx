import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://prueba-tecnica-backend-eight.vercel.app/pruebaTecnica/v1',
    timeout: 5000
})

export const addproduct = async (data) => {
    try{
        return await apiClient.post('/product/create', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getProduct = async () => {
    try{
        return await apiClient.get('/product/get')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const deleteProduct = async (id) => {
    try{
        return await apiClient.delete(`/product/delete/${id}`)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}