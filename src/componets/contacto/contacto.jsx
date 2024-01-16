import React from 'react';

const Contacto = () => {
  return (
    <div className="container mx-auto h-full flex items-center justify-center">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4 text-center animate__animated animate__fadeIn">
          Contacto
        </h2>
        <p className="text-lg mb-4">
          ¡Gracias por visitarnos! Si tienes alguna pregunta o comentario, no dudes en contactarnos.
        </p>
        <form className="flex flex-col">
          <label htmlFor="nombre" className="mb-2 text-lg font-semibold">
            Nombre:
          </label>
          <input type="text" id="nombre" name="nombre" className="border p-2 mb-4" />

          <label htmlFor="email" className="mb-2 text-lg font-semibold">
            Correo Electrónico:
          </label>
          <input type="email" id="email" name="email" className="border p-2 mb-4" />

          <label htmlFor="mensaje" className="mb-2 text-lg font-semibold">
            Mensaje:
          </label>
          <textarea id="mensaje" name="mensaje" rows="4" className="border p-2 mb-4"></textarea>

          <button
            type="submit"
            className="bg-teal-900 hover:bg-teal-600 text-white px-4 py-2 rounded-md mx-auto"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;