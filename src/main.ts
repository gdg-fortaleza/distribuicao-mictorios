export function Calcular_Mictorio(quantidade: number, posicoes: number[]){
  
  
  let posicoesDisponiveis: number[] = []
  
  if (quantidade === posicoes.length) {return 0}

  posicoes.forEach( (data: number, index: number) :void => {
    if (!data){
      if (posicoes[index - 1] === 0 && posicoes[index + 1] === 0) {
        posicoesDisponiveis.push(posicoes[index])
        quantidade++
      }
    }

    
  } 
  )

  return posicoes
}