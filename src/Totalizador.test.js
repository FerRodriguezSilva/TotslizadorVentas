import { MostrarPrecio, MostrarCantidad,MostrarEstado } from "./totalizador.js";

describe("Totalizador", () => {
  it("Debería mostrar el precio", () => {
    expect(MostrarPrecio(100)).toEqual(100);
  });

  it("Debería mostrar la cantidad de ítems", () => {
    expect(MostrarCantidad(5)).toEqual(5);
  });
  it("Debería mostrar estado", () => {
    expect(MostrarCantidad('UT')).toEqual("UT");
  });
});
