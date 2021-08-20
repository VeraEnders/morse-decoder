const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
  let result = '';
  for (let i = 0; i < expr.length; i = i + 10) {
    let letterDecode = expr.slice(i, i + 10);
    if (letterDecode === '**********') {
      result += ' ';
    } else {
      let letterMorse = '';
      for (let j = 0; j < letterDecode.length; j = j + 2) {
        if (letterDecode[j] === '1' && letterDecode[j+1] === '0') {
          letterMorse += '.';
        } else if (letterDecode[j] === '1' && letterDecode[j+1] === '1') {
          letterMorse += '-';
        } else {
          continue;
        }
      }
      result += MORSE_TABLE[letterMorse];
    } 
  }
  return result;
}

module.exports = {
  decode
}