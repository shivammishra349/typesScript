document.addEventListener('DOMContentLoaded', function() {
    var number1 = document.getElementById('num1') as HTMLInputElement;
    var number2 = document.getElementById('num2') as HTMLInputElement;
    var Addbut = document.querySelector('button')!  ;


    const numResult:number[] = [];
    const textResult:string[]= [];

    type NumOrString = number | string;
    type Result = {val:number; timestamp:Date}

    interface ResultObj{
        val:number;
        timestamp:Date
    }

    function add(num1: NumOrString , num2: NumOrString) {
        if(typeof num1 === 'number' && typeof num2 ==='number' ){
            return num1+num2
        }
        else if(typeof num1 ==='string' && typeof num2 ==='string'){
            return num1+' '+ num2
        }

    }

    function printResult(resultObj: ResultObj){
        console.log(resultObj.val)
    }

    Addbut.addEventListener('click', function() {
        var num1 = number1.value;
        var num2 = number2.value;
        var result = add(+num1,+num2);
        const stringresult = add(num1,num2)
        console.log(stringresult)
        console.log(result);

        numResult.push(result as number)
        textResult.push(stringresult as string)

        printResult({val:result as number , timestamp:new Date()})

        console.log(numResult , textResult)
    });
});

const myPromise = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('it works!')
    },1000)
})
.then((res)=>{
    console.log(res.split('w'))
})
.catch((err)=>{
    console.log(err)
})
