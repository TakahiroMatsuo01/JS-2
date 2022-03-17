let getBtn = document.getElementById("checkButton");
console.log("JS");
   
   getBtn.addEventListener("click",function getValue() {
    const FizzNum = parseFloat(document.getElementById('FizzNum').value);
    const BuzzNum = parseFloat(document.getElementById('BuzzNum').value);
    let err = "整数値を入力してください！";
    let Perfect = ""
    if(FizzNum === "" || BuzzNum === "") {
        document.getElementById('error').textContent = err;
    }else if(Number.isInteger(FizzNum) !== 0 && Number.isInteger(BuzzNum) !==0){
        document.getElementById('error').textContent = err ;
        document.getElementById('error_b').textContent = err ;
    }else {
     document.getElementById('error').textContent = Perfect;
  }
  
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
