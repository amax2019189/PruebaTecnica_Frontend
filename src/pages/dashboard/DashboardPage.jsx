import { useEffect } from "react";
import { Navbar } from "../../components/navbar/Nabvar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Content } from "../../components/dashboard/Content";
import { useGetProduct } from "../../shared/hooks/useAddProduct";

export const DashboardPage = () => {
  const { getProduct, products, isLoading } = useGetProduct();

  useEffect(() => {
    getProduct();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="dashboard-container">
      <Navbar />
      <h1 className="welcome-title">¡Bienvenido a online shop!</h1>
      <Content products={products} getProducts={getProduct} />
    </div>
  );
};