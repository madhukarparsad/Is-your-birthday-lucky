const DateOfBirth = document.querySelector("#Date-Of-Birth");
const LuckyNumber = document.querySelector("#Lucky-number");
const CheckButton = document.querySelector("#check-button");
const outPut = document.querySelector("#out-put");

function gettingSum(){
    var DateValue = DateOfBirth.value;
    var sum=calculateDateOfBirth(DateValue);
    comparingValue(sum,LuckyNumber.value);
};

function calculateDateOfBirth(DateValue){
    DateValue=DateValue.replaceAll("-","");
    let sum=0;
    for (let i=0; i<DateValue.length; i++){
        sum=sum+Number(DateValue.charAt(i));
    };
    return sum;
};

function comparingValue(sum,LuckyNumber){
    if (sum%LuckyNumber===0){
        outPut.innerText=("your Birthday is lucky")
    }else{
        outPut.innerText=("your Birthday is not lucky")
    };
};


CheckButton.addEventListener("click",gettingSum);