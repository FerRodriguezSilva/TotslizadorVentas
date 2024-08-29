import MostrarPrecio from "./totalizador.js";

describe("Totalizador", () => {
  it("Deberia mostrar el precio", () => {
    expect(MostrarPrecio(100)).toEqual(100);
  });
});