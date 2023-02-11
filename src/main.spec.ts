import { Calcular_Mictorio } from "./main";

describe('main', () => {
  it('Verificar mictorio com duas pessoas', () => {
    expect(Calcular_Mictorio([1,2,3,4])).toBe([2,4,6,8]);
  });
});

export{}