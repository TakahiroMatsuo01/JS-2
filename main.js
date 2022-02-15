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
            if( Fizz%getFizzValue=== 0 && Buzz % getBuzzValue === 0 ) {
                console.log(`FizzBuzz\b${Fizz}`);
                console.log(`FizzBuzz\b${Buzz}`)
            } else if ( Fizz%getFizzValue===0 ) {
                 console.log(`Fizz\b${Fizz}`);
                 console.log(`Buzz\b${Buzz}`)
            } else if ( Buzz%getBuzzValue===0 ) {
                console.log(`Fizz\b${Fizz}`);
                console.log(`Buzz\b${Buzz}`)
             }
         }
    } );
