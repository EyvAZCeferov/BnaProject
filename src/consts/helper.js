export function hideNumb(e) {
    var numb = String(e);
    //use slice to remove first 12 elements
    let first12 = numb.slice(4, numb.length - numb.length / 2);
    //define what char to use to replace numbers
    let char = "*";
    let repeatedChar = "";
    if (numb.length > 12) {
      repeatedChar = char.repeat(numb.length - numb.length / 2);
    } else {
      repeatedChar = char.repeat(numb.length - numb.length / 4);
    }
    // replace numbers with repeated char
    first12 = first12.replace(first12, repeatedChar);
    //concat hidden char with last 4 digits of input
    let hiddenNumbers = numb.slice(0, 4) + first12 + numb.slice(numb.length - 4);
    //return
    return hiddenNumbers;
  }