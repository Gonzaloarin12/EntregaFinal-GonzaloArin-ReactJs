Aplicación de Comercio Electrónico - Documentación
Descripción
Esta aplicación de comercio electrónico permite a los usuarios explorar productos, agregarlos al carrito de compras, revisar su carrito y realizar el proceso de pago para completar la compra. La aplicación está construida con React y utiliza Firebase para almacenar datos, como información del producto y órdenes de compra.

Dependencias
A continuación, se presentan las dependencias clave utilizadas en la aplicación:

React: Biblioteca de JavaScript para construir interfaces de usuario.
React Router DOM: Facilita la navegación entre páginas en una aplicación React.
Firebase: Plataforma en la nube que proporciona servicios como Firestore para almacenar datos en tiempo real.
Tailwind CSS: Marco de diseño de componentes para construir interfaces de usuario modernas.
Animate.css: Biblioteca de animaciones CSS predefinidas.

Estructura del Proyecto:
App.js
El componente principal de la aplicación. Contiene el enrutador de React que gestiona las diferentes rutas de la aplicación. Además, proporciona el contexto del carrito de compras utilizando carritoContext.

Navbar.js
El componente de la barra de navegación que se muestra en la parte superior de la aplicación. Contiene enlaces a diferentes secciones y un widget de carrito que muestra la cantidad de productos en el carrito.

ContenedorDeProductos.js
Muestra una lista de productos divididos por categorías. Permite a los usuarios agregar productos al carrito haciendo clic en el botón "AGREGAR".

DetalleDeProducto.js
Muestra detalles específicos de un producto seleccionado. Los usuarios pueden agregar el producto al carrito desde esta vista o cerrar la ventana emergente.

VistaDeCarrito.js
Muestra los productos actuales en el carrito de compras. Permite a los usuarios ajustar las cantidades y eliminar productos. Muestra el total del carrito y proporciona enlaces para continuar comprando o proceder al pago.

Checkout.js
Permite a los usuarios ingresar sus datos para completar la compra. Después de enviar la información, se crea una orden en Firestore.


Autor:
Nombre: Gonzalo Ezequie Arin
Correo Electrónico: gonzaloarin12@gmail.com
GitHub: https://github.com/Gonzaloarin12/EntregaFinal-GonzaloArin-ReactJs/edit/main
