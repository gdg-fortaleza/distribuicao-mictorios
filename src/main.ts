

export function Calcular_Mictorio(posicoes){
  let resultado: number[] = []
  // let pessoasNaFila = quantidade;

  posicoes.forEach( (data: number, index: number) => {
    if (!data){
      if (posicoes[index - 1] && posicoes[index + 1]) {
        resultado.push(posicoes[index])
      }
    }
    return resultado;
  })


}