/**
 * Funcion para pedir carta
 * @param { Array<String> } mazo Ejemplo: ['9H', '5D', '5S', 'JH', '9D'...]
 * @returns { String } Devuelve una carta
 */

export const pedirCarta = ( mazo ) => {

  if ( !mazo || mazo.length === 0 ) {
    throw 'No hay cartas en el mazo'
  }

  return mazo.pop()

}