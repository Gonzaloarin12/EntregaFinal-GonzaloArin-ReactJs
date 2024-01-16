import { Link } from 'react-router-dom';
import carritoIcon from '../../img/carrito.png';
import { useContext } from 'react';
import { carritoContext } from '../../contexto/carritoContext';

const CarWidget = () => {
  const { itemsEnCarrito } = useContext(carritoContext);

  return (
<Link to="/carrito" className="relative flex items-center">
  <img src={carritoIcon} alt="Icono de Carrito" className="w-8 h-8" />
  <span className="bg-black text-white rounded-full p-1 absolute -top-4 -right-4">
    {itemsEnCarrito()}
  </span>
</Link>
  );
};

export default CarWidget;