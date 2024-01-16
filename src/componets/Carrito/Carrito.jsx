import { useContext } from "react";
import { carritoContext } from "../../contexto/carritoContext";
import basurero from '../../assets/basurero.svg';
import { Link } from "react-router-dom";



const VistaDeCarrito = () => {
  const { cart, TotalDelCarrito, BorrarCarrito, RemoverProducto  } = useContext(carritoContext);

  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">TU COMPRA</h2>
      <hr className="w-40 border-t-2 border-gray-800 mb-4" />

      <ul className="w-full max-w-md">
        {cart.map((producto) => (
          <li
            key={producto.id}
            className="flex items-center mb-6 p-4 border border-gray-300 rounded-lg"
          >
            <img src={producto.img} alt="Imagen del producto" className="w-32" />
            <div className="flex ml-10">
              <div>
              <h3 className="text-lg font-bold">{producto.nombre}</h3>
              <p className="text-gray-700">${producto.precio * producto.cantidad}</p>
              <p className="text-gray-700">Cantidad: {producto.cantidad}</p>
              </div>
              <button onClick={() => RemoverProducto(producto.id) }>
                <img src={basurero} className="w-6 ml-14" alt="Basurero" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-bold mb-4" >TOTAL: $ {TotalDelCarrito()}</h3>
      <hr className="w-40 border-t-2 border-gray-800 mb-6" />

      <button className="block bg-teal-900 hover:bg-teal-600 text-white w-14 h-14 rounded-md mx-auto p-2" onClick={BorrarCarrito}>
        <img className="" src={basurero} alt="Basurero" />
      </button>
      <div className="flex gap-5">
      <button className="block bg-teal-900 hover:bg-teal-600 text-white px-4 py-2 mt-4 rounded-md mx-auto">
        <Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>
          Terminar la Compra
        </Link>
      </button>

      <button className="block bg-teal-900 hover:bg-teal-600 text-white px-4 py-2 mt-4 rounded-md mx-auto">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Seguir comprando
        </Link>
      </button>
      </div>
      

    </section>
  );
};

export default VistaDeCarrito;