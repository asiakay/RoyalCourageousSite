function returnSum(ticker, quart1, quart2, quart3, quart4){
  /* initializing ticker symbol  */
  let sym = document.getElementById("ticker").value;

/* 1st quarter value */
  let q1 = parseInt( document.getElementById("quart1").value);

/* 2nd quarter value */
  let q2 = parseInt(
  document.getElementById("quart2").value);

/* 3rd quarter value */
  let q3 = parseInt(
  document.getElementById("quart3").value);

/* 4th quarter value */
  let q4 = parseInt(
  document.getElementById("quart4").value);

/* margin of safety value */
  let mos = parseFloat(document.getElementById("safety").value);

/* rate of return value */
  let ror = parseFloat(document.getElementById("return").value);

/* shares outstanding value */
  let sos = parseInt(document.getElementById("shares").value);

/* sum of 4 quarters */
  let sum = 
  q1 + q2 + q3 + q4;

/* multiply sum by 1-margin of safety percentage */
  let multBy = sum * mos;

/* divide that by rate of return */
  let divByR = multBy / ror;

/* Final valuePrice */
  let valPrice = divByR / sos;



  document.getElementById("demo").innerHTML = "The value price is:" + valPrice;

}