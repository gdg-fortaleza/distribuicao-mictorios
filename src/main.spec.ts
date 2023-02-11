import { Calcular_Mictorio } from "./main";

describe('main', () => {
  it('Verificar mictorio com duas pessoas', () => {

    let posicoes = [0, 1, 0, 1]

    let resultado = Calcular_Mictorio(posicoes);

    expect(resultado).toBe(0);
  });
});

export{}