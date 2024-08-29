import { MostrarPrecioUnitario, MostrarCantidad,MostrarEstado,MostrarPrecioNeto } from "./totalizador.js";

describe("Totalizador", () => {
  it("Debería mostrar el precio", () => {
    expect(MostrarPrecioUnitario(100)).toEqual(100);
  });

  it("Debería mostrar la cantidad de ítems", () => {
    expect(MostrarCantidad(5)).toEqual(5);
  });
  it("Debería mostrar estado", () => {
    expect(MostrarEstado('UT')).toEqual("UT");
  });
  it("Debería mostrar el precio neto", () => {
    expect(MostrarPrecioNeto(100,5)).toEqual(500);
  });
});
