export  interface Proyect{
  id:number,
  title: string,
  description: string,
  img:string,
  video?: string,
  caracteristics: caracteristic[],
  tecnologies: Tecnology [],
  enlace:string
}

export interface Tecnology{
  name: string,
  img: string,
}

export interface caracteristic{
  title: string,
  caracteristic: string[],
}
