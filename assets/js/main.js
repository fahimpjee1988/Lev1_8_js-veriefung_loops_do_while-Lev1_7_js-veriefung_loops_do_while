//Lev1_7_js-veriefung_loops_do_while


function myFunction() {
    let text = "";
    var i = 0;
    do {
      text += "<br>The number is " + i;
      i++;
    }
    while (i < 6);
    document.getElementById("demo").innerHTML = text;
  }

  myFunction()
console.log( myFunction())

//Lev1_8_js-veriefung_loops_do_while


function myFunction1() {
    var number = "";
    var i = 0;
    do {
      number +=  "<br>The number is "+ i;
      i+=2;
    }
    while (i < 22);
    document.getElementById("demo1").innerHTML = number;
  }


console.log(myFunction1())