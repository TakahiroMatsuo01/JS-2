const getBtn = document.getElementById("checkButton");
    console.log("JS");
    
    getBtn.addEventListener("click",function getValue() {
    const FizzNum = parseFloat(document.getElementById('FizzNum').value);
    const BuzzNum = parseFloat(document.getElementById('BuzzNum').value);

    
    if(FizzNum === "" || BuzzNum === "") {
        
        document.getElementById('error').textContent = "整数値を入力してください！";

    } else if(Number.isInteger(FizzNum) !== true && Number.isInteger(BuzzNum) !== true) {
        
        document.getElementById('error').textContent = "整数値を入力してください！" ;
        document.getElementById('error_b').textContent = "整数値を入力してください！" ;

    } else if(Number.isInteger(FizzNum) !== false  && Number.isInteger(BuzzNum) !== false) {

        document.getElementById('error').textContent = "";
        document.getElementById('error_b').textContent = "";

    for(let i=1; i<100; i++){
            const newDiv = document.getElementById("div1").createElement("p");
        if( i%FizzNum ===0　&& i%BuzzNum ===0) {

            let Fizz_buzzlog ="FizzBuzz\b\n"+`${i}`;
            div1.appendChild(newDiv).textContent= Fizz_buzzlog;
        
        } else if (i%FizzNum===0 ) {

            let Fizz_log = "Fizz\b\n"+`${i}`;
            div1.appendChild(newDiv).textContent= Fizz_log;
        
        } else if (i%BuzzNum===0 ) {
            
            let Buzz_log = "Buzz\b\n"+`${i}`;
            div1.appendChild(newDiv).textContent = Buzz_log;
        
            }
        }
    }       
});
