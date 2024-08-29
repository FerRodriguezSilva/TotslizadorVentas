function MostrarPrecioUnitario(precio) {
    return precio;
  }
  
  function MostrarCantidad(cantidad) {
    return cantidad;
  }
  function MostrarEstado(estado){
    return estado;
  }
  
  function MostrarPrecioNeto(precio,cantidad) {
    let precioNeto;
    precioNeto=precio*cantidad;
    return precioNeto;
  }

  export { MostrarPrecioUnitario, MostrarCantidad,MostrarEstado,MostrarPrecioNeto };
  