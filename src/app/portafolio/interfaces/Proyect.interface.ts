export  interface Proyect{
  id:number,
  title: string,
  description: string,
  img:string,
  caracteristics: caracteristic[],
  tecnologies: Tecnology [],
}

export interface Tecnology{
  name: string,
  img: string,
}

export interface caracteristic{
  title: string,
  caracteristic: string[],
}
