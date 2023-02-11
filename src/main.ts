

export function Calcular_Mictorio(quantidade: number[]){
  let mictorios = quantidade

  mictorios.map( (data: number) => {
    if( data % 2 === 0 ){
      return data
    }
    
    return 0
  })


}