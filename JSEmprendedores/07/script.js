function decorado(texto){
  return "###" + texto + "###";
}
console.log(decorado("hola mundo"));

function decorarMucho(texto){
  var a = decorado(texto);
  return "---" + a + "---";
}
console.log(decorarMucho("hola bebe"));
