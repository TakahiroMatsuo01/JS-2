let getBtn = document.getElementById("checkButton");
getBtn.addEventListener("click",function getValue() {
   console.log("JS");
        const FizzNum = document.getElementById('FizzNum');
        const BuzzNum = document.getElementById('BuzzNum');
        const getFizzValue = FizzNum.value;
        const getBuzzValue = BuzzNum.value;
       for(let i=1; i<100; i++){
           let Fizz = getFizzValue*i;
           let Buzz = getBuzzValue*i;
           let FizzBuzz = Fizz * Buzz;  
            if( i%FizzBuzz ===0) {
                console.log(`FizzBuzz\b${FizzBuzz}`);
            } else if (i%FizzNum===0 ) {
                 console.log(`Fizz\b${Fizz}`);
            } else if (i%BuzzNum===0 ) {
                console.log(`Buzz\b${Buzz}`);
             }
         }
    } );
