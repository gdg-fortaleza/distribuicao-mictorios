import { Calcular_Mictorio } from "./main";

describe('main', () => {
  it('Verificar mictorio com duas pessoas', () => {

    let lugaresOcupados = [0,1]

    let resultado = Calcular_Mictorio(2, lugaresOcupados);

    expect(resultado).toBe(0);
  });

  it('Verificar quantidade igual a posições', () => {

    let resultado = Calcular_Mictorio(3, [0,1,1]);
    expect (resultado).toBe(0);
  })
});

export{}