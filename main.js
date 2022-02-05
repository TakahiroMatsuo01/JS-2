let getBtn = document.getElementById("checkButton");
getBtn.addEventListener("click",function getValue() {
   console.log("JS");
    let FizzNum = document.getElementById('FizzNum');
    let BuzzNum = document.getElementById('BuzzNum');
    let getFizzValue = FizzNum.value;
    let getBuzzValue = BuzzNum.value;

       for(let i=0; i<100; i++){
            let DEVIED=getFizzValue * getBuzzValue * i;
            if( DEVIED  % 3 === 0 && DEVIED % 5 === 0 ) {
                console.log(`FizzBuzz\b${DEVIED}`);
            } else if ( DEVIED%3===0 ) {
                console.log(`Buzz\b${DEVIED}`);
            } else if ( DEVIED%5===0 ) {
                console.log(`Fizz\b${DEVIED}`);
            }
        }
    } );
