import { useNavigate } from "react-router-dom";

const NavButton = ({ text, onClickHandler, variant }) => {
  return (
    <button className={`btn ${variant} mx-2`} onClick={onClickHandler}>
      {text}
    </button>
  );
};

export const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigateToAdd = () => {
    navigate('/add');
  };

  const handleNavigateToView = () => {
    navigate('/view');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Tienda en linea</span>
        <div className="d-flex">
          <NavButton text="AGREGAR PRODUCTO" onClickHandler={handleNavigateToAdd} variant="btn-primary" />
          <NavButton text="VER PRODUCTO" onClickHandler={handleNavigateToView} variant="btn-secondary" />
        </div>
      </div>
    </nav>
  );
};
