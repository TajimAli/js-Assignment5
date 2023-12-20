//Q.1 Add two Numbers.
     let a = 2;
     let b = 5;
     let res = a + b;
     console.log(res);

// Output: 7

//Q.2 Find if the conditions are obeyed or not?

     let A = 5;
     let B = 3;
     if (a < 10 && a > b) {
          console.log('true');
     }
     else {
          console.log('false')
     }

//.........Q3.Check the conditions.................
     let x = 12;
     let y = 20;

     if (x % 10 && y % 10) {
          console.log("True");
     } else if (x % 10 || y % 10) {
          console.log("True");
     } else {
          console.log("False");
     }

//.......Q4.Find the first digit of a 4 digit numbe.........

     let n = 4567;
     let FirstNumber = parseInt(n / 1000);
     console.log(FirstNumber);

        
//........ Q5.Find the last digit of a 4 digit number...........

     let N = 4567;
     let LastNumber = parseInt(N % 10);
     console.log(LastNumber);


//.......Q6.Find the remainder........ 
     let p = 9;
     let q = 2;
     console.log(p % q);


//......Q7.Multiply two Numbers.........
     let r = 2;
     let s = 5;
     console.log(r * s);

//......Q8. Marks Calculato.......

     let S = 50;
     let T = 20;
     let U = 100;
     let total = S + T + U;
     let avg = total / 3;

     console.log(total);
     console.log(avg.toFixed(2))