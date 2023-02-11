import { Calcular_Mictorio } from "./main";

describe('main', () => {
  it('Verificar mictorio com duas pessoas', () => {
    expect(Calcular_Mictorio(2)).toBe(0);
  });
});

export{}