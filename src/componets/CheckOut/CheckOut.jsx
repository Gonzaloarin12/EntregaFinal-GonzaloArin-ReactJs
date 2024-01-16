import { useContext, useState } from "react"
import { carritoContext } from "../../contexto/carritoContext";
import { db } from "../../Firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";




const Checkout = () => {

    const {cart, TotalDelCarrito, BorrarCarrito} = useContext(carritoContext)

    const [values, setValue] = useState ({
        nombre: "",
        direccion: "",
        email: "",
    })

    const [ordenId, setOrdenId] = useState (null)

    const handleInputChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
    
        setValue({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit")
        console.log(values)

        const orden = {
            cliente: values,
            items: cart,
            total: TotalDelCarrito(),
            fecha: new Date()
        }
        
        const ordenesRef = collection(db, 'ordenes')
        addDoc(ordenesRef, orden)
        .then(doc => setOrdenId(doc.id))
        BorrarCarrito()

    };

    if (ordenId) {
        return (
            <div className="container mx-auto mt-4 flex flex-col items-center">
                <h1 className="text-2xl font-bold" >Gracias por tu compra</h1>
                <hr className="w-20 border-t-2 border-gray-800 my-2"/>
                <h5>Tu numero de orden es: {ordenId} </h5>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <button className="block bg-teal-900 hover:bg-teal-600 text-white px-4 py-2 mt-4 rounded-md mx-auto">
                        Volver al Inicio
                    </button>
                </Link>
            </div>
        );
    }    
    

    return (

<div className="container mx-auto mt-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold">Ingresar tus datos para terminar la compra</h2>
        <hr className="w-20 border-t-2 border-gray-800 my-2" />

    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mt-4">

        <input 
        className="border p-2" 
        type="text" 
        placeholder="Nombre"
        value={values.nombre}
        onChange={handleInputChange}
        name="nombre"
        />

        <input 
        className="border p-2" 
        type="text" 
        placeholder="Dirección" 
        value={values.direccion}
        onChange={handleInputChange}
        name="direccion"
        />

        <input 
        className="border p-2" 
        type="email" 
        placeholder="Email" 
        value={values.email}
        onChange={handleInputChange}
        name="email"
        />
        <button className="block bg-teal-900 hover:bg-teal-600 text-white px-4 py-2 rounded-md mx-auto mt-4">
            Enviar
        </button>
    </form>
    </div>

    )
}

export default Checkout