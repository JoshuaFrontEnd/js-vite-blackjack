/**
 * Obtener el valor de la carta escogida
 * @param { String } carta Ejemplo: '9H'
 * @returns { Number } Retorna el valor de la carta
 */

export const valorCarta = ( carta ) => {

  // - Obtengo el numero del nombre de la carta, el cual me servira como valor
  const valor = carta.substring( 0, carta.length - 1 )

  // - Todo el codigo anterior se puede resumir en esta linea usando el operador ternario:
  return isNaN( valor ) ? valor === 'A' ? 11 : 10 : valor * 1

}