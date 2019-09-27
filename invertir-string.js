/**
 * Si tengo "hola mundo feliz"
 * Debo devolver "zilef odnum aloh"
 */

function stringReverse (phrase) {
  var phraseTemp = '';

  for(var i = phrase.length - 1; i >= 0; i--) {
    phraseTemp = phraseTemp + phrase[i];
  }

  return phraseTemp;
}