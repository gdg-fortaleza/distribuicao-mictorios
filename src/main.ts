

export function Calcular_Mictorio(quantidade: number[]){
  let mictorios = quantidade
  let posicao: number = 0;

  mictorios.map( (data: number) => {
    if( data % 2 === 0 ){
      posicao = data / 2
      console.log(posicao)
    }
    
  })


}