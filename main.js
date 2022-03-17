let getBtn = document.getElementById("checkButton");
console.log("JS");
    getBtn.addEventListener("click",function getValue() {
    const FizzNum = parseFloat(document.getElementById('FizzNum').value);
    const BuzzNum = parseFloat(document.getElementById('BuzzNum').value);
    let err = "整数値を入力してください！";
    let Perfect = ""
    if(FizzNum === "" || BuzzNum === "") {
        document.getElementById('error').textContent = err;
    }else if(Number.isInteger(FizzNum) !== true && Number.isInteger(BuzzNum) !== true){
        document.getElementById('error').textContent = err ;
        document.getElementById('error_b').textContent = err ;
    }else if(Number.isInteger(FizzNum) !== false  && Number.isInteger(BuzzNum) !== false){
        document.getElementById('error').textContent = Perfect;
        document.getElementById('error_b').textContent = Perfect;
    for(let i=1; i<100; i++){
        if( i%FizzNum ===0　&& i%BuzzNum ===0) {
            console.log(`FizzBuzz\b${i}`);
        } else if (i%FizzNum===0 ) {
            console.log(`Fizz\b${i}`);
        } else if (i%BuzzNum===0 ) {
            console.log(`Buzz\b${i}`);
        }
    }
}       
    } );
