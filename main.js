let getBtn = document.getElementById("checkButton");
getBtn.addEventListener("click",function getValue() {
   console.log("JS");
        const FizzNum = document.getElementById('FizzNum').value;
        const BuzzNum = document.getElementById('BuzzNum').value;
       for(let i=1; i<100; i++){
            if( i%FizzNum ===0　&& i%BuzzNum ===0) {
                console.log(`FizzBuzz\b${i}`);
            } else if (i%FizzNum===0 ) {
                 console.log(`Fizz\b${i}`);
            } else if (i%BuzzNum===0 ) {
                console.log(`Buzz\b${i}`);
             }
         }
    } );
