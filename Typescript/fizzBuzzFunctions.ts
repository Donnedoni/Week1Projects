//function of fizz buzz using a if else method 
function fizzBuzz(num :number):number{
    
    if (num % 3 == 0 && num %5==0) {
        console.log("Fizz-Buzz "+ num);
        return num;
        
    }

    if(num %3==0){
        console.log("Fizz " + num );
        return num;
    }else if (num % 5==0) {
        console.log("Buzz " + num);
         return num;
    }else{
        console.log("the Number is not devisable: "+num);
        return num;
    }
    
}

fizzBuzz(1)


// a function to check fizz buzz with a switch method 
function fizzBuzzSwitch(num :number):number{
 
    switch(true){
        case(num % 3==0 && num % 5 == 0):
            console.log("Fizz-buzz "+ num);
            break;
        case(num % 5==0):
            console.log("Buzz "+ num);
            break;
        case(num % 3 == 0):
            console.log("Fizz "+ num);
            break;
        default:
            console.log("the Number is not devisable: "+num);
            break;  
    }

    return num;

}

fizzBuzzSwitch(60);

function fizzBuzzTernary(num:number):number{

    num %5 == 0 && num %3==0 ? console.log("fizz buzz"):
    num %3==0? console.log("fizz"):
    num % 5==0?console.log("buzz"):
    console.log(num);
    return num;
 }

 fizzBuzzTernary(60);