function converter(){
 let basefrom = document.getElementById("number-base-from").value
 let baseto = document.getElementById("number-base-to").value
 let numberToConvert = document.getElementById("number-input").value;
 let results = document.getElementById("number-results")

 let base2 = document.getElementById("number-base2");
 let base3 = document.getElementById("number-base3");
 let base4 = document.getElementById("number-base4");
 let base5 = document.getElementById("number-base5");
 let base6 = document.getElementById("number-base6");
 let base7 = document.getElementById("number-base7");
 let base8 = document.getElementById("number-base8");
 let base9 = document.getElementById("number-base9");
 let base10 = document.getElementById("number-base10");
 let base11 = document.getElementById("number-base11");
 let base12 = document.getElementById("number-base12");
 
 let base13 = document.getElementById("number-base13");
 let base14 = document.getElementById("number-base14");
 let base15 = document.getElementById("number-base15");
 let base16 = document.getElementById("number-base16");
 let base17 = document.getElementById("number-base17");
 let base18 = document.getElementById("number-base18");
 let base19 = document.getElementById("number-base19");
 let base20 = document.getElementById("number-base20");
 let base21 = document.getElementById("number-base21");
 let base22 = document.getElementById("number-base22");
 let base23 = document.getElementById("number-base23");
 let base24 = document.getElementById("number-base24");

 let base25 = document.getElementById("number-base25");
 let base26 = document.getElementById("number-base26");
 let base27 = document.getElementById("number-base27");
 let base28 = document.getElementById("number-base28");
 let base29 = document.getElementById("number-base29");
 let base30 = document.getElementById("number-base30");
 let base31 = document.getElementById("number-base31");
 let base32 = document.getElementById("number-base32");
 let base33 = document.getElementById("number-base33");
 let base34 = document.getElementById("number-base34");
 let base35 = document.getElementById("number-base35");
 let base36 = document.getElementById("number-base36");
 
 if(numberToConvert >= 0){
  base2.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(2);
  base3.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(3);
  base4.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(4);
  base5.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(5);
  base6.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(6);
  base7.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(7);
  base8.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(8);
  base9.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(9);
  base10.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(10);
  base11.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(11);
  base12.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(12);
  
  base13.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(13);
  base14.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(14);
  base15.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(15);
  base16.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(16);
  base17.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(17);
  base18.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(18);
  base19.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(19);
  base20.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(20);
  base21.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(21);
  base22.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(22);
  base23.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(23);
  base24.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(24);

  base25.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(25);
  base26.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(26);
  base27.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(27);
  base28.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(28);
  base29.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(29);
  base30.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(30);
  base31.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(31);
  base32.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(32);
  base33.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(33);
  base34.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(34);
  base35.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(35);
  base36.innerHTML = (parseInt(numberToConvert, basefrom) >>> 0).toString(36);

  results.innerHTML = parseInt(numberToConvert, basefrom).toString(baseto);
 }else{
  return 0;
 }
}